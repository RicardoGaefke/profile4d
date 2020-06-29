import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'TransferKeys', LanguagePT);
  i18next.addResourceBundle('ENG', 'TransferKeys', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'TransferKeys')) {
      i18next.addResourceBundle('PT', 'TransferKeys', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'TransferKeys')) {
      i18next.addResourceBundle('ENG', 'TransferKeys', LanguageENG);
    }

    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'TransferKeys');
      i18next.removeResourceBundle('ENG', 'TransferKeys');
    }) as unknown as void;
  }, []);
};
