import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'RequestKey', LanguagePT);
  i18next.addResourceBundle('ENG', 'RequestKey', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'RequestKey')) {
      i18next.addResourceBundle('PT', 'RequestKey', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'RequestKey')) {
      i18next.addResourceBundle('ENG', 'RequestKey', LanguageENG);
    }

    return ((): void => {
      i18next.removeResourceBundle('PT', 'RequestKey');
      i18next.removeResourceBundle('ENG', 'RequestKey');
    }) as unknown as void;
  }, []);
};
