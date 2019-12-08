import React, { useEffect } from 'react';
import i18next from 'i18next';
import { Button } from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import { useStateValue } from '../../../Initial/Context/StateProvider';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

interface IProps extends WithTranslation {
  toggle: () => void,
}

export default withTranslation()(
  ((props: IProps): React.ReactElement<WithTranslation> => {
    const { toggle, t } = props;
    const [{ Language }] = useStateValue();

    useEffect((): void => {
      i18next.changeLanguage(Language);

      i18next.addResourceBundle('PT', 'ButtonCloseConfig', LanguagePT);
      i18next.addResourceBundle('ENG', 'ButtonCloseConfig', LanguageENG);
      // return type void != (): void... so as unknown as void
      return ((): void => {
        i18next.removeResourceBundle('PT', 'ButtonCloseConfig');
        i18next.removeResourceBundle('ENG', 'ButtonCloseConfig');
      }) as unknown as void;
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
