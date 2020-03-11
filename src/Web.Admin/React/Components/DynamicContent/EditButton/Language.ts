import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'DynamicEdit', LanguagePT);
  i18next.addResourceBundle('ENG', 'DynamicEdit', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'DynamicEdit')) {
      i18next.addResourceBundle('PT', 'DynamicEdit', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'DynamicEdit')) {
      i18next.addResourceBundle('ENG', 'DynamicEdit', LanguageENG);
    }

    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'DynamicEdit');
      i18next.removeResourceBundle('ENG', 'DynamicEdit');
    }) as unknown as void;
  }, []);
};
