import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default ():void => {
  i18next.addResourceBundle('PT', 'StaticImageForm', LanguagePT);
  i18next.addResourceBundle('ENG', 'StaticImageForm', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'StaticImageForm')) {
      i18next.addResourceBundle('PT', 'StaticImageForm', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'StaticImageForm')) {
      i18next.addResourceBundle('ENG', 'StaticImageForm', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'StaticImageForm');
      i18next.removeResourceBundle('ENG', 'StaticImageForm');
    }) as unknown as void;
  }, []);
};
