import React from 'react';
import {
  Grid, TextField, Button, FormControlLabel, Checkbox,
} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
  const { t, i18n } = useTranslation('SendKey');

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

  const handleCheck = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ): void => {
    setFieldValue('BlockResult', !checked);
  };

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
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
        >
          <Alert
            title={t('SendKey:alert.title')}
            text={t('SendKey:alert.text')}
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
            label={t('SendKey:email.text')}
            title={t('SendKey:email.title')}
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
            label={t('SendKey:confirmEmail.text')}
            title={t('SendKey:confirmEmail.title')}
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
          <FormControlLabel
            control={
              (
                <Checkbox
                  checked={values.BlockResult}
                  onChange={(event): void => handleCheck(event, values.BlockResult)}
                  name="checkedB"
                  color="primary"
                />
              )
            }
            label="Bloquear resultado?"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
        >
          <FormControl className={classes.formControl}>
            <InputLabel id="simple-select-label">Tipo de Licença</InputLabel>
            <Select
              labelId="simple-select-label"
              id="simple-select"
            >
              <MenuItem value={1}>Degustação</MenuItem>
              <MenuItem value={2}>Licença Pessoal</MenuItem>
              <MenuItem value={3}>Licença Avançada</MenuItem>
              <MenuItem value={4}>Licença Profissional</MenuItem>
            </Select>
          </FormControl>
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
            title={t('SendKey:button.title')}
            disabled={isSubmitting}
          >
            {t('SendKey:button.text')}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
