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
      if (!i18next.hasResourceBundle('PT', 'HomeIntro')) {
        i18next.addResourceBundle('PT', 'HomeIntro', LanguagePT);
      }
      if (!i18next.hasResourceBundle('ENG', 'HomeIntro')) {
        i18next.addResourceBundle('ENG', 'HomeIntro', LanguageENG);
      }
      // return type void != (): void... so as unknown as void
      return ((): void => {
        i18next.removeResourceBundle('PT', 'HomeIntro');
        i18next.removeResourceBundle('ENG', 'HomeIntro');
      }) as unknown as void;
    }, []);

    return (
      <Container maxWidth="md" className={classes.main}>
        <Typography variant="overline" className={classes.text} component="p">
          {t('HomeIntro:text')}
        </Typography>
      </Container>
    );
  },
);
