import { LangType } from "../texts.constant";

export const buttons = (lang:LangType) => ({
    addNews:{
        [lang.ru.code]:"Добавить новость",
        [lang.eng.code]:"Add news"
    },
    saveNews:{
        [lang.ru.code]:"Создать новость",
        [lang.eng.code]:"Create news"
    },
    updateNews:{
        [lang.ru.code]:"Обновить новость",
        [lang.eng.code]:"Update news"
    },
    exit:{
        [lang.ru.code]:"Выйти",
        [lang.eng.code]:"Log out"
    },
    cancel:{
        [lang.ru.code]:"Отмена",
        [lang.eng.code]:"Cancel"
    },
    agree:{
        [lang.ru.code]:"Подтвердить",
        [lang.eng.code]:"Agree"
    },
    uploadImage:{
        [lang.ru.code]:"Загрузить изображение",
        [lang.eng.code]:"Upload image"
    },
    login:{
        [lang.ru.code]:"Перейти в административную панель",
        [lang.eng.code]:"Go to the admin panel"
    },
    send:{
        [lang.ru.code]:"Отправить",
        [lang.eng.code]:"Send"
    }
});