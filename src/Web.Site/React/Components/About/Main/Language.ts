import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'AboutMain', LanguagePT);
  i18next.addResourceBundle('ENG', 'AboutMain', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'AboutMain')) {
      i18next.addResourceBundle('PT', 'AboutMain', LanguagePT);
    }
    if (i18next.hasResourceBundle('ENG', 'AboutMain')) {
      i18next.addResourceBundle('ENG', 'AboutMain', LanguageENG);
    }

    return ((): void => {
      i18next.removeResourceBundle('PT', 'AboutMain');
      i18next.removeResourceBundle('ENG', 'AboutMain');
    }) as unknown as void;
  }, []);
};
