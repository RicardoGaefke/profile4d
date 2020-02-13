import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'InfoPageImages', LanguagePT);
  i18next.addResourceBundle('ENG', 'InfoPageImages', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'InfoPageImages')) {
      i18next.addResourceBundle('PT', 'InfoPageImages', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'InfoPageImages')) {
      i18next.addResourceBundle('ENG', 'InfoPageImages', LanguageENG);
    }

    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'InfoPageImages');
      i18next.removeResourceBundle('ENG', 'InfoPageImages');
    }) as unknown as void;
  }, []);
};
