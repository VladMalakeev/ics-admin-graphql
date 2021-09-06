import styled from "styled-components";
import {NavLink} from "react-router-dom"; 
import {
    HeaderHeight,
    MobileCollapsedSiteBarWidth,
    MobileSiteBarWidth,
    MobileSiteBarPadding,
    MediaScreenSize
} from "../common.styles";


export const SiteBarWrap = styled.div<any>`
    height:auto;
    width:20%;
    background:white;
    position:relative;
    padding:0 10px;
    box-shadow: 1px 0 3px #00000019;
    box-sizing:border-box;
    z-index:3;

    @media(max-width:${MediaScreenSize.WIDE}px){
        width:25%;
    }

    @media(max-width:${MediaScreenSize.MEDIUM}px){
        width:30%;
    }

    @media(max-width:${MediaScreenSize.SMALL}px){
        padding:${MobileSiteBarPadding}px;
        position:fixed;
        width:${prop => prop.status ? MobileSiteBarWidth : MobileCollapsedSiteBarWidth}px;
        height:100%;
        padding-top: ${HeaderHeight+MobileSiteBarPadding}px;
        transition:500ms;
    }
`;

export const SiteBarComponentsWrap = styled.div`
    background:white;
    position:sticky;
    width:100%;
    height:calc(100vh - ${HeaderHeight}px);
    top: ${HeaderHeight}px;
    overflow:hidden;
    overflow-y:auto;

    &::-webkit-scrollbar-thumb {
        background:#e5e5e5;
    }

    &::-webkit-scrollbar {
        width:3px;
    }

    @media(max-width:${MediaScreenSize.SMALL}px){
        height:calc(100vh - ${HeaderHeight + MobileSiteBarPadding + MobileSiteBarPadding}px);
        top: ${HeaderHeight+MobileSiteBarPadding}px;
    }
`;

export const SiteBarMenuComponent = styled.div`
    width:100%;
    background:white;
    height:auto;
    padding:15px 0px 15px 0px;
    box-sizing: border-box;
    border-bottom:1px solid #b0b0b054;
`;


export const SiteBarMenu = styled(NavLink)`
    padding:10px 5px;
    display:flex;
    align-items:center;
    height:25px;
    text-decoration:none;
    transition:300ms;

    svg{
        font-size:25px;
    }
    :hover{
        background:#f2f2f2;
    }
    &.active {
        background:#f2f2f2;
    }
`;

export const SiteBarMenuIcon = styled.div`
    margin:0 7px;
    display:flex;
`;

export const SiteBarMenuLink = styled.span`
    font-size:20px;
    margin-left:10px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    font-family:"Roboto", "Helvetica", "Arial", sans-serif;
    color:#717171;
`;

export const SiteBarBurgerButton = styled.span`
    padding:5px 0px;
    background:white;
    position:sticky;
    top:0;
    width:100%;
    display:none;

    @media(max-width:${MediaScreenSize.SMALL}px){
        display:block;
    }
`;

export const SiteBarMenuWrap = styled.div``;