import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';
import LanguagePtFs from '../Introduction/LanguagePT';
import LanguageEngFs from '../Introduction/LanguageENG';

export default ():void => {
  i18next.addResourceBundle('PT', 'StaticCompetentLegends', LanguagePT);
  i18next.addResourceBundle('PT', 'StaticIntroduction', LanguagePtFs);
  i18next.addResourceBundle('ENG', 'StaticCompetentLegends', LanguageENG);
  i18next.addResourceBundle('ENG', 'StaticIntroduction', LanguageEngFs);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'StaticCompetentLegends')) {
      i18next.addResourceBundle('PT', 'StaticCompetentLegends', LanguagePT);
      i18next.addResourceBundle('PT', 'StaticIntroduction', LanguagePtFs);
    }
    if (!i18next.hasResourceBundle('ENG', 'StaticCompetentLegends')) {
      i18next.addResourceBundle('ENG', 'StaticCompetentLegends', LanguageENG);
      i18next.addResourceBundle('ENG', 'StaticIntroduction', LanguageEngFs);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'StaticCompetentLegends');
      i18next.removeResourceBundle('PT', 'StaticIntroduction');
      i18next.removeResourceBundle('ENG', 'StaticCompetentLegends');
      i18next.removeResourceBundle('ENG', 'StaticIntroduction');
    }) as unknown as void;
  }, []);
};
