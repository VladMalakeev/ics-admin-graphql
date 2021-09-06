import {ImageResponseType} from "../../helpers/types";
import {UserType} from "../users/users.type";
import {GroupType} from "../groups/group.type"

export type DepartmentType = {
    id:string,
    name:string,
    code:string,
    phone:string,
    descriptionShort:string,
    descriptionFull:string,
    files:DepartmentFiles,
    Head:UserType,
    Groups:GroupType[]
}

export type DepartmentFiles = {
    logo:ImageResponseType
}