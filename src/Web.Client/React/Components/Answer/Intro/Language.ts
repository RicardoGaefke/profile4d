import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'Answer', LanguagePT);
  i18next.addResourceBundle('ENG', 'Answer', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'Answer')) {
      i18next.addResourceBundle('PT', 'Answer', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'Answer')) {
      i18next.addResourceBundle('ENG', 'Answer', LanguageENG);
    }

    return ((): void => {
      i18next.removeResourceBundle('PT', 'Answer');
      i18next.removeResourceBundle('ENG', 'Answer');
    }) as unknown as void;
  }, []);
};
