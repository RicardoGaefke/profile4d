import React from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  ListItem, ListSubheader, ListItemText, List,
} from '@material-ui/core';
import setLanguage from './Language';
import Styles from './Styles';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import FixedItems, { IStaticMenuItem } from './FixedItems';

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
              {t('DrawerAdminFixed:title')}
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
              to={`/fixedcontent/${item.link}`}
              title={t(`DrawerAdminFixed:${item.title}`)}
              className={classes.navlink}
            >
              <ListItemText
                primary={`${index + 1} - ${t(`DrawerAdminFixed:${item.title}`)}`}
              />
            </ListItem>
          ))
        }
      </List>
    );
  },
);
