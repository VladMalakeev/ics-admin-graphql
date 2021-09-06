import React, {useContext} from "react";
import { useForm } from "react-hook-form";
import {InviteAdminRecordType, InviteAdminResponseType} from "./users.type";
import { useMutation } from '@apollo/client';

import {INVITE_ADMIN} from "./users.gql";
import { texts } from "../../constants/texts.constant";
import { LanguageContext } from "../..";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { NotiFy } from '../../components/notifications.component';

export const UsersComponent = () => {
    const [inviteAdmin, {data}] = useMutation<InviteAdminResponseType,InviteAdminRecordType>(INVITE_ADMIN);
    const {register, handleSubmit } = useForm<InviteAdminRecordType>();
    const {language} = useContext(LanguageContext);

    const onAdminSubmit = (formData:InviteAdminRecordType) => {
        inviteAdmin({variables:formData})
        .then()
        .catch(e => console.log(e))
    }

    return <>
        {data?.inviteAdmin && <NotiFy message="Приглашение отправлено" type="success"/>}

        <form onSubmit={handleSubmit(onAdminSubmit)}>
            <TextField 
                id="email"
                label={texts.entity.invite.email[language]}
                name="email"
                inputRef={register}
                fullWidth
                size={'medium'}
            />

            <TextField 
                id="fullname"
                label={texts.entity.invite.fullName[language]}
                name="fullName"
                inputRef={register}
                fullWidth
                size={'medium'}
            />

            <Button
                variant="contained"
                color="primary"
                type="submit"
                startIcon={<SendIcon />}
            >
                {texts.buttons.send[language]}
            </Button>
        </form>
    </>
}

