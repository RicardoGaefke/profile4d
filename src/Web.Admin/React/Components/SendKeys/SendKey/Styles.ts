// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

interface IStyles {
  root: {},
  parent: {},
  divider: {},
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
}));
