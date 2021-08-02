import React from 'react';
import { withFormik } from 'formik';
// eslint-disable-next-line no-unused-vars
import { WithTranslation, withTranslation } from 'react-i18next';
import setLanguage from './Language';
// eslint-disable-next-line no-unused-vars
import { IStaticImageForm } from '../../../../../../TypeScript/Interfaces/IStaticImageForm';
import Validation from './Form.Validation';
import MyForm from './Form';
import useStyles from '../../../../Utils/Form.Styles';
import initialValues from './Form.initialValues';

const SuperForm = withFormik<WithTranslation, IStaticImageForm>({
  displayName: 'ImageForm',
  enableReinitialize: true,
  mapPropsToValues: (): IStaticImageForm => (initialValues),
  validationSchema: Validation,
  handleSubmit: (values: IStaticImageForm, { resetForm, setSubmitting }): void => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(values));
    setSubmitting(false);
    resetForm();
  },
})(MyForm);

const ImageForm = withTranslation()(SuperForm);

export default withTranslation()(
  (): React.ReactElement<WithTranslation> => {
    const classes = useStyles({});
    setLanguage();

    return (
      <div className={classes.form}>
        <ImageForm />
      </div>
    );
  },
);
