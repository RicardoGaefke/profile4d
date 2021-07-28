import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withRouter, RouteComponentProps } from 'react-router';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withSnackbar, WithSnackbarProps } from 'notistack';
import { withFormik } from 'formik';
import { Typography } from '@material-ui/core';
import useStyles from '../../../../Utils/Form.Styles';
import setLanguage from '../Language';
import setLanguageForm from '../../Language';
import Form from '../../Form/Form';
import Validation from '../../Form/Form.Validation';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDynamicContent } from '../../../../../../TypeScript/Interfaces/IDynamicContent';
import myAxios from '../../../../Utils/MyAxios';

interface IProps {
  myValues: IDynamicContent
}

const MyQuestion = withFormik<WithTranslation & WithSnackbarProps & RouteComponentProps & IProps, IDynamicContent>({
  displayName: 'Dynamic Content Edit Question',
  enableReinitialize: true,
  mapPropsToValues: (props: IProps): IDynamicContent => props.myValues,
  validationSchema: Validation,
  handleSubmit: async (values, { setSubmitting, props }): Promise<void> => {
    const { enqueueSnackbar, t, history } = props;
    // alterar o webservice apenas, não a função Edit                ▼
    await myAxios(window.location.href).post<IDynamicContent>('DyObservationSeven/Edit', {
      Title_PT: values.Title_PT,
      Title_ENG: values.Title_ENG,
      Text_PT: values.Text_PT,
      Text_ENG: values.Text_ENG,
      Guid: values.Guid,
    }).then((response): void => {
      const { data } = response;

      if (data.Success) {
        enqueueSnackbar(t('DynamicForm:feedback.success'), {
          variant: 'success',
        });
        // redireciona para a lista          ▼
        history.push('/dynamicContent/dyObservationSeven');
      } else {
        enqueueSnackbar(t('DynamicForm:feedback.failure'), {
          variant: 'error',
        });
        setSubmitting(false);
      }
    }).catch((): void => {
      enqueueSnackbar(t('DynamicForm:feedback.failure'), {
        variant: 'error',
      });
      setSubmitting(false);
    });
  },
})(Form);

const EditQuestion = withTranslation()(withSnackbar(withRouter(MyQuestion)));

export default withTranslation()(
  (props: WithTranslation & IProps): React.ReactElement<WithTranslation & IProps> => {
    const { t, myValues } = props;
    const classes = useStyles({});
    setLanguage();
    setLanguageForm();

    return (
      <div className={classes.main}>
        <Typography
          gutterBottom
          align="center"
          variant="h5"
        >
          {t('DynamicQuestions:title')}
        </Typography>
        <EditQuestion myValues={myValues} />
      </div>
    );
  },
);
