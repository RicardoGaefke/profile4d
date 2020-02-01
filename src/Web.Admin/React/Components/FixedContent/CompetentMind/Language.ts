import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default ():void => {
  i18next.addResourceBundle('PT', 'StaticCompetentMind', LanguagePT);
  i18next.addResourceBundle('ENG', 'StaticCompetentMind', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'StaticCompetentMind')) {
      i18next.addResourceBundle('PT', 'StaticCompetentMind', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'StaticCompetentMind')) {
      i18next.addResourceBundle('ENG', 'StaticCompetentMind', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'StaticCompetentMind');
      i18next.removeResourceBundle('ENG', 'StaticCompetentMind');
    }) as unknown as void;
  }, []);
};
