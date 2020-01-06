import React from 'react';
import {
  Grid, TextField, Button,
} from '@material-ui/core';
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
            margin="dense"
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
            margin="dense"
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
            type="password"
            margin="dense"
            error={errors.Password as any && touched.Password as any}
            label={t('CreateUserForm:password.title')}
            title={t('CreateUserForm:password.text')}
            name="Password"
            id="Create-Password"
            value={values.Password}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Password && touched.Password) && errors.Password}
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
            type="password"
            margin="dense"
            error={errors.ConfirmPassword as any && touched.ConfirmPassword as any}
            label={t('CreateUserForm:confirmPassword.title')}
            title={t('CreateUserForm:confirmPassword.text')}
            name="ConfirmPassword"
            id="Create-ConfirmPassword"
            value={values.ConfirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.ConfirmPassword && touched.ConfirmPassword) && errors.ConfirmPassword}
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
