import React from 'react';
// eslint-disable-next-line no-unused-vars
import { WithTranslation, useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { withFormik, FormikProps } from 'formik';
import {
  Typography, FormControl, RadioGroup, FormControlLabel, Radio, Button, Grid, FormHelperText,
} from '@material-ui/core';
import Validation from './RadioOptions.validation';
import useStyles from './Styles';
import setLanguage from './Language';

interface IForm {
  option: string;
}

const MyOptions: React.ReactNode[] = [
  'disagreeStrongly', 'disagreePartially', 'noAgreeOrDisagree', 'agreePartially', 'agreeStrongly',
];

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
    handleReset,
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
      spacing={2}
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
                MyOptions.map((opt: string): React.ReactElement<HTMLElement> => (
                  <FormControlLabel
                    value={opt}
                    control={(
                      <Radio color="primary" />
                    )}
                    label={t(`RadioOptions:options.${opt}`)}
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
          <Button
            variant="contained"
            color="default"
            onClick={handleReset}
            className={classes.button}
          >
            {t('RadioOptions:buttonReset')}
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
    alert(JSON.stringify(values));
    setSubmitting(false);
    resetForm();
  },
})(RadioForm);
