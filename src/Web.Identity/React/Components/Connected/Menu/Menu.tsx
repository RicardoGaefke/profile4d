import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  ListSubheader, List, ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import setLanguage from './Language';
import SignOut from './SignOut';
import useStyles from './Styles';
import onClientClick from './onClientClick';
import AdminMenuItem from './AdminMenuItem';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement => {
    const { t } = props;
    const classes = useStyles();
    setLanguage();

    return (
      <>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            (
              <ListSubheader component="div" id="nested-list-subheader">
                {t('Connected:title')}
              </ListSubheader>
            )
          }
        >
          <ListItem button onClick={onClientClick} className={classes.navlink}>
            <ListItemIcon>
              <VpnKeyIcon />
            </ListItemIcon>
            <ListItemText
              primary={t('Connected:clientApp.text')}
              title={t('Connected:clientApp.title')}
            />
          </ListItem>
          <AdminMenuItem />
        </List>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            (
              <ListSubheader component="div" id="nested-list-subheader">
                {t('Connected:title')}
              </ListSubheader>
            )
          }
        >
          <ListItem button component={NavLink} to="/connected/changeName" className={classes.navlink}>
            <ListItemIcon>
              <LoyaltyIcon />
            </ListItemIcon>
            <ListItemText
              primary={t('Connected:changeName.text')}
              title={t('Connected:changeName.title')}
            />
          </ListItem>
          <ListItem button component={NavLink} to="/connected/changeEmail" className={classes.navlink}>
            <ListItemIcon>
              <AlternateEmailIcon />
            </ListItemIcon>
            <ListItemText
              primary={t('Connected:changeEmail.text')}
              title={t('Connected:changeEmail.title')}
            />
          </ListItem>
          <ListItem button component={NavLink} to="/connected/changePassword" className={classes.navlink}>
            <ListItemIcon>
              <VpnKeyIcon />
            </ListItemIcon>
            <ListItemText
              primary={t('Connected:changePassword.text')}
              title={t('Connected:changePassword.title')}
            />
          </ListItem>
          <ListItem button onClick={SignOut}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText
              primary={t('Connected:signOut.text')}
              title={t('Connected:signOut.title')}
            />
          </ListItem>
        </List>
      </>
    );
  },
);
