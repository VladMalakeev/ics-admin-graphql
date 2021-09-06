import React, {useState, useEffect, useContext} from 'react';
import {
        SiteBarWrap,
        SiteBarComponentsWrap,
        SiteBarMenuComponent,
        SiteBarBurgerButton,
        SiteBarMenu,
        SiteBarMenuLink,
        SiteBarMenuIcon, 
        SiteBarMenuWrap} from "./sitebar.styles";
import {MediaScreenSize} from "../common.styles";
        
import ClearAllRoundedIcon from '@material-ui/icons/ClearAllRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import SiteBarTexts from "./sitebar.text"; 
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { LanguageContext } from '../..';


const useStyles = makeStyles({
    menuBUtton: {
      padding: '12px'
    },
    navlink:{
        color:'red'
    }
  });


export const SiteBarComponent = () => {
    const {language} = useContext(LanguageContext);
    const customStyle = useStyles();
    const [drawerIsOpen, changeDrawerState] = useState(window.innerWidth > MediaScreenSize.SMALL);

    useEffect(() => {
        window.addEventListener('resize', checkInnewWidth);

        return () => {
            window.removeEventListener('resize', checkInnewWidth);
        }
    });

    const checkInnewWidth = () => {
        if(window.innerWidth > MediaScreenSize.SMALL && !drawerIsOpen){
            changeDrawerState(true);
        }else if(window.innerWidth < MediaScreenSize.SMALL && drawerIsOpen){
            changeDrawerState(false);
        }
    };

    return(
        <ClickAwayListener onClickAway={() => changeDrawerState(false)}>
            <SiteBarWrap status={drawerIsOpen}>
                <SiteBarComponentsWrap>
                    <SiteBarBurgerButton >
                    <IconButton className={customStyle.menuBUtton} color="primary" aria-label="open/close menu" onClick={() =>changeDrawerState(!drawerIsOpen)}>
                            {drawerIsOpen && <ClearAllRoundedIcon />}
                            {!drawerIsOpen && <MenuRoundedIcon />}
                        </IconButton>
                    </SiteBarBurgerButton>

                    <SiteBarMenuWrap>
                        {SiteBarTexts.blocks.map(block => {
                        return (
                            <SiteBarMenuComponent key={block.id}>
                                {block.elements.map((element: any) => {
                                    return (
                                        <SiteBarMenu key={element.link} to={element.link} onClick={checkInnewWidth}> 
                                            <SiteBarMenuIcon>{element.ico}</SiteBarMenuIcon>
                                            <SiteBarMenuLink>{element.title[language]}</SiteBarMenuLink>
                                        </SiteBarMenu>
                                    )
                                })}
                            </SiteBarMenuComponent>
                        ) 
                        })}
                    </SiteBarMenuWrap>
                </SiteBarComponentsWrap>
            </SiteBarWrap>
        </ClickAwayListener>
    )
};