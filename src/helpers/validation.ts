import { FieldError } from "react-hook-form";


type ErrorResponse = {
    [key:string]:string
}

const defaultResponse:ErrorResponse = {
    required:"Это поле является обязательным!",
    maxLength:"Превышена мансимальная длина",
    exception:"Поле не валидное"
}

export const formValidation = (error:FieldError | undefined, response?:ErrorResponse | undefined) => {
    if(error){
        if(response && response[error?.type]) return response[error?.type];
        else return defaultResponse[error?.type ?? "exception"]
    }
    else return false;
}