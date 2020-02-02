import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import { Divider, Drawer as MyDrawer } from '@material-ui/core';
import setLanguage from './Language';
import { useStateValue } from '../../Initial/Context/StateProvider';
import Styles from './Styles';
import FixedContentList from './FixedItemsList/FixedContentList';
import ImagesList from './ImagesList/ImagesList';
import DynamicContent from './DynamicContentList/DynamicContentList';

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
