import React from 'react';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';
import setLanguage from './Language';

interface MyProps {
  to: string,
}

type IProps = WithTranslation & MyProps;

export default withTranslation()(
  (props: IProps): React.ReactElement<IProps> => {
    setLanguage();

    const {
      t, to,
    } = props;

    return (
      <Button
        variant="contained"
        title="Edit"
        startIcon={<EditIcon />}
        component={Link}
        to={to}
      >
        {t('DynamicEdit:title')}
      </Button>
    );
  },
);
