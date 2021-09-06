import { LangType } from "../texts.constant";

export const plugs = (lang:LangType) => ({
    notFound:{
        [lang.ru.code]:"Запрашиваемая страница не найдена :(",
        [lang.eng.code]:"The requested page was not found :("
    },
    requestDataError:{
        [lang.ru.code]:"Извините, произошла ошибка :(",
        [lang.eng.code]:"Sorry, there was an error :("
    },
    emptyData:{
        [lang.ru.code]:"Здесь еще нет данных!",
        [lang.eng.code]:"No data here yet!"
    }
});