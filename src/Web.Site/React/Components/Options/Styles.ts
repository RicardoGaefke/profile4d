// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core';

interface IStyles {
  main: {},
  title: {},
  form: {},
  btnGrid: {},
  button: {},
  helperText: {},
}

// eslint-disable-next-line no-unused-vars
export default makeStyles((theme: Theme): IStyles => ({
  main: {
    minHeight: 200,
    padding: 25,
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1rem',
    marginBottom: '5px',
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    '@media(max-width: 767px)': {
      flexDirection: 'column',
    },
  },
  btnGrid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: '5px',
  },
  button: {
    marginLeft: '10px',
  },
  helperText: {
    marginTop: '0px',
    marginBottom: '5px',
  },
}));
