import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default ():void => {
  i18next.addResourceBundle('PT', 'StaticImageFourIntelligenceCenters', LanguagePT);
  i18next.addResourceBundle('ENG', 'StaticImageFourIntelligenceCenters', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'StaticImageFourIntelligenceCenters')) {
      i18next.addResourceBundle('PT', 'StaticImageFourIntelligenceCenters', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'StaticImageFourIntelligenceCenters')) {
      i18next.addResourceBundle('ENG', 'StaticImageFourIntelligenceCenters', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'StaticImageFourIntelligenceCenters');
      i18next.removeResourceBundle('ENG', 'StaticImageFourIntelligenceCenters');
    }) as unknown as void;
  }, []);
};
