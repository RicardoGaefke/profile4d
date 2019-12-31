import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  Typography, Grid, Container,
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
        <Grid
          container
          spacing={6}
          alignItems="flex-start"
        >
          <Grid item sm={12} md={6} className={classes.divider}>
            <Typography variant="overline" className={classes.text} component="p">
              {t('HomeAnnouncements:text1')}
            </Typography>
          </Grid>
          <Grid item sm={12} md={6}>
            <Typography variant="overline" className={classes.text} component="p">
              {t('HomeAnnouncements:text2')}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    );
  },
);
