import React from 'react';
import {
  Grid, TextField, Button,
} from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { WithTranslation, useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { FormikProps } from 'formik';
// eslint-disable-next-line no-unused-vars
import { IForm } from './Form.InitialValues';
import Alert from '../../../Alert/Alert';
import useStyles from '../../../../Utils/Form.Styles';

export type IMyForm = FormikProps<IForm> & WithTranslation;

export default (props: IMyForm): React.ReactElement<IMyForm> => {
  const classes = useStyles({});
  const { t, i18n } = useTranslation('TransferKeys');

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
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
        >
          <Alert
            title={t('TransferKeys:alert.title')}
            text={t('TransferKeys:alert.text')}
            severity="warning"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
        >
          <TextField
            margin="dense"
            error={errors.Email as any && touched.Email as any}
            label={t('TransferKeys:email.text')}
            title={t('TransferKeys:email.title')}
            name="Email"
            id="Email"
            type="email"
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
          lg={6}
        >
          <TextField
            margin="dense"
            error={errors.ConfirmEmail as any && touched.ConfirmEmail as any}
            label={t('TransferKeys:confirmEmail.text')}
            title={t('TransferKeys:confirmEmail.title')}
            name="ConfirmEmail"
            id="ConfirmEmail"
            type="email"
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
          lg={6}
        >
          <TextField
            margin="dense"
            error={errors.ConfirmEmail as any && touched.ConfirmEmail as any}
            label={t('TransferKeys:keys.text')}
            title={t('TransferKeys:keys.title')}
            name="Keys"
            id="Keys"
            type="number"
            value={values.Keys}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Keys && touched.Keys) && errors.Keys}
            variant="outlined"
            className={classes.item}
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
        >
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
            type="submit"
            title={t('TransferKeys:button.title')}
            disabled={isSubmitting}
          >
            {t('TransferKeys:button.text')}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
