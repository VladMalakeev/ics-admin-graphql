import {ImageRequestType, ImageResponseType} from "../../helpers/types";
import {UserType} from "../users/users.type";

export interface NewsType {
    id?:number,
    name:string,
    dateOfPublication?:Date
};

export interface NewsRecordType extends NewsType {
    description:string,
    isVisible?:boolean,
    logo?:File | FileList | undefined,
    galery?: ImageRequestType[]
}

export interface NewsResponseType extends NewsType {
    id:number,
    descriptionShort:string,
    descriptionFull:string,
    files:{
        logo:ImageResponseType,
        galery:ImageResponseType[]
    },
    Author:UserType
}