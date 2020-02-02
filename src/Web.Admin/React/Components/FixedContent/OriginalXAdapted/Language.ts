import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';
import LanguagePtFs from '../FirstPage/LanguagePT';
import LanguageEngFs from '../FirstPage/LanguageENG';

export default ():void => {
  i18next.addResourceBundle('PT', 'StaticOriginalXAdapted', LanguagePT);
  i18next.addResourceBundle('PT', 'StaticFirstPage', LanguagePtFs);
  i18next.addResourceBundle('ENG', 'StaticOriginalXAdapted', LanguageENG);
  i18next.addResourceBundle('ENG', 'StaticFirstPage', LanguageEngFs);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'StaticOriginalXAdapted')) {
      i18next.addResourceBundle('PT', 'StaticOriginalXAdapted', LanguagePT);
      i18next.addResourceBundle('PT', 'StaticFirstPage', LanguagePtFs);
    }
    if (!i18next.hasResourceBundle('ENG', 'StaticOriginalXAdapted')) {
      i18next.addResourceBundle('ENG', 'StaticOriginalXAdapted', LanguageENG);
      i18next.addResourceBundle('ENG', 'StaticFirstPage', LanguageEngFs);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'StaticOriginalXAdapted');
      i18next.removeResourceBundle('PT', 'StaticFirstPage');
      i18next.removeResourceBundle('ENG', 'StaticOriginalXAdapted');
      i18next.removeResourceBundle('ENG', 'StaticFirstPage');
    }) as unknown as void;
  }, []);
};
