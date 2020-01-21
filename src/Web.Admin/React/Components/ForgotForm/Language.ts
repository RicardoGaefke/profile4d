import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'ForgotForm', LanguagePT);
  i18next.addResourceBundle('ENG', 'ForgotForm', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'ForgotForm')) {
      i18next.addResourceBundle('PT', 'ForgotForm', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'ForgotForm')) {
      i18next.addResourceBundle('ENG', 'ForgotForm', LanguageENG);
    }

    return ((): void => {
      i18next.removeResourceBundle('PT', 'ForgotForm');
      i18next.removeResourceBundle('ENG', 'ForgotForm');
    }) as unknown as void;
  }, []);
};
