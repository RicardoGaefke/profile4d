import React, { useEffect } from 'react';
import i18next from 'i18next';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import { Drawer, Typography, Divider } from '@material-ui/core';
import { useStateValue } from '../../Initial/Context/StateProvider';
import Styles from './Styles';
import ConfigTheme from './ChangeTheme/Theme';
import ConfigLanguage from './ChangeLanguage/Language';
import Button from './SaveButton/Button';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    const [{ Config, Language }, dispatch] = useStateValue();
    const classes = Styles({});

    useEffect((): void => {
      i18next.changeLanguage(Language);

      i18next.addResourceBundle('PT', 'DrawerConfig', LanguagePT);
      i18next.addResourceBundle('ENG', 'DrawerConfig', LanguageENG);
      // return type void != (): void... so as unknown as void
      return ((): void => {
        i18next.removeResourceBundle('PT', 'DrawerConfig');
        i18next.removeResourceBundle('ENG', 'DrawerConfig');
      }) as unknown as void;
    }, []);

    const toggle = (): void => {
      dispatch({
        type: 'changeConfig',
        value: !Config,
      });
    };

    return (
      <Drawer
        open={Config}
        anchor="right"
        onClose={toggle}
      >
        <div className={classes.root}>
          <Typography variant="h6">
            {t('DrawerConfig:title')}
          </Typography>
          <Divider className={classes.divider} />
          <ConfigTheme />
          <ConfigLanguage />
          <Button
            toggle={toggle}
          />
        </div>
      </Drawer>
    );
  },
);
