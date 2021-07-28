import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import setLanguage from './Language';

interface IProps {
  CreatedBy: string,
  Created: string,
}

type MyType = IProps & WithTranslation;

export default withTranslation()(
  (props: MyType): React.ReactElement<MyType> => {
    const { t, CreatedBy, Created } = props;
    setLanguage();

    return (
      <>
        <Typography variant="caption">
          {`${t('CreatedAdmin:name')} ${CreatedBy} ${t('CreatedAdmin:date')} ${Created}`}
        </Typography>
      </>
    );
  },
);
