// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core';

interface IStyles {
  item: {},
  itemWithBorder: {},
  image: {},
  container: {},
  pdfContainer: {},
}

export default makeStyles((theme: Theme): IStyles => ({
  item: {
    padding: theme.spacing(4),
    width: '100%',
  },
  itemWithBorder: {
    padding: theme.spacing(4),
    width: '100%',
    border: 'solid 1px darkgray',
  },
  image: {
    maxWidth: '100%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxHeight: 330,
  },
  container: {
    padding: theme.spacing(4),
    maxWidth: '800px',
  },
  pdfContainer: {
    padding: 0,
    width: '100%',
    height: 'calc(100vh - 105px)',
  },
}));
