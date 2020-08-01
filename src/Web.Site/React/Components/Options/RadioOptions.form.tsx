import React from 'react';
// eslint-disable-next-line no-unused-vars
import { WithTranslation, useTranslation } from 'react-i18next';
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

interface IForm {
  option: string;
}

type IRadioForm = FormikProps<IForm> & WithTranslation;

const RadioForm = (props: IRadioForm): React.ReactElement<IRadioForm> => {
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
      justify="flex-start"
      alignItems="center"
      className={classes.main}
    >
      <form onSubmit={handleSubmit}>
        <Grid item md={12} xs={12}>
          <Typography
            variant="body1"
            component="p"
            className={classes.title}
          >
            {t('RadioOptions:title')}
          </Typography>
        </Grid>
        <Grid item md={12} xs={12}>
          <FormControl
            component="fieldset"
            error={touched.option as any && errors.option as any}
          >
            <RadioGroup
              aria-label="option"
              name="option"
              value={values.option}
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
              {(touched.option && errors.option) && errors.option}
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

export default withFormik<WithTranslation, IForm>({
  displayName: 'RadioForm',
  enableReinitialize: true,
  validationSchema: Validation,
  mapPropsToValues: (): IForm => ({ option: '' }),
  handleSubmit: (values: IForm, { resetForm, setSubmitting }): void => {
    // eslint-disable-next-line no-alert
    alert(`option: ${parseFloat(values.option)}`);
    setSubmitting(false);
    resetForm();
  },
})(RadioForm);
