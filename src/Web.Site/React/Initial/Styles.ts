// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core';

export interface IStyles {
  body: any,
  main: any,
}

export default makeStyles((theme: Theme): IStyles => ({
  body: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flexGrow: 1,
    marginTop: 0,
    marginBotton: 40,
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent: 'stretch',
  },
}));
