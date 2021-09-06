import React, {FC} from "react";
import {GET_NEWS_BY_ID} from "../news.gql";
import {useQuery} from "@apollo/client";
import {NewsResponseType} from "../news.type";
import { NewsComponent } from "./news.component";
import { NotFound, Preloader } from "../../../components/plugs.component";

type FetchNewsContainerType = {
    id: number | undefined
}

type OneNewsType = {
    newsById:NewsResponseType
}

export const FetchNewsContainer = (props:FetchNewsContainerType) => {
    const {data, loading, error} = useQuery<OneNewsType>(GET_NEWS_BY_ID, { variables: { id: Number(props.id) } });

    if(loading) return <Preloader/>
    if(error) return <NotFound/>
    if(data && !data.newsById) return <NotFound/>
    return <NewsComponent data={data && data.newsById} action="update"/>
}