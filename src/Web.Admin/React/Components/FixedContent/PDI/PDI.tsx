import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { withSnackbar, WithSnackbarProps } from 'notistack';
import { withFormik } from 'formik';
import { Typography } from '@material-ui/core';
import useStyles from './Styles';
import setLanguage from './Language';
import PDI from '../FirstPage/Form/Form';
import Validation from '../FirstPage/Form/Form.Validation';
// eslint-disable-next-line no-unused-vars
import { IStaticFirstPage } from '../../../../../TypeScript/Interfaces/IStaticContent';
import myAxios from '../../../Utils/MyAxios';

interface IProps {
  myValues: IStaticFirstPage
}

export const MyPDI = withFormik<WithTranslation & WithSnackbarProps & IProps, IStaticFirstPage>({
  displayName: 'Static Content Individual Development Plan',
  enableReinitialize: true,
  mapPropsToValues: (props: IProps):IStaticFirstPage => props.myValues,
  validationSchema: Validation,
  handleSubmit: async (values, { setSubmitting, props }): Promise<void> => {
    const { enqueueSnackbar, t } = props;
    await myAxios(window.location.href).post<IStaticFirstPage>('StaticContent/PDIEdit', {
      Title_PT: values.Title_PT,
      Title_ENG: values.Title_ENG,
      Text_PT: values.Text_PT,
      Text_ENG: values.Text_ENG,
    }).then((response): void => {
      const { data } = response;

      if (data.Success) {
        enqueueSnackbar(t('StaticPDI:feedback.success'), {
          variant: 'success',
        });
      } else {
        enqueueSnackbar(t('StaticPDI:feedback.failure'), {
          variant: 'error',
        });
      }
    }).catch((): void => {
      enqueueSnackbar(t('StaticPDI:feedback.failure'), {
        variant: 'error',
      });
    });
    setSubmitting(false);
  },
})(PDI);

export const Login = withTranslation()(withSnackbar(MyPDI));

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
          {t('StaticFirstPage:title')}
        </Typography>
        <Login myValues={myValues} />
      </div>
    );
  },
);
