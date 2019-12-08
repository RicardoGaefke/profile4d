import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import { withTranslation, useTranslation } from 'react-i18next';
import { useStateValue } from './Context/StateProvider';
import './i18n/language';
import myTheme from './Theme/Theme';
import RootRouter from '../Router/Root';
import AppBar from '../Components/AppBar/AppBar';
import ConfigDrawer from '../Components/ConfigDrawer/Drawer';
import Footer from '../Components/Footer/Footer';

const MyApp = (): React.ReactElement<any> => {
  const [{ Theme, Language }] = useStateValue();
  const { i18n } = useTranslation();

  useEffect((): void => {
    i18n.changeLanguage(Language);
  }, [Language]);

  return (
    <ThemeProvider theme={myTheme(Theme)}>
      <AppBar />
      <RootRouter />
      <Footer />
      <ConfigDrawer />
      <CssBaseline />
    </ThemeProvider>
  );
};

export default withTranslation()(MyApp);
