import React from 'react';
import { Container, Grid } from '@material-ui/core';
import MyDrawer from '../../Drawer/Drawer';
import useStyles from './Styles';

export default (props: React.PropsWithChildren<React.ReactNode>): React.ReactElement => {
  const classes = useStyles({});
  const { children } = props;

  return (
    <Container className={classes.container}>
      <MyDrawer />
      <Grid
        className={classes.grid}
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {children}
      </Grid>
    </Container>
  );
};
