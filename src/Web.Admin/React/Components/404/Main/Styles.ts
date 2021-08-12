import { makeStyles } from '@material-ui/core';

interface IStyles {
  main: {},
  img: {},
}

export default makeStyles((): IStyles => ({
  main: {
    marginBottom: 30,
  },
  img: {
    maxWidth: '100%',
    marginBottom: 30,
  },
}));
