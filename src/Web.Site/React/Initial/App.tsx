import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useStateValue } from './Context/StateProvider';
import myTheme from './Theme/Theme';
import RootRouter from '../Router/Root';
import AppBar from '../Components/AppBar/AppBar';

const MyApp = (): React.ReactElement<any> => {
  const [{ Theme }] = useStateValue();

  return (
    <ThemeProvider theme={myTheme(Theme)}>
      <AppBar />
      <RootRouter />
      <CssBaseline />
    </ThemeProvider>
  );
};

export default MyApp;
