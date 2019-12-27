import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'ReturnLink', LanguagePT);
  i18next.addResourceBundle('ENG', 'ReturnLink', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'ReturnLink')) {
      i18next.addResourceBundle('PT', 'ReturnLink', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'ReturnLink')) {
      i18next.addResourceBundle('ENG', 'ReturnLink', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'ReturnLink');
      i18next.removeResourceBundle('ENG', 'ReturnLink');
    }) as unknown as void;
  }, []);
};
