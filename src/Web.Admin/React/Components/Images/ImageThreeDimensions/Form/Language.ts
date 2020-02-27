import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default ():void => {
  i18next.addResourceBundle('PT', 'StaticImageThreeDimensions', LanguagePT);
  i18next.addResourceBundle('ENG', 'StaticImageThreeDimensions', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'StaticImageThreeDimensions')) {
      i18next.addResourceBundle('PT', 'StaticImageThreeDimensions', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'StaticImageThreeDimensions')) {
      i18next.addResourceBundle('ENG', 'StaticImageThreeDimensions', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'StaticImageThreeDimensions');
      i18next.removeResourceBundle('ENG', 'StaticImageThreeDimensions');
    }) as unknown as void;
  }, []);
};
