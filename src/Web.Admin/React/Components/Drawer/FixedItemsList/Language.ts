import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'DrawerAdminFixed', LanguagePT);
  i18next.addResourceBundle('ENG', 'DrawerAdminFixed', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'DrawerAdminFixed')) {
      i18next.addResourceBundle('PT', 'DrawerAdminFixed', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'DrawerAdminFixed')) {
      i18next.addResourceBundle('ENG', 'DrawerAdminFixed', LanguageENG);
    }

    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'DrawerAdminFixed');
      i18next.removeResourceBundle('ENG', 'DrawerAdminFixed');
    }) as unknown as void;
  }, []);
};
