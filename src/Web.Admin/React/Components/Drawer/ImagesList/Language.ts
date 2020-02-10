import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'DrawerAdminImageForm', LanguagePT);
  i18next.addResourceBundle('ENG', 'DrawerAdminImageForm', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'DrawerAdminImageForm')) {
      i18next.addResourceBundle('PT', 'DrawerAdminImageForm', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'DrawerAdminImageForm')) {
      i18next.addResourceBundle('ENG', 'DrawerAdminImageForm', LanguageENG);
    }

    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'DrawerAdminImageForm');
      i18next.removeResourceBundle('ENG', 'DrawerAdminImageForm');
    }) as unknown as void;
  }, []);
};
