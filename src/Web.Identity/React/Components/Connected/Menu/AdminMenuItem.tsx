import React, { useState, useEffect } from 'react';
import {
  ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import useStyles from './Styles';
import onAdminClick from './onAdminClick';
import AdminAsyncEffect from './AdminAsyncEffect';
import WebJobsMenuItem from './WebJobsMenuItem';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    const classes = useStyles({});
    const [admin, setAdmin] = useState<boolean>(false);

    useEffect((): void => {
      AdminAsyncEffect(setAdmin);
    }, []);

    return (
      <>
        {
          (!admin) ? null : (
            <>
              <ListItem button onClick={onAdminClick} className={classes.navlink}>
                <ListItemIcon>
                  <SupervisorAccountIcon />
                </ListItemIcon>
                <ListItemText
                  primary={t('Connected:clientAdmin.text')}
                  title={t('Connected:clientAdmin.title')}
                />
              </ListItem>
              <WebJobsMenuItem />
            </>
          )
        }
      </>
    );
  },
);
