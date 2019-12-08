// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

interface IStyles {
  root: {},
  title: {},
  btn: {},
  bar: {},
}

export default makeStyles((theme: Theme): IStyles => ({
  root: {
    flexGrow: 0,
  },
  title: {
    flexGrow: 1,
  },
  btn: {
    height: '65px',
    borderRadius: 0,
    paddingLeft: '4px',
    paddingRight: '4px',
  },
  bar: {
    backgroundColor: (theme.palette.type === 'dark') ? 'rgba(255,255,255,0.05)' : theme.palette.primary.main,
    color: (theme.palette.type === 'dark') ? '#fff' : 'rgba(233,233,233,1)',
  },
}));
