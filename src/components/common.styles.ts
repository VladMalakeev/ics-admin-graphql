import styled from "styled-components";

export const HeaderHeight = 70;
export const FooterHeight = 10;

export const SiteBarPadding = 15;
export const MobileSiteBarPadding = 5;
export const MobileSiteBarWidth = 300;
export const MobileCollapsedSiteBarWidth = 60;

export const MediaScreenSize = {
    WIDE:1500,
    MEDIUM:1200,
    SMALL:900
}

export const Centered = styled.div`
    width:100%;
    position:absolute;
    top:50%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    transform: translate(0px, -50%);
`;

export const PlugImg = styled.img`
    width:150px;
    height:150px;
`;

export const PlugText = styled.p`
    font-size: 30px;
    font-weight: bold;
    color: #777777;
    font-family: sans-serif;
`;

export const SimpleText = styled.p`
    font-size:16px;
    color:#777777;
    font-family: sans-serif;
`;