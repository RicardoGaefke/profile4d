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

export default withTranslation()(
  (props: WithTranslation): React.ReactElement => {
    const { t } = props;
    setLanguage();

    return (
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
        <ListItem button component={NavLink} to="/connected/changeName">
          <ListItemIcon>
            <LoyaltyIcon />
          </ListItemIcon>
          <ListItemText
            primary={t('Connected:changeName.text')}
            title={t('Connected:changeName.title')}
          />
        </ListItem>
        <ListItem button component={NavLink} to="/connected/changeEmail">
          <ListItemIcon>
            <AlternateEmailIcon />
          </ListItemIcon>
          <ListItemText
            primary={t('Connected:changeEmail.text')}
            title={t('Connected:changeEmail.title')}
          />
        </ListItem>
        <ListItem button component={NavLink} to="/connected/changePassord">
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
    );
  },
);
