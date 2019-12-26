// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core';

interface IStyles {
  main: {},
}

// eslint-disable-next-line no-unused-vars
export default makeStyles((theme: Theme): IStyles => ({
  main: {
    padding: theme.spacing(3),
  },
}));
