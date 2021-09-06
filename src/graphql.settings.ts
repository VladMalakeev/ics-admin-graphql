import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from '@apollo/client';
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from '@apollo/client/link/context';

//глобальная обработка ошибок

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if(process.env.REACT_APP_MODE === 'dev'){
      if (graphQLErrors ){
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      }
  
      if (networkError) {
        console.log(`[Network error]: ${networkError}`);
      }
    }
    forward(operation);
  });
  

// ссылка для основных запросов на сервер

  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL
  })

// добавляем токен в каждый запрос

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });

//ссылка для выгрузки файлов

  const fileLink = createUploadLink({
    uri: process.env.REACT_APP_GRAPHQL
  });
  
//объединяем все созданые ссылки в массив

  const link = ApolloLink.from([errorLink, fileLink, httpLink]);
  
//создаем apolo

  export const client = new ApolloClient({
    link: authLink.concat(link),         
    cache: new InMemoryCache(),
    
  });