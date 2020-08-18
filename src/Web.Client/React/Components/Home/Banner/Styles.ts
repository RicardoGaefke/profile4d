// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core';

interface IStyles {
  main: {},
  title: {},
  btn: {},
}

// eslint-disable-next-line no-unused-vars
export default makeStyles((theme: Theme): IStyles => ({
  main: {
    minHeight: 400,
    backgroundPositionX: '50%',
    backgroundPositionY: '50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

    paddingTop: 100,

    '@media screen and (min-width: 1366px)': {
      backgroundImage: `url("/img/${(theme.palette.type === 'dark') ? 'space' : 'banner'}L.jpg")`,
    },

    '@media screen and (min-width: 768px) and (max-width: 1366px)': {
      backgroundImage: `url("/img/${(theme.palette.type === 'dark') ? 'space' : 'banner'}M.jpg")`,
    },

    '@media screen and (max-width: 768px)': {
      backgroundImage: `url("/img/${(theme.palette.type === 'dark') ? 'space' : 'banner'}S.jpg")`,
    },
  },
  title: {
    fontWeight: 'bold',
    textShadow: '3px 3px 4px lightgray',

    '@media screen and (max-width: 768px)': {
      fontSize: 50,
    },
  },
  btn: {
    marginTop: 50,
    color: (theme.palette.type === 'dark') ? theme.palette.common.white : theme.palette.common.black,
    fontWeight: 'bold',
    border: (theme.palette.type === 'dark') ? 'solid 3px white' : 'solid 3px black',
    float: 'right',
  },
}));
