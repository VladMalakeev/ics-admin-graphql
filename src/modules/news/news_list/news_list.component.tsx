import React, {useContext} from 'react';
import {GET_NEWS_LIST, DELETE_NEWS} from "../news.gql";
import {useQuery, useMutation} from "@apollo/client";

import { TableActions, TableColumnType,TableComponent } from "../../../components/table.component";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import {NewsResponseType} from "../news.type";
import { FloatingBtnWrap } from '../../../components/content/content.styles';
import { NavLink } from 'react-router-dom';
import { AddFirstData, Preloader, RequestDataError } from '../../../components/plugs.component';
import { NotiFy } from '../../../components/notifications.component';
import { links } from '../../../constants/links.constant';
import { LanguageContext } from '../../..';
import { texts } from '../../../constants/texts.constant';

  type NewsListType = {
      news:{
       News:Array<NewsResponseType>
      }
  }

  type DeleteNewsResponseType = {
    deleteNews:{
      id:number
    }
  }

  type DeleteNewsVariablesType = {
      id:number
  }


export const NewsListComponent = () => {

    const {data, loading, error} = useQuery<NewsListType>(GET_NEWS_LIST);   // запросить список новостей
    const [deleteNews,{error:deleteError, data:deleteData}] = useMutation<DeleteNewsResponseType, DeleteNewsVariablesType>(DELETE_NEWS);  // удалить новость

    const {language} = useContext(LanguageContext);

    const deleteNewsAction = (id:number) => {
      deleteNews(               // делаем запрос на удаление
        {variables:{id:id},
        update(cache, {data:deleteResponse}:any) {
          const existingNews: any = cache.readQuery({ query: GET_NEWS_LIST });   // получить данные из кеша по  query: GET_NEWS_LIST
          const newData = existingNews!.news.filter((t:any) => (t.id !== deleteResponse.deleteNews.id));
          cache.writeQuery({   // записать в кэш новые данные
            query: GET_NEWS_LIST,
            data: {news: newData}
          });
        }
      })
      .catch(error => console.log(error))
    }

    const NewsTitleFormat = (data:NewsResponseType) => <NavLink to={"/news/"+data.id}>{data.name}</NavLink>
    const NewsActionFormat = (data:NewsResponseType) => <TableActions editLink={"/news/"+data.id} deleteAction={() => deleteNewsAction(data?.id)} dialogMessage={texts.dialogs.deleteNewsTitle[language]}/>
    const NewsAuthorFormat = (data:NewsResponseType) => data?.Author?.name;

    const columns: Array<TableColumnType<NewsResponseType>> = [
      { 
        id: 'name',
        label: texts.entity.news.title[language],
        minWidth: 170,
        align: 'left',
        format: NewsTitleFormat
      },
      { 
        id: 'dateOfPublication',
        label: texts.entity.news.dateOfPublication[language],
        minWidth: 100,
        align: 'center'
      },
      { 
        id: 'Author',
        label: texts.entity.news.author[language],
        minWidth: 170,
        align: 'center',
        format:NewsAuthorFormat
      },
      {
        id:"action",
        label:"",
        minWidth:100,
        align:"right",
        format: NewsActionFormat
      }
    ];
    
    if(loading) return <Preloader/>
    if(error) return (
      <>
        <RequestDataError/>
        <NotiFy message={texts.notify.error[language]} type="error"/>
      </>
    )
    
    return <>
          {deleteError && <NotiFy message="Ошибка при удалении!" type="error"/>}
          {deleteData?.deleteNews &&  <NotiFy message="Новость была удалена" type="success"/>}
         
         <TableComponent<NewsResponseType> columns={columns} data={data?.news.News}/>
        
        {!data || !data.news.News.length && <AddFirstData message={texts.buttons.addNews[language]} link={links.news.create} />}
        
        {data && data.news.News.length > 0 &&
          <FloatingBtnWrap>
            <NavLink to={links.news.create}>
              <Fab color="primary" aria-label={texts.buttons.addNews[language]}>
                <AddIcon />
              </Fab>
            </NavLink>
          </FloatingBtnWrap>
        }
      </>
}