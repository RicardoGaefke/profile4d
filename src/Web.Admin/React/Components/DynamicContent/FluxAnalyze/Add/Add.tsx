import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { withRouter, RouteComponentProps } from 'react-router';
// eslint-disable-next-line no-unused-vars
import { withSnackbar, WithSnackbarProps } from 'notistack';
import { withFormik } from 'formik';
import { Typography } from '@material-ui/core';
import useStyles from '../../../../Utils/Form.Styles';
import setLanguage from '../Language';
import setLanguageForm from '../../Language';
import Form from '../../Form/Form';
import InitialValues from '../../Form/Form.InitialValues';
import Validation from '../../Form/Form.Validation';
// eslint-disable-next-line no-unused-vars
import { IDynamicContent } from '../../../../../../TypeScript/Interfaces/IDynamicContent';
import myAxios from '../../../../Utils/MyAxios';

interface IProps {
  myValues: IDynamicContent
}

const MyQuestion = withFormik<WithTranslation & WithSnackbarProps & RouteComponentProps & IProps, IDynamicContent>({
  displayName: 'Dynamic Content Add Question',
  enableReinitialize: true,
  mapPropsToValues: (): IDynamicContent => InitialValues,
  validationSchema: Validation,
  handleSubmit: async (values, { setSubmitting, props }): Promise<void> => {
    const { enqueueSnackbar, t, history } = props;
    // alterar o webservice apenas, não a função Add               ▼
    await myAxios(window.location.href).post<IDynamicContent>('FluxAnalyze/Add', {
      Title_PT: values.Title_PT,
      Title_ENG: values.Title_ENG,
      Text_PT: values.Text_PT,
      Text_ENG: values.Text_ENG,
    }).then((response): void => {
      const { data } = response;

      if (data.Success) {
        enqueueSnackbar(t('DynamicForm:feedback.success'), {
          variant: 'success',
        });

        // voltar para a tela de lista     ▼
        history.push('/dynamicContent/fluxAnalyze');
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

const AddQuestion = withTranslation()(withSnackbar(withRouter(MyQuestion)));

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
        <AddQuestion myValues={myValues} />
      </div>
    );
  },
);
