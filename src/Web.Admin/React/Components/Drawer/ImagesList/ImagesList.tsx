import React from 'react';
// eslint-disable-next-line no-unused-vars
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  // eslint-disable-next-line no-unused-vars
  ListItem, ListSubheader, ListItemText, List,
} from '@material-ui/core';
import setLanguage from '../FixedItemsList/Language';
import Styles from '../FixedItemsList/Styles';
// eslint-disable-next-line no-unused-vars
import FixedItems, { IStaticMenuItem } from '../FixedItemsList/FixedItems';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    const classes = Styles({});
    setLanguage();

    return (
      <List
        component="nav"
        aria-labelledby="fixed-content-header"
        subheader={
          (
            <ListSubheader component="div" id="fixed-content-header">
              {t('DrawerAdminFixed:images')}
            </ListSubheader>
        )}
        className={classes.root}
      >
        <ListItem
          button
          className={classes.navlink}
        >
          <ListItemText primary="Aqui vão as imagens" />
        </ListItem>
      </List>
    );
  },
);
