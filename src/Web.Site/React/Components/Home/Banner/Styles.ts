// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core';

interface IStyles {
  main: {},
  title: {},
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
      backgroundImage: 'url("/img/bannerL.jpg")',
    },

    '@media screen and (min-width: 768px) and (max-width: 1366px)': {
      backgroundImage: 'url("/img/bannerM.jpg")',
    },

    '@media screen and (max-width: 768px)': {
      backgroundImage: 'url("/img/bannerS.jpg")',
    },
  },
  title: {
    fontWeight: 'bold',
  },
}));
