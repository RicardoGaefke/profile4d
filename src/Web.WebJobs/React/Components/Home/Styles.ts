// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core';

interface IStyles {
  main: {},
  tabs: {},
  table: {},
}

// eslint-disable-next-line no-unused-vars
export default makeStyles((theme: Theme): IStyles => ({
  main: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  tabs: {
    flexGrow: 1,
  },
  table: {
    minWidth: 650,
  },
}));
