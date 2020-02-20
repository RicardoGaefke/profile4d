import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default ():void => {
  i18next.addResourceBundle('PT', 'ChangeNameForm', LanguagePT);
  i18next.addResourceBundle('ENG', 'ChangeNameForm', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'ChangeNameForm')) {
      i18next.addResourceBundle('PT', 'ChangeNameForm', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'ChangeNameForm')) {
      i18next.addResourceBundle('ENG', 'ChangeNameForm', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'ChangeNameForm');
      i18next.removeResourceBundle('ENG', 'ChangeNameForm');
    }) as unknown as void;
  }, []);
};
