import { LangType } from "../texts.constant";

export const notify = (lang:LangType) =>  ({
    error:{
        [lang.ru.code]:"Произошла ошибка, попробуйте позже",
        [lang.eng.code]:"An error occured, please try later"
    }
});