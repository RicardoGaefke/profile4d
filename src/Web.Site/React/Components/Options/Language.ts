import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'RadioOptions', LanguagePT);
  i18next.addResourceBundle('ENG', 'RadioOptions', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'RadioOptions')) {
      i18next.addResourceBundle('PT', 'RadioOptions', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'RadioOptions')) {
      i18next.addResourceBundle('ENG', 'RadioOptions', LanguageENG);
    }

    return ((): void => {
      i18next.removeResourceBundle('PT', 'RadioOptions');
      i18next.removeResourceBundle('ENG', 'RadioOptions');
    }) as unknown as void;
  }, []);
};
