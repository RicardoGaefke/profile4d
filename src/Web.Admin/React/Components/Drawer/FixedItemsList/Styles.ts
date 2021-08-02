// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

interface IStyles {
  root: {},
  navlink: {},
}

export default makeStyles((): IStyles => ({
  root: {
    width: '100%',
  },
  navlink: {
    '&.active': {
      backgroundColor: 'lightgray',
      color: 'black',
    },
  },
}));
