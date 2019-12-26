import i18next from 'i18next';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

const i18nextLoginForm = i18next.cloneInstance();

i18nextLoginForm.addResourceBundle('PT', 'LoginForm', LanguagePT);
i18nextLoginForm.addResourceBundle('ENG', 'LoginForm', LanguageENG);
