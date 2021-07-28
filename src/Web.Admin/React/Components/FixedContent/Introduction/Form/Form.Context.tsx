// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { withFormik } from 'formik';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { WithTranslation, withTranslation } from 'react-i18next';
import setLanguage from '../Language';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IStaticIntroduction } from '../../../../../../TypeScript/Interfaces/IStaticContent';
import initialValues from './Form.InitialValues';
import Validation from './Form.Validation';
import MyForm from './Form';
import useStyles from './Form.Styles';

const SuperForm = withFormik<WithTranslation, IStaticIntroduction>({
  displayName: 'DefaultForm',
  enableReinitialize: true,
  mapPropsToValues: (): IStaticIntroduction => (initialValues),
  validationSchema: Validation,
  handleSubmit: (values: IStaticIntroduction, { resetForm, setSubmitting }): void => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(values));
    setSubmitting(false);
    resetForm();
  },
})(MyForm);

const DefaultForm = withTranslation()(SuperForm);

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
