import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default ():void => {
  i18next.addResourceBundle('PT', 'StaticImageTrinoBrain', LanguagePT);
  i18next.addResourceBundle('ENG', 'StaticImageTrinoBrain', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'StaticImageTrinoBrain')) {
      i18next.addResourceBundle('PT', 'StaticImageTrinoBrain', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'StaticImageTrinoBrain')) {
      i18next.addResourceBundle('ENG', 'StaticImageTrinoBrain', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'StaticImageTrinoBrain');
      i18next.removeResourceBundle('ENG', 'StaticImageTrinoBrain');
    }) as unknown as void;
  }, []);
};
