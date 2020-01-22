import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'DrawerAdmin', LanguagePT);
  i18next.addResourceBundle('ENG', 'DrawerAdmin', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'DrawerAdmin')) {
      i18next.addResourceBundle('PT', 'DrawerAdmin', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'DrawerAdmin')) {
      i18next.addResourceBundle('ENG', 'DrawerAdmin', LanguageENG);
    }

    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'DrawerAdmin');
      i18next.removeResourceBundle('ENG', 'DrawerAdmin');
    }) as unknown as void;
  }, []);
};
