import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'Advice', LanguagePT);
  i18next.addResourceBundle('ENG', 'Advice', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'Advice')) {
      i18next.addResourceBundle('PT', 'Advice', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'Advice')) {
      i18next.addResourceBundle('ENG', 'Advice', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'Advice');
      i18next.removeResourceBundle('ENG', 'Advice');
    }) as unknown as void;
  }, []);
};
