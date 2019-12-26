import React, { useEffect } from 'react';
import i18next from 'i18next';
import { Button } from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import './Language';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

interface IProps extends WithTranslation {
  toggle: () => void,
}

export default withTranslation()(
  ((props: IProps): React.ReactElement<IProps> => {
    const { toggle, t } = props;

    useEffect((): void => {
      if (!i18next.hasResourceBundle('PT', 'ButtonCloseConfig')) {
        i18next.addResourceBundle('PT', 'ButtonCloseConfig', LanguagePT);
      }
      if (!i18next.hasResourceBundle('ENG', 'ButtonCloseConfig')) {
        i18next.addResourceBundle('ENG', 'ButtonCloseConfig', LanguageENG);
      }
      // return type void != (): void... so as unknown as void
      // return ((): void => {
      //   i18next.removeResourceBundle('PT', 'ButtonCloseConfig');
      //   i18next.removeResourceBundle('ENG', 'ButtonCloseConfig');
      // }) as unknown as void;
    }, []);

    return (
      <Button
        onClick={toggle}
        fullWidth
        variant="contained"
        title={t('ButtonCloseConfig:label')}
      >
        {t('ButtonCloseConfig:text')}
      </Button>
    );
  }),
);
