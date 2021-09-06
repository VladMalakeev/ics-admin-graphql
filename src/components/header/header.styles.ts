import styled from "styled-components";
import {HeaderHeight} from "../common.styles";

export const HeaderWrap = styled.div<any>`
    height:${HeaderHeight}px;
    width:100%;
    background:linear-gradient(216.51deg,#1058b1 26.5%,#1266BB 95.77%);
    margin-bottom:15px;
    position:fixed;
    margin:0;
    top:0;
    z-index:1000;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 10px 25px; 
    box-sizing:border-box;
`;

export const HeaderTitle = styled.h1`
    color:white;
    font-weight:bold;

    @media(max-width:420px){
        font-size:21px;
    }
`;