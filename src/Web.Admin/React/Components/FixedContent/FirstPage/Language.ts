import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default ():void => {
  i18next.addResourceBundle('PT', 'StaticFirstPage', LanguagePT);
  i18next.addResourceBundle('ENG', 'StaticFirstPage', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'StaticFirstPage')) {
      i18next.addResourceBundle('PT', 'StaticFirstPage', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'StaticFirstPage')) {
      i18next.addResourceBundle('ENG', 'StaticFirstPage', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'StaticFirstPage');
      i18next.removeResourceBundle('ENG', 'StaticFirstPage');
    }) as unknown as void;
  }, []);
};
