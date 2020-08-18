// eslint-disable-next-line no-unused-vars
import i18n, { TFunction, Module } from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ENG: {},
  PT: {},
};

export default i18n
  .use(initReactI18next as Module)
  .init({
    lng: 'PT',
    fallbackLng: 'PT',
    resources,
    debug: false, // inserted to try debug with Mocha
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
  })
  .then((t): TFunction => t);
