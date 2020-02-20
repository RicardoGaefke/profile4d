import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withRouter, RouteComponentProps } from 'react-router';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { withSnackbar, WithSnackbarProps } from 'notistack';
import { withFormik } from 'formik';
import { Typography } from '@material-ui/core';
import useStyles from '../../../Utils/Form.Styles';
import setLanguage from './Language';
import LoginForm from './Form/Form';
import InitialValues from './Form/Form.InitialValues';
import Validation from './Form/Form.Validation';
// eslint-disable-next-line no-unused-vars
import { ICreateUser } from '../../../../../TypeScript/Interfaces/ICreateUser';
// eslint-disable-next-line no-unused-vars
import { IBasicReturn } from '../../../../../TypeScript/Interfaces/IBasicReturn';
import myAxios from '../../../Utils/MyAxios';

const MyForm = withFormik<WithTranslation & WithSnackbarProps & RouteComponentProps, ICreateUser>({
  displayName: 'LoginForm',
  enableReinitialize: true,
  mapPropsToValues: (): ICreateUser => (InitialValues),
  validationSchema: Validation,
  handleSubmit: async (values, { setSubmitting, props }): Promise<void> => {
    const { enqueueSnackbar, t, history } = props;
    await myAxios(window.location.href).post<IBasicReturn>('Identity/ChangeName', {
      Email: values.Email,
      Password: values.Password,
    }).then((response): void => {
      const { data } = response;

      if (data.Success) {
        enqueueSnackbar(t('ChangeNameForm:feedback.success'), {
          variant: 'success',
        });

        history.push('/');
      } else {
        enqueueSnackbar(t('ChangeNameForm:feedback.failure'), {
          variant: 'error',
        });
      }
    }).catch((): void => {
      enqueueSnackbar(t('ChangeNameForm:feedback.failure'), {
        variant: 'error',
      });
    });
    setSubmitting(false);
  },
})(LoginForm);

const Login = withTranslation()(withSnackbar(withRouter(MyForm)));

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
          {t('ChangeNameForm:title')}
        </Typography>
        <Login />
      </div>
    );
  },
);
