import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'DynamicActive', LanguagePT);
  i18next.addResourceBundle('ENG', 'DynamicActive', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'DynamicActive')) {
      i18next.addResourceBundle('PT', 'DynamicActive', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'DynamicActive')) {
      i18next.addResourceBundle('ENG', 'DynamicActive', LanguageENG);
    }

    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'DynamicActive');
      i18next.removeResourceBundle('ENG', 'DynamicActive');
    }) as unknown as void;
  }, []);
};
