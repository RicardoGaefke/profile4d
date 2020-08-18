import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'HomeBanner', LanguagePT);
  i18next.addResourceBundle('ENG', 'HomeBanner', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'HomeBanner')) {
      i18next.addResourceBundle('PT', 'HomeBanner', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'HomeBanner')) {
      i18next.addResourceBundle('ENG', 'HomeBanner', LanguageENG);
    }

    return ((): void => {
      i18next.removeResourceBundle('PT', 'HomeBanner');
      i18next.removeResourceBundle('ENG', 'HomeBanner');
    }) as unknown as void;
  }, []);
};
