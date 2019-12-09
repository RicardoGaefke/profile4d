import React, { useEffect } from 'react';
import i18next from 'i18next';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  Radio, RadioGroup, FormControl, FormLabel, FormControlLabel, Divider,
} from '@material-ui/core';
import { useStateValue } from '../../../Initial/Context/StateProvider';
import styles from '../Styles';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    const [{ Language }, dispatch] = useStateValue();
    const classes = styles({});

    useEffect((): void => {
      i18next.changeLanguage(Language);

      i18next.addResourceBundle('PT', 'LanguageConfig', LanguagePT);
      i18next.addResourceBundle('ENG', 'LanguageConfig', LanguageENG);
      // return type void != (): void... so as unknown as void
      return ((): void => {
        i18next.removeResourceBundle('PT', 'LanguageConfig');
        i18next.removeResourceBundle('ENG', 'LanguageConfig');
      }) as unknown as void;
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      dispatch({
        type: 'changeLanguage',
        value: (event.target as HTMLInputElement).value,
      });
    };

    return (
      <>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            {t('LanguageConfig:title')}
          </FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={Language} onChange={handleChange}>
            <FormControlLabel value="PT" control={<Radio />} label="Português" />
            <FormControlLabel value="ENG" control={<Radio />} label="English" />
          </RadioGroup>
        </FormControl>
        <Divider className={classes.divider} />
      </>
    );
  },
);
