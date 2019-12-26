import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import { withFormik } from 'formik';
import { Typography, Divider } from '@material-ui/core';
import useStyles from './Styles';
import setLanguage from './Language';
import LoginForm from './Form/Form';
import CreateUserLink from './CreateUserLink/CreateUserLink';
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
        <Divider className={classes.divider} />
        <CreateUserLink />
      </div>
    );
  },
);
