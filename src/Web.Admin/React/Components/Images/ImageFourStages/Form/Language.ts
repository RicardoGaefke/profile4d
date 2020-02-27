import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default ():void => {
  i18next.addResourceBundle('PT', 'StaticImageFourStages', LanguagePT);
  i18next.addResourceBundle('ENG', 'StaticImageFourStages', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'StaticImageFourStages')) {
      i18next.addResourceBundle('PT', 'StaticImageFourStages', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'StaticImageFourStages')) {
      i18next.addResourceBundle('ENG', 'StaticImageFourStages', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'StaticImageFourStages');
      i18next.removeResourceBundle('ENG', 'StaticImageFourStages');
    }) as unknown as void;
  }, []);
};
