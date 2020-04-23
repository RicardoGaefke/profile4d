// eslint-disable-next-line no-unused-vars
import { Theme, makeStyles } from '@material-ui/core/styles';

interface IStyles {
  root: {};
  title: {};
}

export default makeStyles((theme: Theme): IStyles => ({
  root: {
    padding: theme.spacing(2),
  },
  title: {
    fontSize: '1rem',
    fontWeight: 'bold',
  },
}));
