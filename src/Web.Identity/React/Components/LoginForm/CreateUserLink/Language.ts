import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'LoginCreateLink', LanguagePT);
  i18next.addResourceBundle('ENG', 'LoginCreateLink', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'LoginCreateLink')) {
      i18next.addResourceBundle('PT', 'LoginCreateLink', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'LoginCreateLink')) {
      i18next.addResourceBundle('ENG', 'LoginCreateLink', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'LoginCreateLink');
      i18next.removeResourceBundle('ENG', 'LoginCreateLink');
    }) as unknown as void;
  }, []);
};
