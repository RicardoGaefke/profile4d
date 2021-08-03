import React from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  // eslint-disable-next-line no-unused-vars
  ListItem, ListSubheader, ListItemText, List,
} from '@material-ui/core';
import setLanguage from './Language';
import Styles from '../FixedItemsList/Styles';
// eslint-disable-next-line no-unused-vars
import FixedItems, { IStaticMenuItem } from './KeysItems';

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
              {t('DrawerAdminKeys:title')}
            </ListSubheader>
          )
        }
        className={classes.root}
      >
        {
          FixedItems.map((item: IStaticMenuItem): React.ReactNode => (
            <ListItem
              key={item.link}
              button
              component={NavLink}
              to={`/transferKeys/${item.link}`}
              title={t(`DrawerAdminKeys:${item.title}`)}
              className={classes.navlink}
            >
              <ListItemText primary={t(`DrawerAdminKeys:${item.title}`)} />
            </ListItem>
          ))
        }
      </List>
    );
  },
);
