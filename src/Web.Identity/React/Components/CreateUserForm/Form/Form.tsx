import React from 'react';
import {
  Grid, TextField, Button, IconButton, InputAdornment,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
// eslint-disable-next-line no-unused-vars
import { WithTranslation, useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { FormikProps } from 'formik';
// eslint-disable-next-line no-unused-vars
import { ICreateUser } from '../../../../../TypeScript/Interfaces/ICreateUser';
import useStyles from './Form.Styles';

export type IForm = FormikProps<ICreateUser> & WithTranslation;

export default (props: IForm): React.ReactElement<IForm> => {
  const classes = useStyles({});
  // eslint-disable-next-line no-unused-vars
  const { t, i18n } = useTranslation('CreateUserForm');
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

  const handleClickShowPassword = (
    event: React.MouseEvent,
    checked: boolean,
  ): void => {
    setFieldValue('ShowPassword', !checked);
  };

  const handleClickShowConfirmPassword = (
    event: React.MouseEvent,
    checked: boolean,
  ): void => {
    setFieldValue('ShowConfirmPassword', !checked);
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
            error={errors.Name as any && touched.Name as any}
            label={t('CreateUserForm:name.title')}
            title={t('CreateUserForm:name.text')}
            name="Name"
            id="Create-Name"
            value={values.Name}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Name && touched.Name) && errors.Name}
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
            error={errors.Email as any && touched.Email as any}
            label={t('CreateUserForm:email.title')}
            title={t('CreateUserForm:email.text')}
            name="Email"
            id="Create-Email"
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
            error={errors.ConfirmEmail as any && touched.ConfirmEmail as any}
            label={t('CreateUserForm:confirmEmail.title')}
            title={t('CreateUserForm:confirmEmail.text')}
            name="ConfirmEmail"
            id="Create-ConfirmEmail"
            value={values.ConfirmEmail}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.ConfirmEmail && touched.ConfirmEmail) && errors.ConfirmEmail}
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
            id="Create-Password"
            name="Password"
            variant="outlined"
            type={values.ShowPassword ? 'text' : 'password'}
            value={values.Password}
            error={touched.Password as any && errors.Password as any}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Password && touched.Password) && errors.Password}
            title={t('CreateUserForm:password.text')}
            label={t('CreateUserForm:password.title')}
            className={classes.item}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={t('CreateUserForm:password.title')}
                    onClick={(event): void => handleClickShowPassword(event, values.ShowPassword)}
                    edge="end"
                  >
                    {values.ShowPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
        >
          <TextField
            id="Create-ConfirmPassword"
            name="ConfirmPassword"
            variant="outlined"
            type={values.ShowConfirmPassword ? 'text' : 'password'}
            value={values.ConfirmPassword}
            error={touched.ConfirmPassword as any && errors.ConfirmPassword as any}
            onChange={handleChange}
            onBlur={handleBlur}
            title={t('CreateUserForm:confirmPassword.text')}
            label={t('CreateUserForm:confirmPassword.title')}
            helperText={(errors.Password && touched.Password) && errors.Password}
            className={classes.item}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={t('CreateUserForm:confirmPassword.title')}
                    onClick={(event): void => handleClickShowConfirmPassword(event, values.ShowConfirmPassword)}
                    edge="end"
                  >
                    {values.ShowConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
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
            title={t('CreateUserForm:button.title')}
            disabled={isSubmitting}
          >
            {t('CreateUserForm:button.text')}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
