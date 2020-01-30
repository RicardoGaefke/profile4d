// eslint-disable-next-line no-unused-vars
import React from 'react';
import { withFormik } from 'formik';
// eslint-disable-next-line no-unused-vars
import { IStaticFirstPage } from '../../../../../../../TypeScript/Interfaces/IStaticContent';
import initialValues from './InitialValues';
import MyForm from '../Form';
import useStyles from './Context.Styles';

const SuperForm = withFormik({
  displayName: 'Form',
  enableReinitialize: true,
  mapPropsToValues: (): IStaticFirstPage => (initialValues),
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