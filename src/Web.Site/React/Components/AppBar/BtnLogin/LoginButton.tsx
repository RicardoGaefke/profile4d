import React, { useEffect } from 'react';
import i18next from 'i18next';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import './Language';
import { useStateValue } from '../../../Initial/Context/StateProvider';
import { Href } from '../../../Utils/Domain';
import Button from '../Button/Button';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    const [{ Language }] = useStateValue();

    const myLogin = (): void => {
      // const url = new Href(window.location.href.replace(/https?:\/\//i, ''));
      const url = new Href('www.staging.profile4d.com');
      // window.location.href = url.toLogin();
      // eslint-disable-next-line no-console
      console.log(url.toLogin());
    };

    useEffect((): void => {
      if (!i18next.hasResourceBundle('PT', 'LoginBtnConfig')) {
        i18next.addResourceBundle('PT', 'LoginBtnConfig', LanguagePT);
      }
      if (!i18next.hasResourceBundle('ENG', 'LoginBtnConfig')) {
        i18next.addResourceBundle('ENG', 'LoginBtnConfig', LanguageENG);
      }
      // return type void != (): void... so as unknown as void
      return ((): void => {
        i18next.removeResourceBundle('PT', 'LoginBtnConfig');
        i18next.removeResourceBundle('ENG', 'LoginBtnConfig');
      }) as unknown as void;
    }, []);

    return (
      <Button
        color="inherit"
        title={t('LoginBtnConfig:title')}
        onClick={myLogin}
      >
        <PermIdentityIcon />
      </Button>
    );
  },
);
