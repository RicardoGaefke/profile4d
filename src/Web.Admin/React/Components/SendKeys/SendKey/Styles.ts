// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

interface IStyles {
  root: {},
  divider: {},
}

export default makeStyles((theme: Theme): IStyles => ({
  root: {
    padding: theme.spacing(3),
  },
  divider: {
    marginBottom: theme.spacing(1),
  },
}));
