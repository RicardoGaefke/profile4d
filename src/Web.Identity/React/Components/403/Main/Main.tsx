import React from 'react';
import { Link as RLink } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  Container, Grid, Typography, Link,
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
                src="/img/forbidden.jpg"
              />
              <br />
              Photo by Kyle Glenn on Unsplash
            </Typography>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <Typography variant="h4" align="center" gutterBottom className={classes.margin}>
              Ops...
              &nbsp;
              {t('403Main:title')}
            </Typography>
            <Typography variant="subtitle1" align="center" component="p" gutterBottom className={classes.margin}>
              {t('403Main:text')}
            </Typography>
            <Typography variant="h5" align="center" component="p" gutterBottom className={classes.margin}>
              <Link
                title={t('403Main:btn.title')}
                color="textPrimary"
                underline="always"
                component={RLink}
                to="/"
              >
                {t('403Main:btn.text')}
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    );
  },
);
