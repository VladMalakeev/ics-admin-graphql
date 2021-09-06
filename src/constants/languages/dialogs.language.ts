import { LangType } from "../texts.constant";

export const dialogs = (lang:LangType) => ({
    deleteNewsTitle:{
        [lang.ru.code]:"Вы уверенны что хотите удалить новость?",
        [lang.eng.code]:"Are you sure you want to delete the news?"
    }
});