import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import setLanguage from './Language';
import { Href } from '../../../Utils/Domain';
import Button from '../Button/Button';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    setLanguage();

    const myLogin = (): void => {
      // const url = new Href(window.location.href.replace(/https?:\/\//i, ''));
      const url = new Href('www.staging.profile4d.com');
      // window.location.href = url.toLogin();
      // eslint-disable-next-line no-console
      console.log(url.toLogin());
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
