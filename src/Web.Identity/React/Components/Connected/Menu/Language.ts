import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'Connected', LanguagePT);
  i18next.addResourceBundle('ENG', 'Connected', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'Connected')) {
      i18next.addResourceBundle('PT', 'Connected', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'Connected')) {
      i18next.addResourceBundle('ENG', 'Connected', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'Connected');
      i18next.removeResourceBundle('ENG', 'Connected');
    }) as unknown as void;
  }, []);
};
