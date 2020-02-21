import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default ():void => {
  i18next.addResourceBundle('PT', 'ChangePasswordForm', LanguagePT);
  i18next.addResourceBundle('ENG', 'ChangePasswordForm', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'ChangePasswordForm')) {
      i18next.addResourceBundle('PT', 'ChangePasswordForm', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'ChangePasswordForm')) {
      i18next.addResourceBundle('ENG', 'ChangePasswordForm', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'ChangePasswordForm');
      i18next.removeResourceBundle('ENG', 'ChangePasswordForm');
    }) as unknown as void;
  }, []);
};
