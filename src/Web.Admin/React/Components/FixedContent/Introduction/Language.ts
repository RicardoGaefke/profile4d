import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default ():void => {
  i18next.addResourceBundle('PT', 'StaticIntroduction', LanguagePT);
  i18next.addResourceBundle('ENG', 'StaticIntroduction', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'StaticIntroduction')) {
      i18next.addResourceBundle('PT', 'StaticIntroduction', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'StaticIntroduction')) {
      i18next.addResourceBundle('ENG', 'StaticIntroduction', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'StaticIntroduction');
      i18next.removeResourceBundle('ENG', 'StaticIntroduction');
    }) as unknown as void;
  }, []);
};
