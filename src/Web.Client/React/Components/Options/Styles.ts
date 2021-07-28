// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { makeStyles, Theme } from '@material-ui/core';

interface IStyles {
  main: {},
  title: {},
  form: {},
  btnGrid: {},
  button: {},
  helperText: {},
  radio: {},
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default makeStyles((theme: Theme): IStyles => ({
  main: {
    minHeight: 200,
    padding: 25,
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginBottom: 20,
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    '@media(max-width: 767px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  btnGrid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    marginLeft: 10,
  },
  helperText: {
    marginTop: 0,
    marginBottom: 5,
  },
  radio: {
    padding: 10,
    '@media(max-width: 767px)': {
      padding: 0,
    },
    '&:nth-child(1)': {
      '&': {
        flexDirection: 'row',
      },
      '@media(min-width: 768px)': {
        '& svg': {
          fontSize: '2rem',
        },
        '&': {
          flexDirection: 'column',
        },
      },
    },
    '&:nth-child(2)': {
      '&': {
        flexDirection: 'row',
      },
      '@media(min-width: 768px)': {
        '& svg': {
          fontSize: '1.5rem',
        },
        '&': {
          flexDirection: 'column',
        },
      },
    },
    '&:nth-child(3)': {
      '&': {
        flexDirection: 'row',
      },
      '@media(min-width: 768px)': {
        '& svg': {
          fontSize: '1rem',
        },
        '&': {
          flexDirection: 'column',
        },
      },
    },
    '&:nth-child(4)': {
      '&': {
        flexDirection: 'row',
      },
      '@media(min-width: 768px)': {
        '& svg': {
          fontSize: '1.5rem',
        },
        '&': {
          flexDirection: 'column',
        },
      },
    },
    '&:nth-child(5)': {
      '&': {
        flexDirection: 'row',
      },
      '@media(min-width: 768px)': {
        '& svg': {
          fontSize: '2rem',
        },
        '&': {
          flexDirection: 'column',
        },
      },
    },
  },
}));
