import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';

const UsersAdminPage = withTranslation()(
  (props: WithTranslation): JSX.Element => {
    const { t } = props;

    return (
      <>
        {t('UsersAdminPage:Title')}
      </>
    );
  },
);

UsersAdminPage.displayName = 'UsersAdminPage';

export default UsersAdminPage;
