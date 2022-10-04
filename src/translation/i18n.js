import HttpApi from 'i18next-http-backend'
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ['en', 'fa'],
        fallbackLng: 'en',
        debug: false,
        // Options for language detector
        detection: {
            order: ['cookie', 'path', 'htmlTag'],
            caches: ['cookie'],
        },
        // react: { useSuspense: false },
        backend: {
            loadPath: 'assets/local/{{lng}}/translation.json',
        },
    })
export const I18n = () => {

    return (
        <></>
    )
}

