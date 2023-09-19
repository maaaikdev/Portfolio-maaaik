import React, { useState } from 'react';
import EnglishMessages from '../components/lang/en-US.json';
import SpanishMessages from '../components/lang/es-CO.json';
import { IntlProvider } from 'react-intl';

const langContext = React.createContext();

const LangProvider = ({children}) => {

    let localeDefault;
    let MessagesDefault;

    const lang = localStorage.getItem('lang')

    if(lang) {
        localeDefault = lang;

        if(lang === 'es-CO') {
            MessagesDefault = SpanishMessages;
        } else if (lang === 'en-US') {
            MessagesDefault = EnglishMessages
        } else {
            localeDefault = 'es-CO'
            MessagesDefault = SpanishMessages
        }
    }

    const [messages, setMessages] = useState(MessagesDefault);
    const [locale, setLocale] = useState(localeDefault);

    const changeLanguage = (language) => {
        switch (language) {
            case 'es-CO':
                setMessages(SpanishMessages);
                setLocale('es-CO');
                localStorage.setItem('lang', 'es-CO');
                break;
            case 'en-US':
                setMessages(EnglishMessages);
                setLocale('en-US');
                localStorage.setItem('lang', 'en-US');
                break;
            default:
                setMessages(SpanishMessages);
                setLocale('es-CO');
                localStorage.setItem('lang', 'es-CO');
        }
   }
    return (
        <langContext.Provider value={{setLanguage: changeLanguage}}>
            <IntlProvider locale={locale} messages={messages}>
                {children}
            </IntlProvider>            
        </langContext.Provider>
    );
};

export { LangProvider, langContext };