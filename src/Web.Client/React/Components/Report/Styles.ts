// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core';

interface IStyles {
  item: {},
  title: {},
  itemWithBorder: {},
  image: {},
  container: {},
  pdfContainer: {},
  brakePage: {},
  itemBrakePage: {},
}

export default makeStyles((theme: Theme): IStyles => ({
  item: {
    padding: theme.spacing(4),
    width: '100%',
    '@media print': {
      font: '10pt Calibri, Georgia, "Times New Roman", Times, serif',
      lineHeight: 1.3,
      padding: theme.spacing(1),
    },
  },
  title: {
    padding: theme.spacing(4),
    width: '100%',
    '@media print': {
      font: '20pt Calibri, Georgia, "Times New Roman", Times, serif',
      lineHeight: 1.3,
      padding: theme.spacing(1),
    },
  },
  itemWithBorder: {
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
  brakePage: {
    padding: theme.spacing(4),
    width: '100%',
    '@media print': {
      'page-break-before': 'always',
      font: '20pt Calibri, Georgia, "Times New Roman", Times, serif',
      lineHeight: 1.3,
      padding: theme.spacing(1),
    },
  },
  itemBrakePage: {
    '@media print': {
      'page-break-before': 'always',
    },
  },
}));
