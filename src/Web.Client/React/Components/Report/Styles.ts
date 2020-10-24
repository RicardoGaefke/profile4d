// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core';

interface IStyles {
  item: {},
  image: {},
  container: {},
}

export default makeStyles((theme: Theme): IStyles => ({
  item: {
    padding: theme.spacing(4),
    width: '100%',
  },
  image: {
    maxWidth: '100%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxHeight: 330,
  },
  container: {
    padding: theme.spacing(4),
    maxWidth: '800px',
  },
}));
