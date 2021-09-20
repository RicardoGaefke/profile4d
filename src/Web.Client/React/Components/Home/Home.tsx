import React from 'react';
import { Grid } from '@material-ui/core';
import RequestKey from './RequestKey/RequestKey';
import useStyles from './Styles';
import Assessment from './Assessments/Assessments';
import Licencas from './Licencas/Licencas';
import NaoRecebidas from './NaoRecebidas/NaoRecebidas';

const Home = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid
      direction="column"
      justify="center"
      alignItems="center"
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
          direction="column"
          item
          container
          justify="center"
          alignItems="center"
          className={classes.item}
        >
          <Assessment />
        </Grid>
        <Grid
          direction="column"
          item
          container
          justify="center"
          alignItems="center"
          className={classes.bottom}
        >
          <RequestKey />
        </Grid>
        <Grid
          direction="column"
          item
          container
          justify="center"
          alignItems="center"
          className={classes.item}
        >
          <Licencas />
        </Grid>
        <Grid
          direction="column"
          item
          container
          justify="center"
          alignItems="center"
          className={classes.item}
        >
          <NaoRecebidas />
        </Grid>
      </Grid>
    </Grid>
  );
};

Home.displayName = 'Home';

export default Home;
