import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default ():void => {
  i18next.addResourceBundle('PT', 'StaticImageNotFound', LanguagePT);
  i18next.addResourceBundle('ENG', 'StaticImageNotFound', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'StaticImageNotFound')) {
      i18next.addResourceBundle('PT', 'StaticImageNotFound', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'StaticImageNotFound')) {
      i18next.addResourceBundle('ENG', 'StaticImageNotFound', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'StaticImageNotFound');
      i18next.removeResourceBundle('ENG', 'StaticImageNotFound');
    }) as unknown as void;
  }, []);
};
