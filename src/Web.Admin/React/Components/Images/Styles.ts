// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

interface IStyles {
  root: {},
  title: {},
  image: {},
  card: {},
  cardMedia: {},
  main: {},
}

// eslint-disable-next-line no-unused-vars
export default makeStyles((theme: Theme): IStyles => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  title: {
    textDecoration: 'underline',
  },
  image: {
    maxHeight: 250,
    maxWidth: '100%',
  },
  card: {
    maxWidth: 345,
  },
  cardMedia: {
    maxHeight: 150,
  },
  main: {
    padding: theme.spacing(3),
  },
}));
