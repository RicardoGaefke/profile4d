import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'ShowPageImages', LanguagePT);
  i18next.addResourceBundle('ENG', 'ShowPageImages', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'ShowPageImages')) {
      i18next.addResourceBundle('PT', 'ShowPageImages', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'ShowPageImages')) {
      i18next.addResourceBundle('ENG', 'ShowPageImages', LanguageENG);
    }

    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'ShowPageImages');
      i18next.removeResourceBundle('ENG', 'ShowPageImages');
    }) as unknown as void;
  }, []);
};
