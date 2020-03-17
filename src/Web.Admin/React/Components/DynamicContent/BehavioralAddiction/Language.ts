import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'DynamicQuestions', LanguagePT);
  i18next.addResourceBundle('ENG', 'DynamicQuestions', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'DynamicQuestions')) {
      i18next.addResourceBundle('PT', 'DynamicQuestions', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'DynamicQuestions')) {
      i18next.addResourceBundle('ENG', 'DynamicQuestions', LanguageENG);
    }

    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'DynamicQuestions');
      i18next.removeResourceBundle('ENG', 'DynamicQuestions');
    }) as unknown as void;
  }, []);
};
