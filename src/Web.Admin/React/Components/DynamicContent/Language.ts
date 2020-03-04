import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default ():void => {
  i18next.addResourceBundle('PT', 'DynamicForm', LanguagePT);
  i18next.addResourceBundle('ENG', 'DynamicForm', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'DynamicForm')) {
      i18next.addResourceBundle('PT', 'DynamicForm', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'DynamicForm')) {
      i18next.addResourceBundle('ENG', 'DynamicForm', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'DynamicForm');
      i18next.removeResourceBundle('ENG', 'DynamicForm');
    }) as unknown as void;
  }, []);
};
