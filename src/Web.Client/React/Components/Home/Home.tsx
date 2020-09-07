import React from 'react';
import { Grid } from '@material-ui/core';
import RequestKey from './RequestKey/RequestKey';
import useStyles from './Styles';
import Assessment from './Assessments/Assessments';

const Home = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      className={classes.main}
    >
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.inner}
      >
        <Grid
          item
          container
          justify="center"
          className={classes.item}
        >
          {null}
        </Grid>
        <Grid
          item
          container
          justify="center"
          className={classes.item}
        >
          <Assessment />
        </Grid>
        <Grid
          item
          container
          justify="center"
          className={classes.bottom}
        >
          <RequestKey />
        </Grid>
      </Grid>
    </Grid>
  );
};

Home.displayName = 'Home';

export default Home;
