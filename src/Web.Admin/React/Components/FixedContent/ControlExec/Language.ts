import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';
import LanguagePtFs from '../Introduction/LanguagePT';
import LanguageEngFs from '../Introduction/LanguageENG';

export default ():void => {
  i18next.addResourceBundle('PT', 'StaticControlExec', LanguagePT);
  i18next.addResourceBundle('PT', 'StaticIntroduction', LanguagePtFs);
  i18next.addResourceBundle('ENG', 'StaticControlExec', LanguageENG);
  i18next.addResourceBundle('ENG', 'StaticIntroduction', LanguageEngFs);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'StaticControlExec')) {
      i18next.addResourceBundle('PT', 'StaticControlExec', LanguagePT);
      i18next.addResourceBundle('PT', 'StaticIntroduction', LanguagePtFs);
    }
    if (!i18next.hasResourceBundle('ENG', 'StaticControlExec')) {
      i18next.addResourceBundle('ENG', 'StaticControlExec', LanguageENG);
      i18next.addResourceBundle('ENG', 'StaticIntroduction', LanguageEngFs);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'StaticControlExec');
      i18next.removeResourceBundle('PT', 'StaticIntroduction');
      i18next.removeResourceBundle('ENG', 'StaticControlExec');
      i18next.removeResourceBundle('ENG', 'StaticIntroduction');
    }) as unknown as void;
  }, []);
};
