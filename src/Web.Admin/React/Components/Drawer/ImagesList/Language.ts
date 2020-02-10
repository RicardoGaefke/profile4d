import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'DrawerAdminImage', LanguagePT);
  i18next.addResourceBundle('ENG', 'DrawerAdminImage', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'DrawerAdminImage')) {
      i18next.addResourceBundle('PT', 'DrawerAdminImage', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'DrawerAdminImage')) {
      i18next.addResourceBundle('ENG', 'DrawerAdminImage', LanguageENG);
    }

    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'DrawerAdminImage');
      i18next.removeResourceBundle('ENG', 'DrawerAdminImage');
    }) as unknown as void;
  }, []);
};
