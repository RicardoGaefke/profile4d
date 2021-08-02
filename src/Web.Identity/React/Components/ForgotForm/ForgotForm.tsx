import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { WithSnackbarProps, withSnackbar } from 'notistack';
// eslint-disable-next-line no-unused-vars
import { RouteComponentProps, withRouter } from 'react-router';
import { withFormik } from 'formik';
import { Typography, Divider } from '@material-ui/core';
import useStyles from './Styles';
import setLanguage from './Language';
import ForgotForm from './Form/Form';
import ReturnOrCreate from './ReturnOrCreate/ReturnOrCreate';
import InitialValues from './Form/Form.InitialValues';
import Validation from './Form/Form.Validation';
// eslint-disable-next-line no-unused-vars
import { IForgotForm } from '../../../../TypeScript/Interfaces/IForgotForm';
// eslint-disable-next-line no-unused-vars
import { IBasicReturn } from '../../../../TypeScript/Interfaces/IBasicReturn';
import myAxios from '../../Utils/MyAxios';

const MyForm = withFormik<WithTranslation & WithSnackbarProps & RouteComponentProps, IForgotForm>({
  displayName: 'ForgotForm',
  enableReinitialize: true,
  mapPropsToValues: (): IForgotForm => (InitialValues),
  validationSchema: Validation,
  handleSubmit: async (values, { setSubmitting, props }): Promise<void> => {
    const { enqueueSnackbar, t, history } = props;
    await myAxios(window.location.href).post<IBasicReturn>('Identity/ForgotPassword', {
      Email: values.Email,
    }).then((response): void => {
      const { data } = response;

      if (data.Success) {
        enqueueSnackbar(t('ForgotForm:feedback.success'), {
          variant: 'success',
        });

        history.push('/');
      } else {
        enqueueSnackbar(t('ForgotForm:feedback.failure'), {
          variant: 'error',
        });
        setSubmitting(false);
      }
    }).catch((): void => {
      enqueueSnackbar(t('ForgotForm:feedback.failure'), {
        variant: 'error',
      });
      setSubmitting(false);
    });
  },
})(ForgotForm);

const Forgot = withTranslation()(withSnackbar(withRouter(MyForm)));

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
          {t('ForgotForm:title')}
        </Typography>
        <Forgot />
        <Divider className={classes.divider} />
        <ReturnOrCreate />
      </div>
    );
  },
);
