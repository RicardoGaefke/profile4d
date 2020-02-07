// eslint-disable-next-line no-unused-vars
import React from 'react';
import { withFormik } from 'formik';
// eslint-disable-next-line no-unused-vars
import { IStaticFirstPage } from '../../../../../../TypeScript/Interfaces/IStaticContent';
import initialValues from '../../FirstPage/Form/Form.InitialValues';
import Validation from './Form.Validation';
import MyForm from '../../FirstPage/Form/Form';
import useStyles from '../../FirstPage/Form/Form.Styles';

const SuperForm = withFormik({
  displayName: 'OriginalXAdapted',
  enableReinitialize: true,
  mapPropsToValues: (): IStaticFirstPage => (initialValues),
  validationSchema: Validation,
  handleSubmit: (values: IStaticFirstPage, { resetForm, setSubmitting }): void => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(values));
    setSubmitting(false);
    resetForm();
  },
})(MyForm);

export default (): React.ReactElement<HTMLElement> => {
  const classes = useStyles({});

  return (
    <div className={classes.form}>
      <SuperForm />
    </div>
  );
};
