import React from 'react';
import {
  Container, Grid, Typography, Divider,
} from '@material-ui/core';
import useStyles from './Styles';
import MyMenu from '../Menu/Menu';
import ConnectedRouter from '../Router/ConnectedRouter';

export default (): React.ReactElement => {
  const classes = useStyles({});

  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          md={6}
          xs={12}
        >
          <Typography
            variant="h4"
            align="center"
          >
            <img
              className={classes.img}
              alt="Profile4d"
              src="/img/logo_original.png"
            />
          </Typography>
          <Divider className={classes.divider} />
          <MyMenu />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <ConnectedRouter />
        </Grid>
      </Grid>
    </Container>
  );
};
