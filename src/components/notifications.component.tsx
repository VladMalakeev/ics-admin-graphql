import react, {useState} from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';


const Alert = (props: AlertProps) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

type NotiFyType = {
    message:string,
    type: "error" | "warning" | "info" | "success"
}

export const NotiFy = ({message, type}:NotiFyType) => {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };

    return <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{horizontal:"right",vertical:"bottom"}}>
         <Alert onClose={handleClose} severity={type}>
             {message}
         </Alert>
    </Snackbar>
}