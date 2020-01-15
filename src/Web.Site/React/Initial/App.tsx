import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import { withTranslation, useTranslation } from 'react-i18next';
import { SnackbarProvider } from 'notistack';
import { useStateValue } from './Context/StateProvider';
import './i18n/language';
import myTheme from './Theme/Theme';
import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary';
import RootRouter from '../Router/Root';
import AppBar from '../Components/AppBar/AppBar';
import ConfigDrawer from '../Components/ConfigDrawer/Drawer';
import Footer from '../Components/Footer/Footer';
import useStyles from './Styles';
import MyConsentCookie from '../Components/ConsentCookie/ConsentCookie';

const MyApp = (): React.ReactElement<any> => {
  const [{ Theme, Language, ConsentCookie }] = useStateValue();
  const { i18n } = useTranslation();

  useEffect((): void => {
    i18n.changeLanguage(Language);
  }, [Language]);

  const classes = useStyles();

  return (
    <ThemeProvider theme={myTheme(Theme)}>
      <div className={classes.body}>
        <SnackbarProvider
          maxSnack={3}
          hideIconVariant={false}
          anchorOrigin={{
            horizontal: 'right',
            vertical: 'bottom',
          }}
          autoHideDuration={6000}
          dense
        >
          <AppBar />
          {(ConsentCookie) ? <MyConsentCookie /> : null}
          <div className={classes.main}>
            <ErrorBoundary>
              <RootRouter />
            </ErrorBoundary>
          </div>
          <Footer />
          <ConfigDrawer />
        </SnackbarProvider>
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default withTranslation()(MyApp);
