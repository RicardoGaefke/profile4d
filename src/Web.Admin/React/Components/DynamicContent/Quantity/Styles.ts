// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

interface IStyles {
  parent: {},
  progress: {},
}

export default makeStyles((theme: Theme): IStyles => ({
  parent: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(32),
    },
  },
  progress: {
    height: 12,
    marginLeft: 5,
    marginRight: 5,
  },
}));
