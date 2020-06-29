import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'DrawerAdminKeys', LanguagePT);
  i18next.addResourceBundle('ENG', 'DrawerAdminKeys', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'DrawerAdminKeys')) {
      i18next.addResourceBundle('PT', 'DrawerAdminKeys', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'DrawerAdminKeys')) {
      i18next.addResourceBundle('ENG', 'DrawerAdminKeys', LanguageENG);
    }

    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'DrawerAdminKeys');
      i18next.removeResourceBundle('ENG', 'DrawerAdminKeys');
    }) as unknown as void;
  }, []);
};
