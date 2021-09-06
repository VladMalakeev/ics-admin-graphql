import {useContext} from "react";
import { HeaderWrap, HeaderTitle } from "./header.styles"
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Languages } from "./languages.component";
import { LanguageContext } from "../..";
import { texts } from "../../constants/texts.constant";


type HeaderComponentType = {
    onLogout:(token:string) => void
}

export const HeaderComponent:React.FC<HeaderComponentType> = ({onLogout}) => {
   const {language} = useContext(LanguageContext);
   const logout = () => {
    localStorage.removeItem("token");   
    onLogout("");
   }

    return(
        <HeaderWrap>
            <HeaderTitle>ICS Admin Panel</HeaderTitle>

            <span>
                <Languages/>
                <Button
                    onClick={logout}  
                    variant="contained"
                    color="secondary" 
                    startIcon={<ExitToAppIcon />} >
                        {texts.buttons.exit[language]}
                </Button>
            </span>
        </HeaderWrap>
    )
}