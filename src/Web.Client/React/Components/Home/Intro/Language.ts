import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'HomeIntro', LanguagePT);
  i18next.addResourceBundle('ENG', 'HomeIntro', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'HomeIntro')) {
      i18next.addResourceBundle('PT', 'HomeIntro', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'HomeIntro')) {
      i18next.addResourceBundle('ENG', 'HomeIntro', LanguageENG);
    }

    return ((): void => {
      i18next.removeResourceBundle('PT', 'HomeIntro');
      i18next.removeResourceBundle('ENG', 'HomeIntro');
    }) as unknown as void;
  }, []);
};
