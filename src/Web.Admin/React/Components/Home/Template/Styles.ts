// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

interface IStyles {
  container: {},
  content: {},
  img: {},
}

export default makeStyles((theme: Theme): IStyles => ({
  container: {
    padding: theme.spacing(2),
    display: 'flex',
    flex: 1,
  },
  content: {
  },
  img: {
    maxWidth: '85%',
    marginTop: theme.spacing(1),
  },
}));
