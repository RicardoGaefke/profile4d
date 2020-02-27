import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { withSnackbar, WithSnackbarProps } from 'notistack';
import { withFormik } from 'formik';
import { Typography } from '@material-ui/core';
import useStyles from '../Styles';
import setLanguage from '../Language';
import ImageFourStages from './Form/Form';
import Validation from './Form/Form.Validation';
// eslint-disable-next-line no-unused-vars
import { IStaticImageForm } from '../../../../../TypeScript/Interfaces/IStaticImageForm';
import myAxios from '../../../Utils/MyAxios';

interface IProps {
  myValues: IStaticImageForm
}

const MyImageFourStages = withFormik<WithTranslation & WithSnackbarProps & IProps, IStaticImageForm>({
  displayName: 'Static Content Image Four Stages',
  enableReinitialize: true,
  mapPropsToValues: (props: IProps):IStaticImageForm => props.myValues,
  validationSchema: Validation,
  handleSubmit: async (values, { setSubmitting, props }): Promise<void> => {
    const { enqueueSnackbar, t } = props;
    await myAxios(window.location.href).post<IStaticImageForm>('Image/ImageFourStagesEdit', {
      Mime: values.Mime,
      Alt_PT: values.Alt_PT,
      Alt_ENG: values.Alt_ENG,
      Src: values.Src,
    }).then((response): void => {
      const { data } = response;

      if (data.Success) {
        enqueueSnackbar(t('StaticImageFourStages:feedback.success'), {
          variant: 'success',
        });
      } else {
        enqueueSnackbar(t('StaticImageFourStages:feedback.failure'), {
          variant: 'error',
        });
      }
    }).catch((): void => {
      enqueueSnackbar(t('StaticImageFourStages:feedback.failure'), {
        variant: 'error',
      });
    });
    setSubmitting(false);
  },
})(ImageFourStages);

export const Login = withTranslation()(withSnackbar(MyImageFourStages));

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
          {t('StaticImageFourStages:title')}
        </Typography>
        <Login myValues={myValues} />
      </div>
    );
  },
);
