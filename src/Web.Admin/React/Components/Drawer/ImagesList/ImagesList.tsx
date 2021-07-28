import React from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ListItem, ListSubheader, ListItemText, List,
} from '@material-ui/core';
import setLanguage from './Language';
import Styles from '../FixedItemsList/Styles';
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
              {t('DrawerAdminImage:title')}
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
              to={`/imageform/${item.link}`}
              title={t(`DrawerAdminImage:${item.title}`)}
              className={classes.navlink}
            >
              <ListItemText primary={t(`DrawerAdminImage:${item.title}`)} />
            </ListItem>
          ))
        }
      </List>
    );
  },
);

// export default withTranslation()(
//   (props: WithTranslation): React.ReactElement<WithTranslation> => {
//     const { t } = props;
//     const classes = Styles({});
//     setLanguage();

//     return (
//       <List
//         component="nav"
//         aria-labelledby="fixed-content-header"
//         subheader={
//           (
//             <ListSubheader component="div" id="fixed-content-header">
//               {t('DrawerAdminImage:images')}
//             </ListSubheader>
//         )}
//         className={classes.root}
//       >
//         <ListItem
//           button
//           className={classes.navlink}
//         >
//           <ListItemText primary="Aqui vão as imagens" />
//         </ListItem>
//       </List>
//     );
//   },
// );
