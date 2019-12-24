import React, { useEffect } from 'react';
import i18next from 'i18next';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import { withFormik } from 'formik';
import { Typography } from '@material-ui/core';
import { useStateValue } from '../../Initial/Context/StateProvider';
import useStyles from './Styles';
import './Language';
import LoginForm from './Form/Form';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';
import InitialValues from './Form/Form.InitialValues';
import Validation from './Form/Form.Validation';
// eslint-disable-next-line no-unused-vars
import { ILoginForm } from '../../../../TypeScript/Interfaces/ILoginForm';

const MyForm = withFormik<WithTranslation, ILoginForm>({
  displayName: 'LoginForm',
  enableReinitialize: true,
  mapPropsToValues: (): ILoginForm => (InitialValues),
  validationSchema: Validation,
  handleSubmit: (values, { setSubmitting }): void => {
    setSubmitting(false);
  },
})(LoginForm);

const Login = withTranslation()(MyForm);

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    const [{ Language }] = useStateValue();
    const classes = useStyles({});

    useEffect((): void => {
      if (!i18next.hasResourceBundle('PT', 'LoginForm')) {
        i18next.addResourceBundle('PT', 'LoginForm', LanguagePT);
      }
      if (!i18next.hasResourceBundle('ENG', 'LoginForm')) {
        i18next.addResourceBundle('ENG', 'LoginForm', LanguageENG);
      }
      i18next.changeLanguage(Language);
      // return type void != (): void... so as unknown as void
      return ((): void => {
        i18next.removeResourceBundle('PT', 'LoginForm');
        i18next.removeResourceBundle('ENG', 'LoginForm');
      }) as unknown as void;
    }, []);

    return (
      <div className={classes.main}>
        <Typography
          align="center"
          variant="h6"
        >
          {t('LoginForm:button.text')}
        </Typography>
        <Login />
      </div>
    );
  },
);
