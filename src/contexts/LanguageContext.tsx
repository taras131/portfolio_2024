import React, {createContext, FC, useState} from 'react';
import {TLanguage} from "../models/iLanguage";

interface IProps {
    children: React.ReactNode
}

interface ILanguageContext  {
    language: TLanguage;
    changeLanguage: (newLanguage: TLanguage) => void;
};

export const languages: TLanguage [] = ['en' , 'ru']
export const LanguageContext = createContext<ILanguageContext>({
    language: languages[0],
    changeLanguage: () => {},
});

export const LanguageProvider:FC<IProps> = ({children}) => {
    const [language, setLanguage] = useState<TLanguage>(languages[0]);

    const changeLanguage = (newLanguage: TLanguage) => {
        setLanguage(newLanguage);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};