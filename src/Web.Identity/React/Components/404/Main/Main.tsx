import React from 'react';
import { Link as RLink } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  Typography, Container, Link, Grid,
} from '@material-ui/core';
import useStyles from './Styles';
import setLanguage from './Language';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    const classes = useStyles({});
    setLanguage();

    return (
      <Container maxWidth="md" className={classes.container}>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            md={6}
            xs={12}
          >
            <Typography
              variant="caption"
              align="center"
            >
              <img
                className={classes.img}
                alt="Profile4d"
                src="/img/lost.jpg"
              />
              <br />
              Photo by Martin Reisch on Unsplash
            </Typography>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <Typography variant="h4" align="center" gutterBottom className={classes.margin}>
              {t('404Main:title')}
            </Typography>
            <Typography variant="subtitle1" align="center" component="p" gutterBottom className={classes.margin}>
              {t('404Main:text')}
            </Typography>
            <Typography variant="h5" align="center" component="p" gutterBottom className={classes.margin}>
              <Link
                title={t('404Main:btn.title')}
                color="textPrimary"
                underline="always"
                component={RLink}
                to="/"
              >
                {t('404Main:btn.text')}
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    );
  },
);
