import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { Href } from '../../../Utils/Domain';
import Button from '../Button/Button';
import setLanguage from './Language';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    setLanguage();

    const myLogin = (): void => {
      if (window.location.href.includes('localhost')) {
        window.location.href = 'https://localhost:5055/';
        return;
      }

      if (window.location.href.includes('staging')) {
        const loginUrl = new Href('www.staging.profile4d.com');
        window.location.href = `https://${loginUrl.toLogin()}`;
        return;
      }

      window.location.href = 'https://identity.profile4d.com';
    };

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
