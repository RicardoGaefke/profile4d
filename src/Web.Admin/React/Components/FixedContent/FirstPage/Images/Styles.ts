// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

interface IStyles {
  root: {},
  title: {},
  image: {},
  card: {},
  cardMedia: {},
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
    maxWidth: '90%',
  },
  card: {
    maxWidth: 345,
  },
  cardMedia: {
    maxHeight: 150,
  },
}));
