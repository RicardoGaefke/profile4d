import React, { useEffect } from 'react';
import i18next from 'i18next';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  Typography, Container,
} from '@material-ui/core';
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
      if (!i18next.hasResourceBundle('PT', 'AboutMain')) {
        i18next.addResourceBundle('PT', 'AboutMain', LanguagePT);
      }
      if (!i18next.hasResourceBundle('ENG', 'AboutMain')) {
        i18next.addResourceBundle('ENG', 'AboutMain', LanguageENG);
      }
      // return type void != (): void... so as unknown as void
      return ((): void => {
        i18next.removeResourceBundle('PT', 'AboutMain');
        i18next.removeResourceBundle('ENG', 'AboutMain');
      }) as unknown as void;
    }, []);

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
