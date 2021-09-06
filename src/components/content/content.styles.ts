import styled from "styled-components";
import {HeaderHeight, FooterHeight, MobileCollapsedSiteBarWidth} from "../common.styles";

export const Body = styled.div`
    height: 100vh;
    width:100%;
    background:white;
    display:flex;
    padding-top:${HeaderHeight};
`;

export const Content = styled.div`
    width:80%;
    height:100%;
    background:#F3F3F3;
    padding:10px 10px 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing:border-box;
    @media(max-width:1500px){
        width:75%;
    }

    @media(max-width:1200px){
        width:70%;
    }

    @media(max-width:900px){
        width:calc(100% - ${MobileCollapsedSiteBarWidth}px);
        margin-left: ${MobileCollapsedSiteBarWidth}px;
    }
`;

export const Information = styled.div`
    width:100%;
    height:calc(100% - ${FooterHeight + HeaderHeight}px);
    margin-top:${HeaderHeight}px;
    position:relative;
    background:white;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 4px;
    overflow:auto;

    &::-webkit-scrollbar-thumb {
        background:#e5e5e5;
    }

    &::-webkit-scrollbar {
        width:3px;
    }
`;

export const FloatingBtnWrap = styled.span`
    position:absolute;
    bottom:30px;
    left:50%;
    transform: translate(-50%, 0px);
`;

export const SinglePageWrap = styled.div`
    position:relative;
`;

export const SinglePageHeader = styled.div`
    width:100%;
    height:60px;
    top:0;
    position:sticky;
    border-bottom:1px solid #dbdbdb;
    padding:5px 25px;
    background:#f7f7f7;
    display:flex;
    justify-content:space-between;
    box-sizing:border-box;
    z-index:100;
`;

export const SinglePageHeaderBtnWrap = styled.div`
    margin:5px;
`;

export const SinglePageContent = styled.div`
    padding: 25px 25px 25px 25px;
 `;

 export const SinglePageContentElement = styled.div`
    margin-bottom:20px;
 `;

export const SinglePageContentElementCol = styled.div`
    display:flex;
    justify-content:space-between;
`;

export const SinglePagePhotoUploadBorder = styled.div<{img:string}>`
    width:100%;
    height:250px;
    border:2px dashed #aedcb1;
    border-radius:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    background: url("${props => props?.img ?? "none"}");
`;

export const SinglePageMainPhotoWrap = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:300px;
`;
export const SinglePageMainPhoto = styled.img`
    width:auto;
    height:100%;
    border-radius:5px;
`;
