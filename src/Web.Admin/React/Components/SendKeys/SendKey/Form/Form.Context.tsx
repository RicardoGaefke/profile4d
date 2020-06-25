// eslint-disable-next-line no-unused-vars
import React from 'react';
import { withFormik } from 'formik';
// eslint-disable-next-line no-unused-vars
import { WithTranslation, withTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { WithSnackbarProps, withSnackbar } from 'notistack';
import setLanguage from '../Language';
// eslint-disable-next-line no-unused-vars
import initialValues, { IForm } from './Form.InitialValues';
import Validation from './Form.Validation';
import MyForm from './Form';
import useStyles from '../../../../Utils/Form.Styles';

const SuperForm = withFormik<WithTranslation & WithSnackbarProps, IForm>({
  displayName: 'DefaultForm',
  enableReinitialize: true,
  mapPropsToValues: (): IForm => (initialValues),
  validationSchema: Validation,
  handleSubmit: async (values: IForm, { resetForm, setSubmitting, props }): Promise<void> => {
    const { enqueueSnackbar, t } = props;
    enqueueSnackbar(t('SendKey:feedback.success'), {
      variant: 'success',
    });
    setSubmitting(false);
    resetForm();
  },
})(MyForm);

const DefaultForm = withTranslation()(withSnackbar(SuperForm));

export default withTranslation()(
  (): React.ReactElement<WithTranslation> => {
    const classes = useStyles({});
    setLanguage();

    return (
      <div className={classes.form}>
        <DefaultForm />
      </div>
    );
  },
);
