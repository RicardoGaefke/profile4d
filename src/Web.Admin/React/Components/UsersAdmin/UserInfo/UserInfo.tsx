import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

const UserInfo = withTranslation()(
  (props: WithTranslation): JSX.Element => {
    const { t } = props;

    return (
      <>
        {t('UserInfo:Title')}
      </>
    );
  },
);

UserInfo.displayName = 'UserInfo';

export default UserInfo;
