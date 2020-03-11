import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'Minimum', LanguagePT);
  i18next.addResourceBundle('ENG', 'Minimum', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'Minimum')) {
      i18next.addResourceBundle('PT', 'Minimum', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'Minimum')) {
      i18next.addResourceBundle('ENG', 'Minimum', LanguageENG);
    }

    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'Minimum');
      i18next.removeResourceBundle('ENG', 'Minimum');
    }) as unknown as void;
  }, []);
};
