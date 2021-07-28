import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ListItem, ListSubheader, ListItemText, List,
} from '@material-ui/core';
import setLanguage from '../FixedItemsList/Language';
import Styles from '../FixedItemsList/Styles';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import FixedItems, { IStaticMenuItem } from './DynamicItems';

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
              {t('DrawerAdminFixed:dynamic')}
            </ListSubheader>
        )
}
        className={classes.root}
      >
        {
          FixedItems.map((item: IStaticMenuItem, index: number): React.ReactNode => (
            <ListItem
              key={item.link}
              button
              component={NavLink}
              to={`/dynamicContent/${item.link}`}
              title={t(`DrawerAdminFixed:${item.title}`)}
              className={classes.navlink}
            >
              <ListItemText primary={`${(index + 1).toString()} - ${t(`DrawerAdminFixed:${item.title}`)}`} />
            </ListItem>
          ))
        }
      </List>
    );
  },
);
