import React, { useEffect } from 'react';
import i18next from 'i18next';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  Typography, Container, Button,
} from '@material-ui/core';
import { useStateValue } from '../../../Initial/Context/StateProvider';
import useStyles from './Styles';
import './Language';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    const [{ Language }] = useStateValue();
    const classes = useStyles({});

    useEffect((): void => {
      i18next.changeLanguage(Language);
      // return type void != (): void... so as unknown as void
      return ((): void => {
        i18next.removeResourceBundle('PT', 'HomeBanner');
        i18next.removeResourceBundle('ENG', 'HomeBanner');
      }) as unknown as void;
    }, []);

    return (
      <div className={classes.main}>
        <Container maxWidth="md">
          <Typography variant="h1" className={classes.title}>
            {t('HomeBanner:title')}
          </Typography>

          <div>
            <Button
              variant="outlined"
              size="large"
              className={classes.btn}
              title={t('HomeBanner:btn.title')}
            >
              {t('HomeBanner:btn.label')}
            </Button>
          </div>
        </Container>
      </div>
    );
  },
);
