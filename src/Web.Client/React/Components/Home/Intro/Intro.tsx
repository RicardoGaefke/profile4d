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
      <Container maxWidth="md" className={classes.main}>
        <Typography variant="overline" className={classes.text} component="p">
          {t('HomeIntro:text')}
        </Typography>
      </Container>
    );
  },
);
