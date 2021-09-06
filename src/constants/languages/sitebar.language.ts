import { LangType } from "../texts.constant";

export const sitebar = (lang:LangType) => ({
    news:{
        [lang.ru.code]:"Новости",
        [lang.eng.code]:"News"
    },
    specialties:{
        [lang.ru.code]:"Специальности",
        [lang.eng.code]:"Specialties"
    },
    specializations:{
        [lang.ru.code]:"Специализации",
        [lang.eng.code]:"Specializations"
    },
    departments:{
        [lang.ru.code]:"Кафедры",
        [lang.eng.code]:"Departments"
    },
    lecturers:{
        [lang.ru.code]:"Преподаватели",
        [lang.eng.code]:"Lecturers"
    },
    groups:{
        [lang.ru.code]:"Группы",
        [lang.eng.code]:"Groups"
    },
    degrees:{
        [lang.ru.code]:"Степени",
        [lang.eng.code]:"Degrees"
    },
    semesters:{
        [lang.ru.code]:"Семестры",
        [lang.eng.code]:"Semesters"
    },
    courses:{
        [lang.ru.code]:"Курсы",
        [lang.eng.code]:"Courses"
    },
    users:{
        [lang.ru.code]:"Пользователи",
        [lang.eng.code]:"Users"
    }
});