import React, { useEffect } from 'react';
import i18next from 'i18next';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  Typography, Container,
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
      if (!i18next.hasResourceBundle('PT', 'PolicyMain')) {
        i18next.addResourceBundle('PT', 'PolicyMain', LanguagePT);
      }
      if (!i18next.hasResourceBundle('ENG', 'PolicyMain')) {
        i18next.addResourceBundle('ENG', 'PolicyMain', LanguageENG);
      }
      // return type void != (): void... so as unknown as void
      return ((): void => {
        i18next.removeResourceBundle('PT', 'PolicyMain');
        i18next.removeResourceBundle('ENG', 'PolicyMain');
      }) as unknown as void;
    }, []);

    return (
      <div className={classes.main}>
        <img alt={t('PolicyMain:title')} src="/img/locker.jpg" className={classes.img} />
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            {t('PolicyMain:title')}
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {t('PolicyMain:text')}
          </Typography>
        </Container>
      </div>
    );
  },
);
