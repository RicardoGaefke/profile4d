// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

interface IStyles {
  root: {},
  title: {},
  bar: {},
}

// eslint-disable-next-line no-unused-vars
export default makeStyles((theme: Theme): IStyles => ({
  root: {
    flexGrow: 0,
    marginTop: 65,
  },
  title: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: '#fff',
    color: '#000',
    '@media print': {
      display: 'none',
    },
  },
}));
