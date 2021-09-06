type PropertiesTypes<T> = T extends {[key:string] : infer U} ? U : never; 
export type InferActionsTypes<T extends {[key:string] : (...args:any[]) => any }> = ReturnType<PropertiesTypes<T>>

export type ImageRequestType = {
    image:File,
    sort:number
}

export type ImageResponseType = {
    id:string,
    sort:number,
    src:{
        size_64:string,
        size_128:string,
        size_600:string
    }
   
}

