import React from 'react';
import { Container } from '@material-ui/core';
import MyDrawer from '../Drawer/Drawer';
import useStyles from './Styles';
import RootRouter from '../../Router/Root';

const Template = (): JSX.Element => {
  const classes = useStyles({});

  return (
    <Container className={classes.container}>
      <MyDrawer />
      <RootRouter />
    </Container>
  );
};

Template.displayName = 'Template';

export default Template;
