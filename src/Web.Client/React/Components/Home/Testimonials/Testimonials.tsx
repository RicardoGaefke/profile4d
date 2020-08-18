import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  Typography, Grid, Container, Chip,
} from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import useStyles from './Styles';
import setLanguage from './Language';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    const classes = useStyles({});
    setLanguage();

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
              label={t('HomeTestimonials:text1.author')}
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
