import React from 'react';
import {
  Grid, TextField, Button, FormControlLabel, Checkbox,
} from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { WithTranslation, useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { FormikProps } from 'formik';
// eslint-disable-next-line no-unused-vars
import { ILoginForm } from '../../../../../TypeScript/Interfaces/ILoginForm';
import useStyles from './Form.Styles';

export type IForm = FormikProps<ILoginForm> & WithTranslation;

export default (props: IForm): React.ReactElement<IForm> => {
  const classes = useStyles({});
  const { t, i18n } = useTranslation('LoginForm');
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldTouched,
    setFieldValue,
  } = props;

  i18n.on('languageChanged', (): void => {
    Object.keys(errors).forEach((fieldName): void => {
      setFieldTouched(fieldName as any);
    });
  });

  const handleCheck = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ): void => {
    setFieldValue('KeepConnected', !checked);
  };

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
            label={t('LoginForm:email.title')}
            title={t('LoginForm:email.text')}
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
          <TextField
            margin="dense"
            error={errors.Password as any && touched.Password as any}
            label={t('LoginForm:password.title')}
            title={t('LoginForm:password.text')}
            name="Password"
            id="Family-Password"
            value={values.Password}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Password && touched.Password) && errors.Password}
            variant="outlined"
            className={classes.item}
            type="password"
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
        >
          <FormControlLabel
            control={
              (
                <Checkbox
                  checked={values.KeepConnected}
                  onChange={(event): void => handleCheck(event, values.KeepConnected)}
                  value={values.KeepConnected}
                  color="primary"
                  title={t('LoginForm:keep.title')}
                />
              )
            }
            label={t('LoginForm:keep.text')}
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
            title={t('LoginForm:button.title')}
            disabled={isSubmitting}
          >
            {t('LoginForm:button.text')}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
