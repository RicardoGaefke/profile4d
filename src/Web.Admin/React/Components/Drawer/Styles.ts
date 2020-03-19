// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

interface IStyles {
  root: {},
  divider: {},
}

export default makeStyles((theme: Theme): IStyles => ({
  root: {
    width: 350,
    marginTop: 65,
    marginBottom: 40,
  },
  divider: {
    marginBottom: theme.spacing(1),
  },
}));
