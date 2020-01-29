import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'CreatedAdmin', LanguagePT);
  i18next.addResourceBundle('ENG', 'CreatedAdmin', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'CreatedAdmin')) {
      i18next.addResourceBundle('PT', 'CreatedAdmin', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'CreatedAdmin')) {
      i18next.addResourceBundle('ENG', 'CreatedAdmin', LanguageENG);
    }

    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'CreatedAdmin');
      i18next.removeResourceBundle('ENG', 'CreatedAdmin');
    }) as unknown as void;
  }, []);
};
