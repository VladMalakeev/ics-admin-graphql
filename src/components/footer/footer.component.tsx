import React from "react";
import {FooterWrap, FooterLogo} from "./footer.styles";
import LOGO  from "../../assets/images/logo.png";
type FooterComponentType = {}

export const FooterComponent: React.FC<FooterComponentType> = ():any => {
    return(
            <FooterWrap>
                <FooterLogo src={LOGO}/>
            </FooterWrap>
    );
};