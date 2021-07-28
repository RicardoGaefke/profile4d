// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { makeStyles, Theme } from '@material-ui/core';

interface IStyles {
  item: {},
  image: {},
}

export default makeStyles((theme: Theme): IStyles => ({
  item: {
    padding: theme.spacing(4),
  },
  image: {
    maxWidth: '70%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxHeight: 330,
  },
}));
