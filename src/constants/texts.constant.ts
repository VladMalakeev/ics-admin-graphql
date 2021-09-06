import {sitebar} from "./languages/sitebar.language"
import {plugs} from "./languages/plugs.language";
import {notify} from "./languages/notify.language";
import {buttons} from "./languages/buttons.language";
import {news, invite} from "./languages/entities.language"
import { dialogs } from "./languages/dialogs.language";
import { common } from "./languages/validation.language";
 
export type LangType = {
   [key:string]:{
       code:string,
       name:string
   }
}

export const lang:LangType = {
    ru:{
        code:"ru",
        name:"Русский"
    },
    eng:{
        code:"eng",
        name:"English"
    }
}

export const texts = {
    sitebar:sitebar(lang),
    plugs:plugs(lang),
    notify:notify(lang),
    buttons:buttons(lang),
    dialogs:dialogs(lang),
    entity:{
        news:news(lang),
        invite:invite(lang)
    },
    validation:{
        common:common(lang)
    }
}