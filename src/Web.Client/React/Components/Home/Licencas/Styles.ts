// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { makeStyles, Theme } from '@material-ui/core';

interface IStyles {
  main: {},
  root: {},
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default makeStyles((theme: Theme): IStyles => ({
  main: {
    width: '100%',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(2),
      padding: theme.spacing(2),
      width: theme.spacing(16),
      height: theme.spacing(16),
      jusifyContent: 'center',
      alignItems: 'center',
    },
  },
}));
