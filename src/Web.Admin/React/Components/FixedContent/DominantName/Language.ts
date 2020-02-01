import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default ():void => {
  i18next.addResourceBundle('PT', 'StaticDominantName', LanguagePT);
  i18next.addResourceBundle('ENG', 'StaticDominantName', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'StaticDominantName')) {
      i18next.addResourceBundle('PT', 'StaticDominantName', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'StaticDominantName')) {
      i18next.addResourceBundle('ENG', 'StaticDominantName', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'StaticDominantName');
      i18next.removeResourceBundle('ENG', 'StaticDominantName');
    }) as unknown as void;
  }, []);
};
