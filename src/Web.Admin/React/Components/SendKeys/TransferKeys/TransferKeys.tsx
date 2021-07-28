import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import { Typography, Container } from '@material-ui/core';
import Form from './Form/Form.Context';
import setLanguage from './Language';
import useStyles from './Styles';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    setLanguage();
    const { t } = props;
    const classes = useStyles();

    return (
      <Container className={classes.root}>
        <Typography variant="h3" align="center" gutterBottom>
          {t('TransferKeys:title')}
        </Typography>
        <Form />
      </Container>
    );
  },
);
