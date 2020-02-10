import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { withSnackbar, WithSnackbarProps } from 'notistack';
import { withFormik } from 'formik';
import { Typography } from '@material-ui/core';
import useStyles from '../Styles';
import setLanguage from '../Language';
import ImageForm from './Form/Form';
import Validation from './Form/Form.Validation';
// eslint-disable-next-line no-unused-vars
import { IStaticImageForm } from '../../../../../TypeScript/Interfaces/IStaticImageForm';
import myAxios from '../../../Utils/MyAxios';

interface IProps {
  myValues: IStaticImageForm
}

const MyImageForm = withFormik<WithTranslation & WithSnackbarProps & IProps, IStaticImageForm>({
  displayName: 'Static Content Image Form',
  enableReinitialize: true,
  mapPropsToValues: (props: IProps):IStaticImageForm => props.myValues,
  validationSchema: Validation,
  handleSubmit: async (values, { setSubmitting, props }): Promise<void> => {
    const { enqueueSnackbar, t } = props;
    await myAxios(window.location.href).post<IStaticImageForm>('StaticContent/ImageFormEdit', {
      Text_PT: values.Text_PT,
      Text_ENG: values.Text_ENG,
    }).then((response): void => {
      const { data } = response;

      if (data.Success) {
        enqueueSnackbar(t('StaticImageForm:feedback.success'), {
          variant: 'success',
        });
      } else {
        enqueueSnackbar(t('StaticImageForm:feedback.failure'), {
          variant: 'error',
        });
      }
    }).catch((): void => {
      enqueueSnackbar(t('StaticImageForm:feedback.failure'), {
        variant: 'error',
      });
    });
    setSubmitting(false);
  },
})(ImageForm);

export const Login = withTranslation()(withSnackbar(MyImageForm));

export default withTranslation()(
  (props: WithTranslation & IProps): React.ReactElement<WithTranslation & IProps> => {
    const { t, myValues } = props;
    const classes = useStyles({});
    setLanguage();

    return (
      <div className={classes.main}>
        <Typography
          gutterBottom
          align="center"
          variant="h5"
        >
          {t('StaticImageForm:title')}
        </Typography>
        <Login myValues={myValues} />
      </div>
    );
  },
);
