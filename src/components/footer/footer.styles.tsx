import styled from "styled-components";
import {FooterHeight} from "../common.styles";

export const FooterWrap = styled.div`
    width: 100%;
    height:${FooterHeight}px;
    background:#1058b1;
    margin-top:10px;
    border-top-left-radius:3px;
    border-top-right-radius:3px;
    box-shadow:0px -1px 3px 0px #00000038;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const FooterLogo = styled.img`
    width:45px;
    height:45px;
`;