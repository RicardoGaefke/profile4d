import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'HomeAnnouncements', LanguagePT);
  i18next.addResourceBundle('ENG', 'HomeAnnouncements', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'HomeAnnouncements')) {
      i18next.addResourceBundle('PT', 'HomeAnnouncements', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'HomeAnnouncements')) {
      i18next.addResourceBundle('ENG', 'HomeAnnouncements', LanguageENG);
    }

    return ((): void => {
      i18next.removeResourceBundle('PT', 'HomeAnnouncements');
      i18next.removeResourceBundle('ENG', 'HomeAnnouncements');
    }) as unknown as void;
  }, []);
};
