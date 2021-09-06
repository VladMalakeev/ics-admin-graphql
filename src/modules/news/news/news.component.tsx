import React, {useState, useEffect, useRef, useContext} from "react";
import { useForm } from "react-hook-form";
import { NewsResponseType, NewsRecordType } from "../news.type";
import { useMutation } from '@apollo/client';
import moment from "moment";
import {useHistory}  from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';

import {ADD_NEWS, EDIT_NEWS, GET_NEWS_LIST} from "../news.gql";
import validationSchema from "../news.validation";
import JoditEditor from "jodit-react"
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import { LanguageContext } from "../../..";
import { texts } from "../../../constants/texts.constant";
import { SinglePageContent,
         SinglePageHeader,
         SinglePageWrap,
         SinglePageHeaderBtnWrap,
         SinglePageContentElement, 
         SinglePageContentElementCol,
         SinglePagePhotoUploadBorder,
         SinglePageMainPhotoWrap,
         SinglePageMainPhoto } from "../../../components/content/content.styles";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { IconButton } from "@material-ui/core";
import { links } from "../../../constants/links.constant";
import { NavLink } from "react-router-dom";
import { SimpleText } from "../../../components/common.styles";

type NewsComponentType = {
    data?:NewsResponseType | undefined,
    action: "create" | "update"
}

type NewsMutatuinType = {
    newsCreate:NewsResponseType
}

type UpdateNewsMutatuinType = {
    editNews:NewsResponseType
}

interface FormDataType extends NewsRecordType {
    logo:FileList
}

export const NewsComponent = ({data}:NewsComponentType) => {
    const history = useHistory();
    const {language} = useContext(LanguageContext);
    const [description, setDescription] = useState<any>(data ? data.descriptionFull : '');
    const [logoPath, setLogoPath] = useState(data?.files.logo ? process.env.REACT_APP_FILES + data?.files.logo.src.size_600 : '');
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<NewsRecordType>({resolver:yupResolver(validationSchema(language))});
    const editor = useRef(null);

    const [createNews] = useMutation<NewsMutatuinType, NewsRecordType>(ADD_NEWS);
    const [updateNews] = useMutation<UpdateNewsMutatuinType, NewsRecordType>(EDIT_NEWS);
  
    useEffect(() => {
        register("description");
        setValue("description", description);
    }, [register]);

    
    const onDescriptionChange = (value:any) => {
        setDescription(value);
        setValue("description", value);
    }

    const onLogoChange = (event:any) => {
        setLogoPath(URL.createObjectURL(event?.target?.files[0]));
    }

    const onSubmit = (formData:FormDataType) => {
        
        let requestObj:NewsRecordType = {
            name:formData.name,
            description:formData.description,
        }
        formData.dateOfPublication && (requestObj.dateOfPublication = formData.dateOfPublication)
        
        if(formData?.logo){
            console.log(formData.logo)
             requestObj.logo = formData?.logo[0]
        }

        if(data && data.id) {
            updateNews({
                variables:{...requestObj, id:data.id},
                update(cache, {data:updateResponse}:any) {
                    const existingNews: any = cache.readQuery({ query: GET_NEWS_LIST }); 
                    const newData = existingNews!.news.map((news:any) => (news.id === updateResponse.editNews.id ? news = updateResponse.editNews : news));
                    cache.writeQuery({   
                      query: GET_NEWS_LIST,
                      data: {news: newData}
                    });
                  }
            })
            .then(() => { history.push("/news/")})
            .catch(error => console.log(error))
        }
        else { 
             createNews({                                      
                variables:{...requestObj},
                update(cache, {data:addResponse}:any) {      
                    cache.modify({
                        fields: {
                            news: (newsRefs) => {
                            return [...newsRefs, addResponse.addNews];
                            }
                        }
                    })
                 }
            })
            .then(() => history.push("/news/"))
            .catch(error => console.log(error))
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} encType={'multipart/form-data'}>
            <SinglePageWrap>
                <SinglePageHeader>
                    
                    <NavLink to={links.news.queryList} >
                        <IconButton color="primary" aria-label="edit">
                            <NavigateBeforeIcon />
                        </IconButton>
                    </NavLink>
                    
                    <SinglePageHeaderBtnWrap>
                        <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                startIcon={<SaveIcon />}
                            >
                                {data && data.id ? texts.buttons.updateNews[language] :texts.buttons.saveNews[language]}
                        </Button>
                    </SinglePageHeaderBtnWrap>
                </SinglePageHeader>
                
                <SinglePageContent>
                    
                    {/* Title */}
                    
                    <SinglePageContentElement>
                        <TextField 
                            id="name"
                            label={texts.entity.news.title[language]}
                            {...register("name")}
                            defaultValue={data?.name}
                            fullWidth
                            size={'medium'}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                        />
                    </SinglePageContentElement>
                    
                    {/* Photo */}

                    <SinglePageContentElement>

                        {logoPath &&
                            <SinglePageMainPhotoWrap>
                                <SinglePageMainPhoto src={logoPath}/>
                            </SinglePageMainPhotoWrap>
                        }
                       {/* {errors.logo && errors.logo?.message} */}
                       {(!data?.files.logo) &&
                            <SinglePagePhotoUploadBorder img={logoPath}>
                                <input
                                    style={{display:"none"}}
                                    accept="image/*"
                                    id="contained-button-file"
                                    type="file"
                                    {...register("logo")}
                                    name="logo"
                                />
                                <label htmlFor="contained-button-file">
                                    <Button variant="contained" color="primary" component="span" startIcon={<PhotoCamera />}>
                                        {texts.buttons.uploadImage[language]}
                                    </Button>
                                </label>
                            </SinglePagePhotoUploadBorder>
                        }
                    </SinglePageContentElement>

                    {/* Description */}

                    <SinglePageContentElement>

                        <SimpleText>Полное описание новости</SimpleText>
                        <span>{errors.description && errors.description?.message}</span>    
                        
                        <JoditEditor
                            ref={editor}
                            value={description}
                            onChange={(value) => onDescriptionChange(value)} 
                           // config={config}
                        />
                    </SinglePageContentElement>
                   
                    <SinglePageContentElement>
                        <SinglePageContentElementCol>
                            {/* Date of publication */}

                            <TextField
                                id="dateOfPublication"
                                label={texts.entity.news.dateOfPublication[language]}
                                type="datetime-local"
                                defaultValue={data ? moment(data.dateOfPublication).format("YYYY-MM-DDThh:mm") : moment().format("YYYY-MM-DDThh:mm")}
                                InputLabelProps={{shrink: true}}
                                {...register("dateOfPublication")}
                                name="dateOfPublication"
                            />
                        </SinglePageContentElementCol>
                    </SinglePageContentElement>
                </SinglePageContent>
            </SinglePageWrap>
        </form>
    )
}