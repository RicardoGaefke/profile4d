// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core';

interface IStyles {
  main: {},
  text: {},
  paragraph: {},
  imgContainer: {},
  img: {},
}

// eslint-disable-next-line no-unused-vars
export default makeStyles((theme: Theme): IStyles => ({
  main: {
    minHeight: 400,
    paddingTop: 100,
    paddingBottom: 100,
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
  paragraph: {
    marginTop: 20,
    fontWeight: 'normal',
    fontSize: '.9rem',
    textAlign: 'justify',
  },
  imgContainer: {
    alignContent: 'center',
    marginLeft: '20%',
    marginRight: '20%',
    marginTop: 40,
    marginBottom: 40,
  },
  img: {
    maxWidth: '100%',
  },
}));
