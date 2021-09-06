import {gql} from "@apollo/client";

export const INVITE_ADMIN = gql`
    mutation inviteAdmin($email:String!, $fullName:String!){
        inviteAdmin(record:{
                email:$email, fullName:$fullName
        })
    }
`;