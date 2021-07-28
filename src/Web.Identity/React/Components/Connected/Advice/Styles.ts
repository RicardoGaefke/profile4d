// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

interface IStyles {
  root: {},
  bottom: {},
}

export default makeStyles((theme: Theme): IStyles => ({
  root: {
    padding: theme.spacing(4),
  },
  bottom: {
    marginBottom: 30,
  },
}));
