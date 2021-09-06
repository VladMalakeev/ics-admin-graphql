import {useContext} from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import {Centered, PlugImg, PlugText} from "./common.styles";
import NotFoundImg from "../assets/images/404-error.png";
import RequestErrorImg from "../assets/images/cloud.png";
import EmptyDataImg from "../assets/images/empty.png";
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { NavLink } from 'react-router-dom';
import { texts } from "../constants/texts.constant";
import {LanguageContext} from "../index"

export const Preloader = () => {
    return <Centered>
        <CircularProgress/>
    </Centered>
}

export const NotFound = () => {
    const {language} = useContext(LanguageContext);

    return <Centered>
        <PlugImg src={NotFoundImg}/>
        <PlugText>{texts.plugs.notFound[language]}</PlugText>
    </Centered>
}

export const RequestDataError = () => {
    const {language} = useContext(LanguageContext);

    return <Centered>
        <PlugImg src={RequestErrorImg}/>
        <PlugText>{texts.plugs.requestDataError[language]}</PlugText>
    </Centered>
}

export const EmptyData = () => {
    const {language} = useContext(LanguageContext);

    return <Centered>
        <PlugImg src={EmptyDataImg}/>
        <PlugText>{texts.plugs.emptyData[language]}</PlugText>
    </Centered>
}

type AddFirstDataType = {
    message:string,
    link: string
}

export const AddFirstData = ({message, link}:AddFirstDataType) => {
    const {language} = useContext(LanguageContext);

    return <Centered>
        <PlugText>{texts.plugs.emptyData[language]}</PlugText>
        <NavLink to={link} style={{textDecoration:'none'}}>
            <Fab variant="extended" color="primary" aria-label="add">
                <AddIcon />
                {message}
            </Fab>
        </NavLink>
    </Centered>
}