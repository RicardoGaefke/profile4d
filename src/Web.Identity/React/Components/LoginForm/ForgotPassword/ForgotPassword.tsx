import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import { Link as RLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;

    return (
      <Link
        variant="inherit"
        underline="always"
        title={t('LoginForm:forgot.title')}
        component={RLink}
        to="/account/forgot/"
      >
        {t('LoginForm:forgot.text')}
      </Link>
    );
  },
);
