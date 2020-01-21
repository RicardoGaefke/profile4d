import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import { withFormik } from 'formik';
import { Typography, Divider } from '@material-ui/core';
import useStyles from './Styles';
import setLanguage from './Language';
import CreateUserForm from './Form/Form';
import ReturnLink from './ReturnLink/ReturnLink';
import InitialValues from './Form/Form.InitialValues';
import Validation from './Form/Form.Validation';
// eslint-disable-next-line no-unused-vars
import { ICreateUser } from '../../../../TypeScript/Interfaces/ICreateUser';

const MyForm = withFormik<WithTranslation, ICreateUser>({
  displayName: 'CreateUser',
  enableReinitialize: true,
  mapPropsToValues: (): ICreateUser => (InitialValues),
  validationSchema: Validation,
  handleSubmit: (values, { setSubmitting }): void => {
    setSubmitting(false);
  },
})(CreateUserForm);

const CreateUser = withTranslation()(MyForm);

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
