import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  Typography,
} from '@material-ui/core';
import setLanguage from './Language';
import useStyles from './Styles';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    setLanguage();
    const { t } = props;
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Typography variant="h4" align="center">
          {t('DynamicQuestions:title')}
        </Typography>
      </div>
    );
  },
);
