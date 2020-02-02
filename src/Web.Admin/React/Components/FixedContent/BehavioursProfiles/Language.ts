import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';
import LanguagePtFs from '../FirstPage/LanguagePT';
import LanguageEngFs from '../FirstPage/LanguageENG';

export default ():void => {
  i18next.addResourceBundle('PT', 'StaticBehavioursProfiles', LanguagePT);
  i18next.addResourceBundle('PT', 'StaticFirstPage', LanguagePtFs);
  i18next.addResourceBundle('ENG', 'StaticBehavioursProfiles', LanguageENG);
  i18next.addResourceBundle('ENG', 'StaticFirstPage', LanguageEngFs);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'StaticBehavioursProfiles')) {
      i18next.addResourceBundle('PT', 'StaticBehavioursProfiles', LanguagePT);
      i18next.addResourceBundle('PT', 'StaticFirstPage', LanguagePtFs);
    }
    if (!i18next.hasResourceBundle('ENG', 'StaticBehavioursProfiles')) {
      i18next.addResourceBundle('ENG', 'StaticBehavioursProfiles', LanguageENG);
      i18next.addResourceBundle('ENG', 'StaticFirstPage', LanguageEngFs);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'StaticBehavioursProfiles');
      i18next.removeResourceBundle('PT', 'StaticFirstPage');
      i18next.removeResourceBundle('ENG', 'StaticBehavioursProfiles');
      i18next.removeResourceBundle('ENG', 'StaticFirstPage');
    }) as unknown as void;
  }, []);
};
