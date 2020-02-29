import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'AddQuestion', LanguagePT);
  i18next.addResourceBundle('ENG', 'AddQuestion', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'AddQuestion')) {
      i18next.addResourceBundle('PT', 'AddQuestion', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'AddQuestion')) {
      i18next.addResourceBundle('ENG', 'AddQuestion', LanguageENG);
    }

    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'AddQuestion');
      i18next.removeResourceBundle('ENG', 'AddQuestion');
    }) as unknown as void;
  }, []);
};
