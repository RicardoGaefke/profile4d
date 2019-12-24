import React, { useEffect } from 'react';
import i18next from 'i18next';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  Radio, RadioGroup, FormControl, FormLabel, FormControlLabel, Divider,
} from '@material-ui/core';
import './Language';
import { useStateValue } from '../../../Initial/Context/StateProvider';
import styles from '../Styles';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    const [{ Theme, Language }, dispatch] = useStateValue();
    const classes = styles({});

    useEffect((): void => {
      if (!i18next.hasResourceBundle('PT', 'ThemeConfig')) {
        i18next.addResourceBundle('PT', 'ThemeConfig', LanguagePT);
      }
      if (!i18next.hasResourceBundle('ENG', 'ThemeConfig')) {
        i18next.addResourceBundle('ENG', 'ThemeConfig', LanguageENG);
      }
      i18next.changeLanguage(Language);

      // return type void != (): void... so as unknown as void
      return ((): void => {
        i18next.removeResourceBundle('PT', 'ThemeConfig');
        i18next.removeResourceBundle('ENG', 'ThemeConfig');
      }) as unknown as void;
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      dispatch({
        type: 'changeTheme',
        value: (event.target as HTMLInputElement).value,
      });
    };

    return (
      <>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            {t('ThemeConfig:title')}
          </FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={Theme} onChange={handleChange}>
            <FormControlLabel value="dark" control={<Radio />} label={t('ThemeConfig:dark')} />
            <FormControlLabel value="light" control={<Radio />} label={t('ThemeConfig:light')} />
          </RadioGroup>
        </FormControl>
        <Divider className={classes.divider} />
      </>
    );
  },
);
