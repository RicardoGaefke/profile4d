import React from 'react';
import { Link as RLink } from 'react-router-dom';
import {
  AppBar, Toolbar, Link, Typography, Button,
} from '@material-ui/core';
import { useStateValue } from '../../Initial/Context/StateProvider';
import useStyles from './Styles';
import { Href } from '../../Utils/Domain';

export default (): React.ReactElement<{}> => {
  // eslint-disable-next-line no-unused-vars
  const [{ language, isAuthenticated }, dispatch] = useStateValue();
  const classes = useStyles({});

  const myLogin = (): void => {
    // const url = new Href(window.location.href.replace(/https?:\/\//i, ''));
    const url = new Href('staging.www.ricardogaefke.com');
    // window.location.href = url.toLogin();
    // eslint-disable-next-line no-console
    console.log(url.toLogin());
  };

  return (
    <div className={classes.root} key={language}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link
              title="Home page"
              color="inherit"
              underline="none"
              component={RLink}
              to="/"
            >
              Profile4d
            </Link>
          </Typography>
          <Button
            color="inherit"
            title="Login"
            className={classes.btn}
            onClick={myLogin}
          >
            {(isAuthenticated) ? 'Admin' : 'Login'}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
