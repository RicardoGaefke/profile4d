import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withRouter, RouteComponentProps } from 'react-router';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withSnackbar, WithSnackbarProps } from 'notistack';
import { withFormik } from 'formik';
import { Typography } from '@material-ui/core';
import useStyles from '../../../Utils/Form.Styles';
import setLanguage from './Language';
import LoginForm from './Form/Form';
import InitialValues from './Form/Form.InitialValues';
import Validation from './Form/Form.Validation';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ICreateUser } from '../../../../../TypeScript/Interfaces/ICreateUser';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IBasicReturn } from '../../../../../TypeScript/Interfaces/IBasicReturn';
import myAxios from '../../../Utils/MyAxios';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IInitialContext } from '../../../../../TypeScript/Interfaces/IInitialContext';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withContext, IContext } from '../../../Initial/Context/StateProvider';

const MyForm = withFormik<WithTranslation & WithSnackbarProps & RouteComponentProps & IContext, ICreateUser>({
  displayName: 'ChangeEmailForm',
  enableReinitialize: true,
  mapPropsToValues: (): ICreateUser => (InitialValues),
  validationSchema: Validation,
  handleSubmit: async (values, { setSubmitting, props }): Promise<void> => {
    const { enqueueSnackbar, t, history } = props;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [ctx, dispatch] = props.context;
    await myAxios(window.location.href).post<IBasicReturn>('Identity/ChangeEmail', {
      Email: values.Email,
      ConfirmEmail: values.ConfirmEmail,
      Password: values.Password,
    }).then((response): void => {
      const { data } = response;

      if (data.Success) {
        enqueueSnackbar(t('ChangeEmailForm:feedback.success'), {
          variant: 'success',
        });

        dispatch({
          type: 'changeEmail',
          value: values.Email,
        });

        dispatch({
          type: 'changeAuth',
          value: false,
        });

        history.push('/');
      } else {
        // eslint-disable-next-line no-lonely-if
        if (data.Code === '50500') {
          enqueueSnackbar(t('ChangeEmailForm:blockedEmail.text'), {
            variant: 'error',
          });
        } else {
          enqueueSnackbar(t('ChangeEmailForm:feedback.failure'), {
            variant: 'error',
          });
        }
        setSubmitting(false);
      }
    }).catch((): void => {
      enqueueSnackbar(t('ChangeEmailForm:feedback.failure'), {
        variant: 'error',
      });
      setSubmitting(false);
    });
  },
})(LoginForm);

const Login = withTranslation()(withContext(withSnackbar(withRouter(MyForm))));

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
          {t('ChangeEmailForm:title')}
        </Typography>
        <Login />
      </div>
    );
  },
);
