import React, { useEffect } from 'react';
import '../i18n/language';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withTranslation, useTranslation } from 'react-i18next';
import { SnackbarProvider } from 'notistack';
import { useStateValue } from '../Context/StateProvider';

import myTheme from './Theme';
import AppBar from '../../Components/AppBar/AppBar';
import ConfigDrawer from '../../Components/ConfigDrawer/Drawer';
import Footer from '../../Components/Footer/Footer';
import useStyles from '../Styles';

const MyApp = (props: React.PropsWithChildren<any>): React.ReactElement<any> => {
  const [{ Theme, Language }] = useStateValue();
  const { i18n } = useTranslation();
  const { children } = props;

  useEffect((): void => {
    i18n.changeLanguage(Language);
  }, [Language]);

  const classes = useStyles({});

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
          <div className={classes.main}>
            {children}
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
