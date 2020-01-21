import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default ():void => {
  i18next.addResourceBundle('PT', 'CreateUserForm', LanguagePT);
  i18next.addResourceBundle('ENG', 'CreateUserForm', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'CreateUserForm')) {
      i18next.addResourceBundle('PT', 'CreateUserForm', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'CreateUserForm')) {
      i18next.addResourceBundle('ENG', 'CreateUserForm', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'CreateUserForm');
      i18next.removeResourceBundle('ENG', 'CreateUserForm');
    }) as unknown as void;
  }, []);
};
