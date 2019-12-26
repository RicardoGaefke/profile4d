import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Grid, TextField, Button, FormControl, FormControlLabel, Switch,
} from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { WithTranslation, withTranslation, useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { FormikProps } from 'formik';
import i18n from 'i18next';
// eslint-disable-next-line no-unused-vars
import { ILoginForm } from '../../../../../TypeScript/Interfaces/ILoginForm';
import useStyles from './Form.Styles';

type IForm = FormikProps<ILoginForm> & WithTranslation;

export default (props: IForm): React.ReactElement<IForm> => {
  const { t } = props;
  const classes = useStyles({});
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
            label={t('LoginForm:email.title')}
            title={t('LoginForm:email.text')}
            name="Email"
            id="Family-Email"
            value={values.Email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Email && touched.Email) && errors.Email}
            variant="filled"
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
            variant="filled"
            className={classes.item}
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs={12}
          md={12}
        >
          <Button
            color="primary"
            variant="contained"
            style={{ color: 'white' }}
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
