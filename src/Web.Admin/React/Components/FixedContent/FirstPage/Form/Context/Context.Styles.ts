// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

export interface IStyles {
  root: {},
  form: {},
}

const useStyles = makeStyles((theme: Theme): IStyles => ({
  root: {
  },
  form: {
    padding: theme.spacing(3),
  },
}));

export default useStyles;