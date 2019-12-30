import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'ReturnOrCreate', LanguagePT);
  i18next.addResourceBundle('ENG', 'ReturnOrCreate', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'ReturnOrCreate')) {
      i18next.addResourceBundle('PT', 'ReturnOrCreate', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'ReturnOrCreate')) {
      i18next.addResourceBundle('ENG', 'ReturnOrCreate', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'ReturnOrCreate');
      i18next.removeResourceBundle('ENG', 'ReturnOrCreate');
    }) as unknown as void;
  }, []);
};
