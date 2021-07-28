import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RouteComponentProps, withRouter } from 'react-router';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import { withFormik } from 'formik';
import { Typography, Divider } from '@material-ui/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { WithSnackbarProps, withSnackbar } from 'notistack';
import useStyles from './Styles';
import setLanguage from './Language';
import CreateUserForm from './Form/Form';
import ReturnLink from './ReturnLink/ReturnLink';
import InitialValues from './Form/Form.InitialValues';
import Validation from './Form/Form.Validation';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ICreateUser } from '../../../../TypeScript/Interfaces/ICreateUser';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IBasicReturn } from '../../../../TypeScript/Interfaces/IBasicReturn';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IContext, withContext } from '../../Initial/Context/StateProvider';
import myAxios from '../../Utils/MyAxios';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IInitialContext } from '../../../../TypeScript/Interfaces/IInitialContext';

const MyForm = withFormik<WithTranslation & WithSnackbarProps & RouteComponentProps & IContext, ICreateUser>({
  displayName: 'CreateUser',
  enableReinitialize: true,
  mapPropsToValues: (): ICreateUser => (InitialValues),
  validationSchema: Validation,
  handleSubmit: async (values, { setSubmitting, props }): Promise<void> => {
    const { enqueueSnackbar, t, history } = props;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [ctx, dispatch] = props.context;
    await myAxios(window.location.href).post<IBasicReturn>('Identity/CreateUser', {
      Name: values.Name,
      Email: values.Email,
      Password: values.Password,
    }).then((response): void => {
      const { data } = response;

      if (data.Success) {
        enqueueSnackbar(t('CreateUserForm:feedback.success'), {
          variant: 'success',
        });
      } else {
        // eslint-disable-next-line no-lonely-if
        if (data.Code === '50500') {
          enqueueSnackbar(t('CreateUserForm:blockedEmail.text'), {
            variant: 'error',
          });
        } else {
          enqueueSnackbar(t('CreateUserForm:feedback.failure'), {
            variant: 'error',
          });
        }
        setSubmitting(false);
      }
    }).then(async (): Promise<void> => {
      await myAxios(window.location.href).post<IInitialContext>('Identity/SignIn', {
        Email: values.Email,
        Password: values.Password,
        KeepConnected: false,
      }).then((loginResponse): void => {
        const { data } = loginResponse;

        if (data.Success) {
          dispatch({
            type: 'changeName',
            value: data.Name,
          });

          dispatch({
            type: 'changeEmail',
            value: data.Email,
          });

          dispatch({
            type: 'changeAuth',
            value: data.Success,
          });

          history.push('/');
        } else {
          enqueueSnackbar(t('CreateUserForm:feedback.failure'), {
            variant: 'error',
          });
          setSubmitting(false);
        }
      });
    })
      .catch((): void => {
        enqueueSnackbar(t('CreateUserForm:feedback.failure'), {
          variant: 'error',
        });
        setSubmitting(false);
      });
  },
})(CreateUserForm);

const CreateUser = withTranslation()(withContext(withSnackbar(withRouter(MyForm))));

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
          {t('CreateUserForm:title')}
        </Typography>
        <CreateUser />
        <Divider className={classes.divider} />
        <ReturnLink />
      </div>
    );
  },
);
