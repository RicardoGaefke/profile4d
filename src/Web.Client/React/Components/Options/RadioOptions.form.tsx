/* eslint-disable react/no-unused-prop-types */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { WithTranslation, useTranslation, withTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { withFormik, FormikProps } from 'formik';
import {
  Typography, FormControl, RadioGroup, FormControlLabel, Radio, Button, Grid, FormHelperText,
} from '@material-ui/core';
import Validation from './RadioOptions.validation';
// eslint-disable-next-line no-unused-vars
import radioData, { IRadio } from './Radio.data';
import useStyles from './Styles';
import setLanguage from './Language';
// eslint-disable-next-line no-unused-vars
import { IQuestion } from '../../../../TypeScript/Interfaces/IQuestion';
import Axios from '../../Utils/Axios';
// eslint-disable-next-line no-unused-vars
import { IBasicReturn } from '../../../../TypeScript/Interfaces/IBasicReturn';

interface ICustom {
  // eslint-disable-next-line react/require-default-props
  submitAction?: () => void;
}

type IRadioForm = FormikProps<IQuestion> & WithTranslation & IQuestion & ICustom;

const RadioForm = (props: IRadioForm): JSX.Element => {
  const { t, i18n } = useTranslation('RadioOptions');
  const {
    values,
    errors,
    touched,
    isSubmitting,
    setFieldTouched,
    handleSubmit,
    handleChange,
    handleBlur,
    Message = 'Esta é uma pergunta modelo. Supondo que esta seja mesmo uma pergunta modelo, você concorda?',
  } = props;

  const classes = useStyles({});
  setLanguage();

  i18n.on('languageChanged', (): void => {
    Object.keys(errors).forEach((fieldName): void => {
      setFieldTouched(fieldName as any);
    });
  });

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.main}
    >
      <form onSubmit={handleSubmit}>
        <Grid item md={12} xs={12}>
          <Typography
            variant="body1"
            component="p"
            className={classes.title}
            gutterBottom
            dangerouslySetInnerHTML={{ __html: Message }}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <input type="hidden" name="Id" value={values.Id} />
          <FormControl
            component="fieldset"
            error={errors.Answer as any && touched.Answer as any}
          >
            <RadioGroup
              aria-label="Anwer"
              name="Answer"
              value={values.Answer?.toString()}
              onChange={handleChange}
              onBlur={handleBlur}
              className={classes.form}
            >
              {
                radioData.map((opt: IRadio): React.ReactElement<IRadio> => (
                  <FormControlLabel
                    key={opt.id}
                    value={opt.id.toString()}
                    className={classes.radio}
                    control={(
                      <Radio color="primary" />
                    )}
                    label={t(`RadioOptions:options.${opt.name}`)}
                  />
                ))
              }
            </RadioGroup>
            <FormHelperText
              className={classes.helperText}
            >
              {(touched.Answer && errors.Answer) && errors.Answer}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item md={12} xs={12} className={classes.btnGrid}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isSubmitting}
          >
            {t('RadioOptions:buttonConfirm')}
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

const AnswerForm = withFormik<WithTranslation & IQuestion & ICustom, IQuestion>({
  displayName: 'RadioForm',
  enableReinitialize: true,
  validationSchema: Validation,
  mapPropsToValues: (props: IRadioForm): IQuestion => ({ Answer: '', Id: props.Id }),
  handleSubmit: (values, { resetForm, setSubmitting, props }): void => {
    const { submitAction } = props;

    Axios(window.location.href).post<IBasicReturn>('SendKey/Answer', values).then((response): void => {
      const { data } = response;

      if (data.Success) {
        if (submitAction) {
          submitAction();
        }
      }
    });

    setSubmitting(false);
    resetForm();
  },
})(RadioForm);

AnswerForm.displayName = 'AnswerForm';

AnswerForm.defaultProps = {
  submitAction: (): void => {},
};

export default withTranslation()(AnswerForm);
