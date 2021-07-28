// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

interface IStyles {
  root: {},
  parent: {},
  divider: {},
  progress: {},
  add: {},
}

export default makeStyles((theme: Theme): IStyles => ({
  root: {
    padding: theme.spacing(3),
  },
  parent: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(32),
    },
  },
  divider: {
    marginBottom: theme.spacing(1),
  },
  progress: {
    height: 12,
    marginLeft: 5,
    marginRight: 5,
  },
  add: {
    position: 'fixed',
    bottom: 85,
    right: 45,
  },
}));
