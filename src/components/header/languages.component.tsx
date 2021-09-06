import {useContext} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { LanguageContext } from "../..";
import { lang } from "../../constants/texts.constant";


const useStyles = makeStyles({
    menuStyle:{
        background:'white',
        margin:"0 30px",
        width:"120px",
        borderRadius:"5px",
        padding:"1px 10px"
        
    }
});

export const Languages = () => {
    const {language, changeLanguage} = useContext(LanguageContext);
    const classes = useStyles();

    const GetMenuItems = () => {
        let itemsArr = [];
        for(let value in lang){
            if(lang.hasOwnProperty(value)){
                  itemsArr.push(<MenuItem key={value} value={lang[value].code}>{lang[value].name}</MenuItem>)
            }
        }
        return itemsArr;
    }

    return <Select
                value={language}
                onChange={(event) => changeLanguage(event.target.value as string)}
                displayEmpty
                className={classes.menuStyle}
            >
        {GetMenuItems()}
    </Select>
}