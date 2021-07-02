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
  chart: {},
  chartImage: {},
  chartImageFull: {},
}

export default makeStyles((theme: Theme): IStyles => ({
  item: {
    padding: theme.spacing(4),
    width: '100%',
    '@media print': {
      font: '9pt Roboto, Calibri, Georgia, "Times New Roman", Times, serif',
      lineHeight: 1.0,
      padding: theme.spacing(0.1),
      'page-break-inside': 'avoid',
    },
  },
  title: {
    padding: theme.spacing(4),
    width: '100%',
    '@media print': {
      font: '13pt Roboto, Calibri, Georgia, "Times New Roman", Times, serif',
      lineHeight: 1.0,
      padding: theme.spacing(0.1),
      'page-break-inside': 'avoid',
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
    maxHeight: 300,
  },
  container: {
    padding: theme.spacing(4),
    maxWidth: '800px',
    '@media print': {
      padding: '10mm',
    },
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
      font: '13pt Roboto, Calibri, Georgia, "Times New Roman", Times, serif',
      lineHeight: 1.0,
      padding: theme.spacing(0.1),
      'page-break-inside': 'avoid',
    },
  },
  itemBrakePage: {
    '@media print': {
      'page-break-before': 'always',
    },
  },
  chart: {
    '@media print': {
      margin: '0 20% 0 20%',
    },
  },
  chartImage: {
    maxWidth: '100%',
    maxHeight: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  chartImageFull: {
    maxWidth: '100%',
    width: '18cm',
    maxHeight: 800,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));
