import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withSnackbar, WithSnackbarProps } from 'notistack';
import { withFormik } from 'formik';
import { Typography } from '@material-ui/core';
import useStyles from './Styles';
import setLanguage from './Language';
import MainVirtueEssence from '../Introduction/Form/Form';
import Validation from '../Introduction/Form/Form.Validation';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IStaticIntroduction } from '../../../../../TypeScript/Interfaces/IStaticContent';
import myAxios from '../../../Utils/MyAxios';

interface IProps {
  myValues: IStaticIntroduction
}

export const MyMainVirtueEssence = withFormik<WithTranslation & WithSnackbarProps & IProps, IStaticIntroduction>({
  displayName: 'Static Content Main Virtue Essence',
  enableReinitialize: true,
  mapPropsToValues: (props: IProps):IStaticIntroduction => props.myValues,
  validationSchema: Validation,
  handleSubmit: async (values, { setSubmitting, props }): Promise<void> => {
    const { enqueueSnackbar, t } = props;
    await myAxios(window.location.href).post<IStaticIntroduction>('StaticContent/MainVirtueEssenceEdit', {
      Title_PT: values.Title_PT,
      Title_ENG: values.Title_ENG,
      Text_PT: values.Text_PT,
      Text_ENG: values.Text_ENG,
    }).then((response): void => {
      const { data } = response;

      if (data.Success) {
        enqueueSnackbar(t('StaticMainVirtueEssence:feedback.success'), {
          variant: 'success',
        });
      } else {
        enqueueSnackbar(t('StaticMainVirtueEssence:feedback.failure'), {
          variant: 'error',
        });
      }
    }).catch((): void => {
      enqueueSnackbar(t('StaticMainVirtueEssence:feedback.failure'), {
        variant: 'error',
      });
    });
    setSubmitting(false);
  },
})(MainVirtueEssence);

export const Login = withTranslation()(withSnackbar(MyMainVirtueEssence));

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
          {t('StaticMainVirtueEssence:title')}
        </Typography>
        <Login myValues={myValues} />
      </div>
    );
  },
);
