// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Theme, makeStyles } from '@material-ui/core/styles';

interface IStyles {
  main: {},
  divider: {},
}

export default makeStyles((theme: Theme): IStyles => ({
  main: {
    padding: theme.spacing(3),
  },
  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));
