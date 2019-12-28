import React, { useEffect } from 'react';
import i18next from 'i18next';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  Typography, Grid, Container,
} from '@material-ui/core';
import useStyles from './Styles';
import './Language';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    const classes = useStyles({});

    useEffect((): void => {
      if (!i18next.hasResourceBundle('PT', 'HomeAnnouncements')) {
        i18next.addResourceBundle('PT', 'HomeAnnouncements', LanguagePT);
      }
      if (!i18next.hasResourceBundle('ENG', 'HomeAnnouncements')) {
        i18next.addResourceBundle('ENG', 'HomeAnnouncements', LanguageENG);
      }
      // return type void != (): void... so as unknown as void
      return ((): void => {
        i18next.removeResourceBundle('PT', 'HomeAnnouncements');
        i18next.removeResourceBundle('ENG', 'HomeAnnouncements');
      }) as unknown as void;
    }, []);

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
