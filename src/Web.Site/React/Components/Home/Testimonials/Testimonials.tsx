import React, { useEffect } from 'react';
import i18next from 'i18next';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  Typography, Grid, Container, Chip,
} from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import { useStateValue } from '../../../Initial/Context/StateProvider';
import useStyles from './Styles';
import './Language';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    const [{ Language }] = useStateValue();
    const classes = useStyles({});

    useEffect((): void => {
      if (!i18next.hasResourceBundle('PT', 'HomeTestimonials')) {
        i18next.addResourceBundle('PT', 'HomeTestimonials', LanguagePT);
      }
      if (!i18next.hasResourceBundle('ENG', 'HomeTestimonials')) {
        i18next.addResourceBundle('ENG', 'HomeTestimonials', LanguageENG);
      }
      i18next.changeLanguage(Language);
      // return type void != (): void... so as unknown as void
      return ((): void => {
        i18next.removeResourceBundle('PT', 'HomeTestimonials');
        i18next.removeResourceBundle('ENG', 'HomeTestimonials');
      }) as unknown as void;
    }, []);

    return (
      <Container maxWidth="lg" className={classes.main}>
        <Grid
          container
          spacing={6}
          alignItems="flex-start"
        >
          <Grid item sm={12} md={4} className={classes.divider}>
            <Typography variant="overline" className={classes.text} component="p">
              {t('HomeTestimonials:text1.text')}
            </Typography>
            <Chip
              icon={<RemoveIcon />}
              label={t('HomeTestimonials:text2.author')}
            />
          </Grid>
          <Grid item sm={12} md={4} className={classes.divider}>
            <Typography variant="overline" className={classes.text} component="p">
              {t('HomeTestimonials:text2.text')}
            </Typography>
            <Chip
              icon={<RemoveIcon />}
              label={t('HomeTestimonials:text2.author')}
            />
          </Grid>
          <Grid item sm={12} md={4}>
            <Typography variant="overline" className={classes.text} component="p">
              {t('HomeTestimonials:text3.text')}
            </Typography>
            <Chip
              icon={<RemoveIcon />}
              label={t('HomeTestimonials:text3.author')}
            />
          </Grid>
        </Grid>
      </Container>
    );
  },
);
