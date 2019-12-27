import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import { Link as RLink } from 'react-router-dom';
import { Typography, Link } from '@material-ui/core';
import useStyles from './Styles';
import setLanguage from './Language';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    const classes = useStyles({});
    setLanguage();

    return (
      <div className={classes.main}>
        <Typography variant="h6">
          {t('LoginCreateLink:or')}
          &nbsp;
          <Link
            variant="inherit"
            underline="always"
            title={t('LoginCreateLink:title')}
            component={RLink}
            to="/create/"
          >
            {t('LoginCreateLink:text')}
          </Link>
        </Typography>
      </div>
    );
  },
);
