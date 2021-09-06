import React, {createContext, useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { client } from "./graphql.settings";
import {lang} from "./constants/texts.constant"

export const LanguageContext = createContext({
  language:lang.ru.code,
  changeLanguage:(val:string) => {}
});

const AppSettings = () => {

  const [language, setLanguage] = useState(lang.ru.code);

  const changeLanguage = (value:string) => setLanguage(value)

  return <ApolloProvider client={client}>
    <LanguageContext.Provider value={{language, changeLanguage}}>
      <App />
    </LanguageContext.Provider>
  </ApolloProvider>
}

ReactDOM.render(
  <React.StrictMode>
    <AppSettings/>
  </React.StrictMode>,
  document.getElementById('root')
);


