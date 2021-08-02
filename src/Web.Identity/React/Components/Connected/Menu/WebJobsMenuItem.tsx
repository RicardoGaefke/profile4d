import React from 'react';
import {
  ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import useStyles from './Styles';
import onWebJobsClick from './onWebJobsClick';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    const classes = useStyles({});

    return (
      <ListItem button onClick={onWebJobsClick} className={classes.navlink}>
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText
          primary={t('Connected:clientWebJobs.text')}
          title={t('Connected:clientWebJobs.title')}
        />
      </ListItem>
    );
  },
);
