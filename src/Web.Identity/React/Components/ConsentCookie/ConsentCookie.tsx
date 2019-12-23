import React, { useEffect } from 'react';
import i18next from 'i18next';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  SnackbarContent,
} from '@material-ui/core';
import { useStateValue } from '../../Initial/Context/StateProvider';
import useStyles from './Styles';
import ConsentMessage from './ConsentMessage';
import ConsentAction from './ConsentAction';
import './Language';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    const [{ Language }, dispatch] = useStateValue();
    const classes = useStyles({});

    useEffect((): void => {
      if (!i18next.hasResourceBundle('PT', 'ConsentCookie')) {
        i18next.addResourceBundle('PT', 'ConsentCookie', LanguagePT);
      }
      if (!i18next.hasResourceBundle('ENG', 'ConsentCookie')) {
        i18next.addResourceBundle('ENG', 'ConsentCookie', LanguageENG);
      }
      i18next.changeLanguage(Language);
      // return type void != (): void... so as unknown as void
      return ((): void => {
        i18next.removeResourceBundle('PT', 'ConsentCookie');
        i18next.removeResourceBundle('ENG', 'ConsentCookie');
      }) as unknown as void;
    }, []);

    const closeConsent = (): void => {
      const myRoot: HTMLElement = document.getElementById('root')!;
      document.cookie = myRoot.dataset.cookieString!;

      dispatch({
        type: 'changeConsent',
        value: false,
      });
    };

    return (
      <SnackbarContent
        className={classes.snackbar}
        message={<ConsentMessage message={t('ConsentCookie:text')} text={t('ConsentCookie:link.text')} title={t('ConsentCookie:link.label')} />}
        action={<ConsentAction text={t('ConsentCookie:btn.text')} title={t('ConsentCookie:btn.label')} close={closeConsent} />}
      />
    );
  },
);
