import React from 'react';
import {
  Paper, List, ListItem,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import useStyles from './Styles';
import setLanguage from './Language';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement => {
    const classes = useStyles({});
    const { t } = props;
    setLanguage();

    return (
      <Paper square elevation={3} className={classes.root}>
        <Alert severity="warning">
          <AlertTitle>{t('Advice:title')}</AlertTitle>
          <List>
            <ListItem>
              <div dangerouslySetInnerHTML={{ __html: t('Advice:one') }} />
            </ListItem>
            <ListItem>
              <div dangerouslySetInnerHTML={{ __html: t('Advice:two') }} />
            </ListItem>
          </List>
        </Alert>
      </Paper>
    );
  },
);
