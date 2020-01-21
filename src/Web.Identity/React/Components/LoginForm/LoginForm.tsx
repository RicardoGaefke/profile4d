import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { withSnackbar, WithSnackbarProps } from 'notistack';
import { withFormik } from 'formik';
import { Typography, Divider } from '@material-ui/core';
import useStyles from './Styles';
import setLanguage from './Language';
import LoginForm from './Form/Form';
import CreateUserLink from './CreateUserLink/CreateUserLink';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import InitialValues from './Form/Form.InitialValues';
import Validation from './Form/Form.Validation';
// eslint-disable-next-line no-unused-vars
import { ILoginForm } from '../../../../TypeScript/Interfaces/ILoginForm';
import myAxios from '../../Utils/MyAxios';
// eslint-disable-next-line no-unused-vars
import { IInitialContext } from '../../../../TypeScript/Interfaces/IInitialContext';

const MyForm = withFormik<WithTranslation & WithSnackbarProps, ILoginForm>({
  displayName: 'LoginForm',
  enableReinitialize: true,
  mapPropsToValues: (): ILoginForm => (InitialValues),
  validationSchema: Validation,
  handleSubmit: async (values, { setSubmitting, props }): Promise<void> => {
    const { enqueueSnackbar, t } = props;
    await myAxios(window.location.href).post<IInitialContext>('Identity/SignIn', {
      Email: values.Email,
      Password: values.Password,
      KeepConnected: values.KeepConnected,
    }).then((response): void => {
      const { data } = response;

      if (data.Success) {
        enqueueSnackbar(t('LoginForm:feedback.success'), {
          variant: 'success',
        });

        const UrlParams = new URLSearchParams(window.location.search);
        const MyUrl = UrlParams.get('ReturnUrl');

        if (MyUrl !== null) {
          window.location.href = MyUrl;
        }
      } else {
        enqueueSnackbar(t('LoginForm:feedback.failure'), {
          variant: 'error',
        });
      }
    }).catch((): void => {
      enqueueSnackbar(t('LoginForm:feedback.failure'), {
        variant: 'error',
      });
    });
    setSubmitting(false);
  },
})(LoginForm);

const Login = withTranslation()(withSnackbar(MyForm));

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    const classes = useStyles({});
    setLanguage();

    return (
      <div className={classes.main}>
        <Typography
          gutterBottom
          align="center"
          variant="h5"
        >
          {t('LoginForm:title')}
        </Typography>
        <Login />
        <ForgotPassword />
        <Divider className={classes.divider} />
        <CreateUserLink />
      </div>
    );
  },
);
