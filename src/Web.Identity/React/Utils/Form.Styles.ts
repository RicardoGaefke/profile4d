// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

export interface IStyles {
  main: {},
  root: {},
  container: {},
  item: {},
  button: {},
  divider: {},
  icon: {},
}

const useStyles = makeStyles((theme: Theme): IStyles => ({
  main: {
    padding: theme.spacing(3),
  },
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
