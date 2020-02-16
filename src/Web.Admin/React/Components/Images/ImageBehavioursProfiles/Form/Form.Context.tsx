import React from 'react';
import { withFormik } from 'formik';
// eslint-disable-next-line no-unused-vars
import { WithTranslation, withTranslation } from 'react-i18next';
import setLanguage from '../../ImageForm/Form/Language';
// eslint-disable-next-line no-unused-vars
import { IStaticImageForm } from '../../../../../../TypeScript/Interfaces/IStaticImageForm';
import Validation from '../../ImageForm/Form/Form.Validation';
import MyForm from './Form';
import useStyles from '../../../../Utils/Form.Styles';
import initialValues from '../../ImageForm/Form/Form.initialValues';

const SuperForm = withFormik<WithTranslation, IStaticImageForm>({
  displayName: 'ImageBehavioursProfiles',
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

const ImageBehavioursProfiles = withTranslation()(SuperForm);

export default withTranslation()(
  (): React.ReactElement<WithTranslation> => {
    const classes = useStyles({});
    setLanguage();

    return (
      <div className={classes.form}>
        <ImageBehavioursProfiles />
      </div>
    );
  },
);
