import React, { useEffect } from 'react';
import i18next from 'i18next';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import TuneIcon from '@material-ui/icons/Tune';
import { useStateValue } from '../../../Initial/Context/StateProvider';
import Button from '../Button/Button';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    const [{ Config, Language }, dispatch] = useStateValue();

    const toggleConfig = (): void => {
      dispatch({
        type: 'changeConfig',
        value: !Config,
      });
    };

    useEffect((): void => {
      i18next.changeLanguage(Language);

      i18next.addResourceBundle('PT', 'CustomBtnConfig', LanguagePT);
      i18next.addResourceBundle('ENG', 'CustomBtnConfig', LanguageENG);
      // return type void != (): void... so as unknown as void
      return ((): void => {
        i18next.removeResourceBundle('PT', 'CustomBtnConfig');
        i18next.removeResourceBundle('ENG', 'CustomBtnConfig');
      }) as unknown as void;
    }, []);

    return (
      <Button
        color="inherit"
        title={t('CustomBtnConfig:title')}
        onClick={toggleConfig}
      >
        <TuneIcon />
      </Button>
    );
  },
);
