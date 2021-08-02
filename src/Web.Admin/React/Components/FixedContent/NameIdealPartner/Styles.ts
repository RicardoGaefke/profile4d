// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { makeStyles, Theme } from '@material-ui/core';

interface IStyles {
  main: {},
  divider: {},
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default makeStyles((theme: Theme): IStyles => ({
  main: {
    padding: theme.spacing(3),
  },
  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));
