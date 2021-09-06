import React, {useState, useContext} from 'react';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { LanguageContext } from '..';
import { texts } from '../constants/texts.constant';

type DialogsTypes = {
  title:string,
  content?:string,
  close:() => void,
  agree:() => void
  isOpen:boolean
}

export const Dialogs = ({isOpen, title = "", content = "", close, agree}:DialogsTypes) => {
  
    const {language} = useContext(LanguageContext);
    
   

    return <Dialog 
        open={isOpen}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>

          <Button onClick={close} variant="contained">
            {texts.buttons.cancel[language]}
          </Button>

          <Button onClick={agree} color="primary" autoFocus variant="contained">
            {texts.buttons.agree[language]}
          </Button>
          
        </DialogActions>
      </Dialog>
}