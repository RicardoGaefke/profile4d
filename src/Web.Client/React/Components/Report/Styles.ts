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
  footerTitle: {},
  footerTitlePrint: {},
  chart: {},
  chartFull: {},
  chartSmall: {},
  chartImage: {},
  chartImageSmall: {},
  chartImageFull: {},
  fab: {},
}

export default makeStyles((theme: Theme): IStyles => ({
  item: {
    padding: theme.spacing(4),
    width: '100%',
    '@media print': {
      font: '9pt Poppins, Calibri, Georgia, "Times New Roman", Times, serif',
      lineHeight: 1.0,
      padding: theme.spacing(0.1),
      'page-break-inside': 'avoid',
    },
  },
  title: {
    padding: theme.spacing(4),
    width: '100%',
    '@media print': {
      font: '13pt Poppins, Calibri, Georgia, "Times New Roman", Times, serif',
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
    maxWidth: '1200px',
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
      font: '13pt Poppins, Calibri, Georgia, "Times New Roman", Times, serif',
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
  footerTitle: {
    display: 'none',
    paddingBottom: 15,
    font: '13pt Poppins, Calibri, Georgia, "Times New Roman", Times, serif',
    lineHeight: 1.0,
    '@media print': {
      display: 'none',
    },
  },
  footerTitlePrint: {
    paddingBottom: 15,
    paddingLeft: 30,
    font: '13pt Poppins, Calibri, Georgia, "Times New Roman", Times, serif',
    lineHeight: 1.0,
    '@media print': {
      display: 'fixed',
      font: '9pt Poppins, Calibri, Georgia, "Times New Roman", Times, serif',
      paddingBottom: 25,
      paddingTop: 25,
      paddingLeft: 0,
    },
  },
  chart: {
    '@media print': {
      margin: '0 15% 0 15%',
    },
  },
  chartFull: {
    '@media print': {
      margin: '0 5% 0 5%',
    },
  },
  chartSmall: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media print': {
      width: '100%',
      margin: '0 30% 0 30%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  chartImage: {
    maxWidth: '100%',
    maxHeight: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  chartImageSmall: {
    maxWidth: '100%',
    maxHeight: 350,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  chartImageFull: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media print': {
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    '@media print': {
      display: 'none',
    },
  },
}));
