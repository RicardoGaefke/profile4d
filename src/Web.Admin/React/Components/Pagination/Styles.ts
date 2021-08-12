// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

interface IStyles {
  root: {},
  textBox: {},
}

// eslint-disable-next-line no-unused-vars
export default makeStyles((theme: Theme): IStyles => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: (theme.palette.type === 'dark') ? '#111' : '#EEE',
    '& > *': {
      margin: '10px 0',
      display: 'flex',
    },
  },
  textBox: {
    width: '100px',
    margin: '0 10px',
  },
}));
