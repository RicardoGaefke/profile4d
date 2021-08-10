import { createTheme, Theme } from '@material-ui/core/styles';

const MyTheme = (t: string = 'dark'): Theme => {
  const myThemeDark = createTheme({
    shape: {
      borderRadius: 0,
    },
    palette: {
      type: 'dark',
    },
  });

  const myThemeLight = createTheme({
    shape: {
      borderRadius: 0,
    },
    palette: {
      type: 'light',
    },
  });

  return (t === 'light') ? myThemeLight : myThemeDark;
};

export default MyTheme;
