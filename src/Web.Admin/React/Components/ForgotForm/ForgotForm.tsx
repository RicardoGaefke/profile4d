import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
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

const MyForm = withFormik<WithTranslation, IForgotForm>({
  displayName: 'ForgotForm',
  enableReinitialize: true,
  mapPropsToValues: (): IForgotForm => (InitialValues),
  validationSchema: Validation,
  handleSubmit: (values, { setSubmitting }): void => {
    setSubmitting(false);
  },
})(ForgotForm);

const Forgot = withTranslation()(MyForm);

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
