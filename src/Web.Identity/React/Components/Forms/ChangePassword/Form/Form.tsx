import React from 'react';
import {
  Grid, TextField, Button,
} from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { WithTranslation, useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { FormikProps } from 'formik';
// eslint-disable-next-line no-unused-vars
import { ICreateUser } from '../../../../../../TypeScript/Interfaces/ICreateUser';
import useStyles from '../../../../Utils/Form.Styles';
import Alert from '../../../Alert/Alert';

type IForm = FormikProps<ICreateUser> & WithTranslation;

export default (props: IForm): React.ReactElement<IForm> => {
  const classes = useStyles({});
  const { t, i18n } = props;
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
        spacing={1}
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          md={12}
        >
          <Alert
            title={t('ChangePasswordForm:alert.title')}
            text={t('ChangePasswordForm:alert.text')}
            severity="warning"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
        >
          <TextField
            margin="dense"
            error={errors.NewPassword as any && touched.NewPassword as any}
            label={t('ChangePasswordForm:newPassword.text')}
            title={t('ChangePasswordForm:newPassword.title')}
            name="NewPassword"
            id="NewPassword"
            type="password"
            value={values.NewPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.NewPassword && touched.NewPassword) && errors.NewPassword}
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
            error={errors.NewPassword as any && touched.NewPassword as any}
            label={t('ChangePasswordForm:confirmPassword.text')}
            title={t('ChangePasswordForm:confirmPassword.title')}
            name="ConfirmPassword"
            id="ConfirmPassword"
            type="password"
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
          <TextField
            margin="dense"
            error={errors.Password as any && touched.Password as any}
            label={t('ChangePasswordForm:password.text')}
            title={t('ChangePasswordForm:password.title')}
            name="Password"
            id="Password"
            type="password"
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
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
            type="submit"
            title={t('ChangePasswordForm:button.title')}
            disabled={isSubmitting}
          >
            {t('ChangePasswordForm:button.text')}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
