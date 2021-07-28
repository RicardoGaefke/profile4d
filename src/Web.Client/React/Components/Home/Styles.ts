// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { makeStyles, Theme } from '@material-ui/core';

interface IStyles {
  main: {},
  inner: {},
  item: {},
  bottom: {},
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default makeStyles((theme: Theme): IStyles => ({
  main: {
    padding: theme.spacing(3),
  },
  inner: {
    border: `1px solid ${(theme.palette.type === 'dark') ? 'rgba(255,255,255,0.05)' : theme.palette.primary.main}`,
    // backgroundColor: (theme.palette.type === 'dark') ? 'rgba(255,255,255,0.05)' : theme.palette.primary.main,
    // color: (theme.palette.type === 'dark') ? '#fff' : 'rgba(233,233,233,1)',
  },
  item: {
    width: '100%',
    padding: theme.spacing(2),
  },
  bottom: {
    width: '100%',
    padding: theme.spacing(2),
    backgroundColor: (theme.palette.type === 'dark') ? 'rgba(255,255,255,0.05)' : theme.palette.primary.main,
  },
}));
