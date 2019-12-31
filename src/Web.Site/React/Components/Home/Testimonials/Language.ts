import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'HomeTestimonials', LanguagePT);
  i18next.addResourceBundle('ENG', 'HomeTestimonials', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'HomeTestimonials')) {
      i18next.addResourceBundle('PT', 'HomeTestimonials', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'HomeTestimonials')) {
      i18next.addResourceBundle('ENG', 'HomeTestimonials', LanguageENG);
    }

    return ((): void => {
      i18next.removeResourceBundle('PT', 'HomeTestimonials');
      i18next.removeResourceBundle('ENG', 'HomeTestimonials');
    }) as unknown as void;
  }, []);
};
