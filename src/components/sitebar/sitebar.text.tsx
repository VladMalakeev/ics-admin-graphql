import React from "react";
import EmojiEmotionsRounded from "@material-ui/icons/EmojiEmotionsRounded"; 
import AdbRoundedIcon from '@material-ui/icons/AdbRounded';
import FilterVintageRoundedIcon from '@material-ui/icons/FilterVintageRounded';
import HouseRoundedIcon from '@material-ui/icons/HouseRounded';
import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';
import PetsRoundedIcon from '@material-ui/icons/PetsRounded';
import StarsRoundedIcon from '@material-ui/icons/StarsRounded';
import NightsStayRoundedIcon from '@material-ui/icons/NightsStayRounded';
import LocalMallRoundedIcon from '@material-ui/icons/LocalMallRounded';
import FaceIcon from '@material-ui/icons/Face';
import { texts } from "../../constants/texts.constant";
import { links } from "../../constants/links.constant";


export default {
    blocks:[
        {
            id:1,
            elements:[
                {
                    title:texts.sitebar.news,
                    link:links.news.queryList,
                    ico:<EmojiEmotionsRounded color="action"/>
                }
            ]
        },
        {
            id:2,
            elements:[
                {
                    title:texts.sitebar.specialties,
                    link:links.specialties.queryList,
                    ico:<AdbRoundedIcon color="action"/>
                },
                {
                    title:texts.sitebar.specializations,
                    link:links.specializations.queryList,
                    ico:<FilterVintageRoundedIcon color="action"/>
                },
                {
                    title:texts.sitebar.departments,
                    link:links.departments.queryList,
                    ico:<HouseRoundedIcon color="action"/>
                },
                {
                    title:texts.sitebar.lecturers,
                    link:links.lecturers.queryList,
                    ico:<LanguageRoundedIcon color="action"/>
                },
                {
                    title:texts.sitebar.groups,
                    link:links.groups.queryList,
                    ico:<PetsRoundedIcon color="action"/>
                }
                
            ]
        },
        {
            id:3,
            elements:[
                {
                    title:texts.sitebar.degrees,
                    link:links.academicDegrees.queryList,
                    ico:<StarsRoundedIcon color="action"/>
                },
                {
                    title:texts.sitebar.semesters,
                    link:links.semesters.queryList,
                    ico:<NightsStayRoundedIcon color="action"/>
                },
                {
                    title:texts.sitebar.courses,
                    link:links.courses.queryList,
                    ico:<LocalMallRoundedIcon color="action"/>
                 
                }
            ]
        },
        {
            id:4,
            elements:[
                {
                    title:texts.sitebar.users,
                    link:links.users.queryList,
                    ico:<FaceIcon color="action"/>
                }
            ]
        }
    ]
} 