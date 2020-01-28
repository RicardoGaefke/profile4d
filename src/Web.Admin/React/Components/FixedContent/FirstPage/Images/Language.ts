import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'FirstPageImages', LanguagePT);
  i18next.addResourceBundle('ENG', 'FirstPageImages', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'FirstPageImages')) {
      i18next.addResourceBundle('PT', 'FirstPageImages', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'FirstPageImages')) {
      i18next.addResourceBundle('ENG', 'FirstPageImages', LanguageENG);
    }

    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'FirstPageImages');
      i18next.removeResourceBundle('ENG', 'FirstPageImages');
    }) as unknown as void;
  }, []);
};
