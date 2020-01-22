import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import { Typography, Divider, Drawer as MyDrawer } from '@material-ui/core';
import setLanguage from './Language';
import { useStateValue } from '../../Initial/Context/StateProvider';
import Styles from './Styles';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
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
        variant="permanent"
        onClose={toggle}
      >
        <div className={classes.root}>
          <Typography variant="h6">
            {t('DrawerAdmin:title')}
          </Typography>
          <Divider className={classes.divider} />
        </div>
      </MyDrawer>
    );
  },
);
