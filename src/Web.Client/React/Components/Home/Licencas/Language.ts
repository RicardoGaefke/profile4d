import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'SendKey', LanguagePT);
  i18next.addResourceBundle('ENG', 'SendKey', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'SendKey')) {
      i18next.addResourceBundle('PT', 'SendKey', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'SendKey')) {
      i18next.addResourceBundle('ENG', 'SendKey', LanguageENG);
    }

    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'SendKey');
      i18next.removeResourceBundle('ENG', 'SendKey');
    }) as unknown as void;
  }, []);
};
