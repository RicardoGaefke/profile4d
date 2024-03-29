import React from 'react';
import {
  AppBar, Toolbar, Typography,
} from '@material-ui/core';
import { useStateValue } from '../../Initial/Context/StateProvider';
import useStyles from './Styles';
import LoginButton from './BtnLogin/LoginButton';
import ConfigButton from './BtnConfig/ConfigButton';

export default (): React.ReactElement<{}> => {
  const [{ language }] = useStateValue();
  const classes = useStyles({});

  return (
    <div className={classes.root} key={language} data-remove-printing="remove">
      <AppBar position="fixed" className={classes.bar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {/* <Link
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
            </Link> */}
            <img
              src="/img/logo.png"
              alt="Profile4d"
            />
          </Typography>
          <LoginButton />
          <ConfigButton />
        </Toolbar>
      </AppBar>
    </div>
  );
};
