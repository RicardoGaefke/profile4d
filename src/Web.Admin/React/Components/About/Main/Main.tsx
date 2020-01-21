import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  Typography, Container,
} from '@material-ui/core';
import useStyles from './Styles';
import setLanguage from './Language';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    const classes = useStyles({});
    setLanguage();

    return (
      <div className={classes.main}>
        <img alt={t('AboutMain:title')} src="/img/team.jpg" className={classes.img} />
        <Container maxWidth="md">
          <Typography variant="h1" align="center" gutterBottom>
            {t('AboutMain:title')}
          </Typography>
          <Typography variant="overline" className={classes.text} component="p">
            {t('AboutMain:text')}
          </Typography>
        </Container>
      </div>
    );
  },
);
