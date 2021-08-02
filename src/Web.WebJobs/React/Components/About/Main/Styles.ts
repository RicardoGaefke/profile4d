// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { makeStyles, Theme } from '@material-ui/core';

interface IStyles {
  main: {},
  img: {},
  text: {},
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default makeStyles((theme: Theme): IStyles => ({
  main: {
    marginBottom: 30,
  },
  img: {
    maxWidth: '100%',
    marginBottom: 30,
  },
  text: {
    fontWeight: 'normal',
    fontSize: '.9rem',
    textAlign: 'justify',
    '&::first-letter': {
      fontSize: '7.5rem',
      lineHeight: '7rem',
      fontWeight: 'bold',
      float: 'left',
    },
  },
}));
