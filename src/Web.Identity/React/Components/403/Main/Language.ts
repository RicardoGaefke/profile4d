import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', '403Main', LanguagePT);
  i18next.addResourceBundle('ENG', '403Main', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', '403Main')) {
      i18next.addResourceBundle('PT', '403Main', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', '403Main')) {
      i18next.addResourceBundle('ENG', '403Main', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', '403Main');
      i18next.removeResourceBundle('ENG', '403Main');
    }) as unknown as void;
  }, []);
};
