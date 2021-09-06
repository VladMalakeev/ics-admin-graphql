import {ImageResponseType} from "../../helpers/types"
import {AcademicDegreeType} from "../degrees/degrees.type";
import {DepartmentType} from "../departments/department.type";

export type UserType = {
    id:string,
    name:string,
    email:string,
    phone:string,
    description:string,
    emailConfirmed:boolean,
    lastActivityTime:string,
    files:UserFilesType,
    AcademicDegree:AcademicDegreeType,
    Role:UserRoleType,
    Department:DepartmentType
}

export type UserRoleType = {
    id:number,
    name:string,
    displayName:string
}

export type UserFilesType = {
    logo:ImageResponseType
}

export type InviteAdminRecordType = {
    email:string,
    fullName:string
}

export type InviteAdminResponseType = {
    inviteAdmin:string
}