import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'Assessment', LanguagePT);
  i18next.addResourceBundle('ENG', 'Assessment', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'Assessment')) {
      i18next.addResourceBundle('PT', 'Assessment', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'Assessment')) {
      i18next.addResourceBundle('ENG', 'Assessment', LanguageENG);
    }

    return ((): void => {
      i18next.removeResourceBundle('PT', 'Assessment');
      i18next.removeResourceBundle('ENG', 'Assessment');
    }) as unknown as void;
  }, []);
};
