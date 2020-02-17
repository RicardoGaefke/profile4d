import React from 'react';
import { Link as RLink } from 'react-router-dom';
import {
  AppBar, Toolbar, Link, Typography,
} from '@material-ui/core';
import useStyles from './Styles';
import LoginButton from './BtnLogin/LoginButton';
import ConfigButton from './BtnConfig/ConfigButton';

export default (): React.ReactElement => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
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
                alt="Profile4d"
              />
            </Link>
          </Typography>
          <LoginButton />
          <ConfigButton />
        </Toolbar>
      </AppBar>
    </div>
  );
};
