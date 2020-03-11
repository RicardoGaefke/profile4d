import React from 'react';
import { Container } from '@material-ui/core';
import MyDrawer from '../Drawer/Drawer';
import useStyles from './Styles';
import RootRouter from '../../Router/Root';

export default (): React.ReactElement => {
  const classes = useStyles({});

  return (
    <Container className={classes.container}>
      <MyDrawer />
      <RootRouter />
    </Container>
  );
};
