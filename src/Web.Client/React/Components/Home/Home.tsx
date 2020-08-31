import React from 'react';
import { Grid } from '@material-ui/core';
import RequestKey from './RequestKey/RequestKey';

const Home = (): JSX.Element => (
  <Grid
    container
    spacing={0}
    justify="center"
    alignItems="center"
  >
    <Grid>
      <Grid item>
        item 1
      </Grid>
      <Grid item>
        item 2
      </Grid>
      <Grid item>
        <RequestKey />
      </Grid>
    </Grid>
  </Grid>
);

Home.displayName = 'Home';

export default Home;
