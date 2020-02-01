import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default ():void => {
  i18next.addResourceBundle('PT', 'StaticDominantWhoIAm', LanguagePT);
  i18next.addResourceBundle('ENG', 'StaticDominantWhoIAm', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'StaticDominantWhoIAm')) {
      i18next.addResourceBundle('PT', 'StaticDominantWhoIAm', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'StaticDominantWhoIAm')) {
      i18next.addResourceBundle('ENG', 'StaticDominantWhoIAm', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'StaticDominantWhoIAm');
      i18next.removeResourceBundle('ENG', 'StaticDominantWhoIAm');
    }) as unknown as void;
  }, []);
};
