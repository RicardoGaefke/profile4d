import React, { useEffect } from 'react';
import { Link as RLink } from 'react-router-dom';
import i18next from 'i18next';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  Typography, Container, Link,
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
      if (!i18next.hasResourceBundle('PT', '404Main')) {
        i18next.addResourceBundle('PT', '404Main', LanguagePT);
      }
      if (!i18next.hasResourceBundle('ENG', '404Main')) {
        i18next.addResourceBundle('ENG', '404Main', LanguageENG);
      }
      // return type void != (): void... so as unknown as void
      return ((): void => {
        i18next.removeResourceBundle('PT', '404Main');
        i18next.removeResourceBundle('ENG', '404Main');
      }) as unknown as void;
    }, []);

    return (
      <div className={classes.main}>
        <img alt={t('404Main:title')} src="/img/fog.jpg" className={classes.img} />
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            Ops...
            &nbsp;
            {t('404Main:title')}
          </Typography>
          <Typography variant="h5" align="center" component="p" gutterBottom>
            {t('404Main:text')}
          </Typography>
          <Typography variant="h5" align="center" component="p" gutterBottom>
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
        </Container>
      </div>
    );
  },
);
