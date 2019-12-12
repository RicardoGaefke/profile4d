// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core';

interface IStyles {
  main: {},
  text: {},
  divider: {},
}

// eslint-disable-next-line no-unused-vars
export default makeStyles((theme: Theme): IStyles => ({
  main: {
    paddingTop: 50,
    paddingBottom: 50,
  },
  text: {
    fontWeight: 'normal',
    fontSize: '.9rem',
    textAlign: 'justify',
    paddingBottom: '1.3rem',
  },
  divider: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));
