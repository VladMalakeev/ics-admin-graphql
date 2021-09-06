import { LangType } from "../texts.constant";

export const news = (lang:LangType) => ({
    title:{
        [lang.ru.code]:"Заголовок",
        [lang.eng.code]:"Title"
    },
    dateOfPublication:{
        [lang.ru.code]:"Дата публикации",
        [lang.eng.code]:"Date of publication"
    },
    author:{
        [lang.ru.code]:"Автор",
        [lang.eng.code]:"Author"
    },
    description:{
        [lang.ru.code]:"Описание",
        [lang.eng.code]:"Description"
    },
    image:{
        [lang.ru.code]:"Основное изображение",
        [lang.eng.code]:"Main image"
    },
    email:{
        [lang.ru.code]:"Электронная почта",
        [lang.eng.code]:"E-mail"
    },
    fullName:{
        [lang.ru.code]:"ФИО",
        [lang.eng.code]:"Full name"
    }
});

export const invite = (lang:LangType) => ({
    email:{
        [lang.ru.code]:"Электронная почта",
        [lang.eng.code]:"E-mail"
    },
    fullName:{
        [lang.ru.code]:"ФИО",
        [lang.eng.code]:"Full name"
    }
});