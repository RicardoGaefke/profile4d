// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

interface IStyles {
  navlink: {},
  icon: {},
}

export default makeStyles((): IStyles => ({
  navlink: {
    '&.active': {
      backgroundColor: 'lightgray',
      color: 'black',
      '& .MuiSvgIcon-root': {
        color: 'black',
      },
    },
  },
  icon: {
    color: 'black',
  },
}));
