import React from 'react';
import { Link as RLink } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  Typography, Container, Button,
} from '@material-ui/core';
import useStyles from './Styles';
import setLanguage from './Language';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    const classes = useStyles({});
    setLanguage();

    return (
      <div className={classes.main}>
        <Container maxWidth="md" id="MyNestedContainer">
          <Typography variant="h1" className={classes.title}>
            {t('HomeBanner:title')}
          </Typography>

          <div>
            <Button
              variant="outlined"
              size="large"
              className={classes.btn}
              title={t('HomeBanner:btn.title')}
              component={RLink}
              to="/about/"
            >
              {t('HomeBanner:btn.label')}
            </Button>
          </div>
        </Container>
      </div>
    );
  },
);
