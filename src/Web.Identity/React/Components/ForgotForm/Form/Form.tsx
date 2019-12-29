import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { WithTranslation, useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { FormikProps } from 'formik';
// eslint-disable-next-line no-unused-vars
import { IForgotForm } from '../../../../../TypeScript/Interfaces/IForgotForm';
import useStyles from './Form.Styles';

type IForm = FormikProps<IForgotForm> & WithTranslation;

export default (props: IForm): React.ReactElement<IForm> => {
  const classes = useStyles({});
  // eslint-disable-next-line no-unused-vars
  const { t, i18n } = useTranslation('ForgotForm');
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldTouched,
  } = props;

  i18n.on('languageChanged', (): void => {
    Object.keys(errors).forEach((fieldName): void => {
      setFieldTouched(fieldName as any);
    });
  });

  return (
    <form
      className={classes.root}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Grid
        container
        spacing={2}
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          md={12}
        >
          <TextField
            margin="dense"
            error={errors.Email as any && touched.Email as any}
            label={t('ForgotForm:email.title')}
            title={t('ForgotForm:email.text')}
            name="Email"
            id="Family-Email"
            value={values.Email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Email && touched.Email) && errors.Email}
            variant="outlined"
            className={classes.item}
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
        >
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
            type="submit"
            title={t('ForgotForm:button.title')}
            disabled={isSubmitting}
          >
            {t('ForgotForm:button.text')}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
