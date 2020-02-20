// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

interface IStyles {
  navlink: {},
}

export default makeStyles((): IStyles => ({
  navlink: {
    '&.active': {
      backgroundColor: 'lightgray',
      color: 'black',
    },
  },
}));
