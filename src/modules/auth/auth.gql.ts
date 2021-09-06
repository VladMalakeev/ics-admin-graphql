import {gql} from "@apollo/client";

export const AUTH_REQUEST = gql`
    mutation login($login:String!, $password:String!){
        login(login:$login, password:$password){
            token
        }
    }
`;