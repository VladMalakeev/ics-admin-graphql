import * as yup from "yup";
import {texts} from "../../constants/texts.constant";

const schema = (lang:string) => yup.object().shape({
        name: yup.string()
            .required(texts.validation.common.required[lang])
            .max(50, texts.validation.common.maxLength[lang](50)),
        description: yup.string()
            .required(texts.validation.common.required[lang]),
        logo: yup.mixed()           
            .test("fileSize","файл слишком большой", (value) => value && value[0].size <= 200000)               
})

export default schema;