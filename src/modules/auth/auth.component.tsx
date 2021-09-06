import React, { useReducer, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { AuthBlockWrap, AuthFormWrap } from "./auth.styles";
import { LanguageContext } from "../../index";
import { texts } from "../../constants/texts.constant";
import { useMutation } from "@apollo/client";
import {AUTH_REQUEST} from "./auth.gql";
import { InferActionsTypes } from "../../helpers/types";

type AuthComponentType = {
    onAuth:(token: string) => void
}

type AuthRequestType = {
    login:string,
    password:string
}

type AuthResponseType = { 
    login:{
        token:string | undefined
    }
}


const LoginFormState = {
    login:{
        value:'',
        error:''
    },
    password:{
        value:'',
        error:'',
        show:false
    }
}

type LoginFormStateType = typeof LoginFormState;

const AuthActions = {
    changeLoginAction: (value:string) => ({type:"CHANGE_LOGIN_ACION", payload:value} as const),
    changePasswordAction: (value:string) => ({type:"CHANGE_PASSWORD_ACION", payload:value} as const),
    changePasswordVisiilityAction: (value:boolean) => ({type:"CHANGE_PASSWORD_VISIBILITY_ACION", payload:value} as const)
}

type AuthActionsType = InferActionsTypes<typeof AuthActions>
                
type LoginFormReducerType = (state:LoginFormStateType, action:AuthActionsType) => LoginFormStateType;

const LoginFormReducer = (state:LoginFormStateType, action:AuthActionsType):LoginFormStateType => {
    switch(action.type){
        case "CHANGE_LOGIN_ACION":
            return {...state, login:{...state.login, value:action.payload}}
        case "CHANGE_PASSWORD_ACION":
            return {...state, password:{...state.password, value:action.payload}}
        case "CHANGE_PASSWORD_VISIBILITY_ACION":
                return {...state, password:{...state.password, show:action.payload}}         
        default: return {...state};
    }
} 

export const AuthComponent:React.FC<AuthComponentType> = ({onAuth}) => {

    const {language} = useContext(LanguageContext);
    const [state, dispatch] = useReducer(LoginFormReducer, LoginFormState);

    const [sendRequest, {error}] = useMutation<AuthResponseType, AuthRequestType>(AUTH_REQUEST);

    const handleClickShowPassword = () => dispatch(AuthActions.changePasswordVisiilityAction(!state.password.show));
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => dispatch(AuthActions.changePasswordAction(event.target.value));
    const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => dispatch(AuthActions.changeLoginAction(event.target.value));

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        sendRequest({
            variables:{
                login:state.login.value, 
                password:state.password.value
            },
            update(cache, {data}:any) {
                localStorage.setItem("token", data?.login?.token);
                onAuth(data?.login?.token);
            }
        }).catch(error => console.log(error)) 
        

    }

    return (
            <AuthBlockWrap onSubmit={handleSubmit}>
                <AuthFormWrap>
                        {error && <span>Ошибка</span>}
                        <TextField 
                            error={state.login.error ? true : false}
                            id="login" 
                            label="Login" 
                            value={state.login.value} 
                            onChange={handleLoginChange}
                            helperText={state.login.error}
                        />

                        <FormControl>
                            <InputLabel error={state.password.error ? true : false}  htmlFor="password">Password</InputLabel>
                            <Input
                                error 
                                id="password"
                                type={state.password.show ? 'text' : 'password'}
                                value={state.password.value}
                                onChange={handlePasswordChange}
                               // helperText={state.password.error}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                    {state.password.show ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                        </FormControl>

                        <Button type="submit" variant="contained" color="primary">{texts.buttons.login[language]}</Button>
                </AuthFormWrap>
            </AuthBlockWrap>
        );
    }