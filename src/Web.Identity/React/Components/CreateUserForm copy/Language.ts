import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default ():void => {
  i18next.addResourceBundle('PT', 'LoginForm', LanguagePT);
  i18next.addResourceBundle('ENG', 'LoginForm', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'LoginForm')) {
      i18next.addResourceBundle('PT', 'LoginForm', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'LoginForm')) {
      i18next.addResourceBundle('ENG', 'LoginForm', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'LoginForm');
      i18next.removeResourceBundle('ENG', 'LoginForm');
    }) as unknown as void;
  }, []);
};
