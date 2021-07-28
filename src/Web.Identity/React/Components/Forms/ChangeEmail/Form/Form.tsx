import React from 'react';
import {
  Grid, TextField, Button,
} from '@material-ui/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { WithTranslation, useTranslation } from 'react-i18next';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormikProps } from 'formik';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
            title={t('ChangeEmailForm:alert.title')}
            text={t('ChangeEmailForm:alert.text')}
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
            error={errors.Email as any && touched.Email as any}
            label={t('ChangeEmailForm:email.title')}
            title={t('ChangeEmailForm:email.text')}
            name="Email"
            id="Change-Email"
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
            label={t('ChangeEmailForm:confirmEmail.title')}
            title={t('ChangeEmailForm:confirmEmail.text')}
            name="ConfirmEmail"
            id="Change-ConfirmEmail"
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
            margin="dense"
            error={errors.Password as any && touched.Password as any}
            label={t('ChangeEmailForm:password.text')}
            title={t('ChangeEmailForm:password.title')}
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
            title={t('ChangeEmailForm:button.title')}
            disabled={isSubmitting}
          >
            {t('ChangeEmailForm:button.text')}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
