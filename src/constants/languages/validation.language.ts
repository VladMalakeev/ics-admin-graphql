import { LangType } from "../texts.constant";

export const common = (lang:LangType) => ({
    required:{
        [lang.ru.code]:"Это поле является обязательным",
        [lang.eng.code]:"This field is required"
    },
    maxLength:{
        [lang.ru.code]: (length:number) => `Допустимо максимум ${length} символов`,
        [lang.eng.code]:(length:number) => `Maximum ${length} characters allowed`
    },
    maxFileSize:{
        [lang.ru.code]:"Размер файла не должен превышать 2МБ",
        [lang.eng.code]:"File size should not exceed 2MB"
    },
    allowedImageTypes:{
        [lang.ru.code]:"Допутимы изображения следующих форматов: jpg, jpeg, png, webp",
        [lang.eng.code]:"The following image formats are accepted: jpg, jpeg, png, webp"
    }
})