// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { withFormik } from 'formik';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { WithTranslation, withTranslation } from 'react-i18next';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { WithSnackbarProps, withSnackbar } from 'notistack';
import setLanguage from '../Language';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import initialValues, { IForm } from './Form.InitialValues';
import Validation from './Form.Validation';
import MyForm from './Form';
import useStyles from '../../../../Utils/Form.Styles';
import myAxios from '../../../../Utils/MyAxios';

const SuperForm = withFormik<WithTranslation & WithSnackbarProps, IForm>({
  displayName: 'DefaultForm',
  enableReinitialize: true,
  mapPropsToValues: (): IForm => (initialValues),
  validationSchema: Validation,
  handleSubmit: async (values: IForm, { resetForm, setSubmitting, props }): Promise<void> => {
    const { enqueueSnackbar, t } = props;

    await myAxios(window.location.href).post<IForm>('SendKey/Transfer', {
      Email: values.Email,
      Keys: values.Keys,
    }).then((response): void => {
      const { data } = response;

      if (data.Success) {
        enqueueSnackbar(t('TransferKeys:feedback.success'), {
          variant: 'success',
        });
        resetForm();
      } else {
        enqueueSnackbar(t('TransferKeys:feedback.failure'), {
          variant: 'error',
        });
      }
      setSubmitting(false);
    }).catch((): void => {
      enqueueSnackbar(t('TransferKeys:feedback.failure'), {
        variant: 'error',
      });
      setSubmitting(false);
    });
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
