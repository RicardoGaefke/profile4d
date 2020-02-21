import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default ():void => {
  i18next.addResourceBundle('PT', 'ChangeEmailForm', LanguagePT);
  i18next.addResourceBundle('ENG', 'ChangeEmailForm', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'ChangeEmailForm')) {
      i18next.addResourceBundle('PT', 'ChangeEmailForm', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'ChangeEmailForm')) {
      i18next.addResourceBundle('ENG', 'ChangeEmailForm', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'ChangeEmailForm');
      i18next.removeResourceBundle('ENG', 'ChangeEmailForm');
    }) as unknown as void;
  }, []);
};
