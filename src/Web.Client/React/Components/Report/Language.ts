import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'Report', LanguagePT);
  i18next.addResourceBundle('ENG', 'Report', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'Report')) {
      i18next.addResourceBundle('PT', 'Report', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'Report')) {
      i18next.addResourceBundle('ENG', 'Report', LanguageENG);
    }

    return ((): void => {
      i18next.removeResourceBundle('PT', 'Report');
      i18next.removeResourceBundle('ENG', 'Report');
    }) as unknown as void;
  }, []);
};
