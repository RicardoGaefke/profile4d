import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import useStyles from './Styles';

export default (): React.ReactElement => {
  const classes = useStyles({});

  return (
    <Container className={classes.container}>
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
        </Grid>
      </Grid>
    </Container>
  );
};
