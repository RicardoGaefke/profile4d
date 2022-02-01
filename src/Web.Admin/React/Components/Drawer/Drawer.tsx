import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  Divider, Drawer as MyDrawer, List, ListItem, ListItemText, ListSubheader,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import setLanguage from './Language';
import { useStateValue } from '../../Initial/Context/StateProvider';
import Styles from './Styles';
import FixedContentList from './FixedItemsList/FixedContentList';
import ImagesList from './ImagesList/ImagesList';
import DynamicContent from './DynamicContentList/DynamicContentList';
import SendKeys from './SendKeys/SendKeys';

export default withTranslation()(
  (): React.ReactElement<WithTranslation> => {
    const [{ Drawer }, dispatch] = useStateValue();
    const classes = Styles({});
    setLanguage();

    const toggle = (): void => {
      dispatch({
        type: 'changeDrawer',
        value: !Drawer,
      });
    };

    return (
      <MyDrawer
        open={Drawer}
        variant="persistent"
        onClose={toggle}
      >
        <div className={classes.root}>
          <List
            component="nav"
            aria-labelledby="fixed-content-header"
            subheader={
              (
                <ListSubheader component="div" id="fixed-content-header">
                  Gerenciar clientes
                </ListSubheader>
              )
            }
          >
            <ListItem
              button
              title="Gerenciar clientes"
              className={classes.navlink}
              onClick={(): void => { window.location.href = 'https://clientes.meuperfil4d.com.br/identity'; }}
            >
              <ListItemText primary="Gerenciar clientes" />
            </ListItem>
          </List>
          <List
            component="nav"
            aria-labelledby="fixed-content-header"
            subheader={
              (
                <ListSubheader component="div" id="fixed-content-header">
                  Admin users
                </ListSubheader>
              )
            }
          >
            <ListItem
              button
              component={NavLink}
              to="/usersAdmin"
              title="Gerenciar usuários"
              className={classes.navlink}
            >
              <ListItemText primary="Gerenciar usuários" />
            </ListItem>
          </List>
          <Divider className={classes.divider} />
          <SendKeys />
          <Divider className={classes.divider} />
          <FixedContentList />
          <Divider className={classes.divider} />
          <ImagesList />
          <Divider className={classes.divider} />
          <DynamicContent />
        </div>
      </MyDrawer>
    );
  },
);
