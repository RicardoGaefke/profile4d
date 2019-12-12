// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core';

interface IStyles {
  snackbar: {},
}

// eslint-disable-next-line no-unused-vars
export default makeStyles((theme: Theme): IStyles => ({
  snackbar: {
    margin: theme.spacing(1),
    // backgroundColor: amber[700],
    // backgroundColor: '#c7e4e2',
    maxWidth: 500,
    position: 'fixed',
    bottom: 40,
    right: 40,
    color: (theme.palette.type === 'dark') ? '#000' : '#fff',
  },
}));
