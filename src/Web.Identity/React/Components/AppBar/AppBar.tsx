import React from 'react';
import { Link as RLink } from 'react-router-dom';
import {
  AppBar, Toolbar, Link, Typography,
} from '@material-ui/core';
import { useStateValue } from '../../Initial/Context/StateProvider';
import useStyles from './Styles';
import ConfigButton from './BtnConfig/ConfigButton';

export default (): React.ReactElement => {
  const [{ Language }] = useStateValue();
  const classes = useStyles({});

  return (
    <div className={classes.root} key={Language}>
      <AppBar position="fixed" className={classes.bar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link
              title="Home page"
              color="inherit"
              underline="none"
              component={RLink}
              to="/"
              id="myProfile"
            >
              <img
                src="/img/logo.png"
                alt="Performance 9x"
              />
            </Link>
          </Typography>
          <ConfigButton />
        </Toolbar>
      </AppBar>
    </div>
  );
};
