// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

export interface IStyles {
  root: {},
  container: {},
  item: {},
  button: {},
  divider: {},
  icon: {},
}

const useStyles = makeStyles((theme: Theme): IStyles => ({
  root: {
  },
  container: {
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  item: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    width: '100%',
  },
  button: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  divider: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
}));

export default useStyles;
