import React from 'react';
import { Drawer } from '@material-ui/core';
import { useStateValue } from '../../Initial/Context/StateProvider';
import Styles from './Styles';
import ConfigTheme from './ChangeTheme/Theme';
import ConfigLanguage from './ChangeLanguage/Language';

export default (): React.ReactElement<any> => {
  const [{ Config }, dispatch] = useStateValue();

  const classes = Styles({});

  const toggle = (): void => {
    dispatch({
      type: 'changeConfig',
      value: !Config,
    });
  };

  return (
    <Drawer
      open={Config}
      anchor="right"
      onClose={toggle}
    >
      <div className={classes.root}>
        <ConfigTheme />
        <ConfigLanguage />
      </div>
    </Drawer>
  );
};
