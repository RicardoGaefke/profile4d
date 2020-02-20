import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withRouter, RouteComponentProps } from 'react-router';
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
            title={t('ChangeNameForm:alert.title')}
            text={t('ChangeNameForm:alert.text')}
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
            error={errors.Name as any && touched.Name as any}
            label={t('ChangeNameForm:name.text')}
            title={t('ChangeNameForm:name.title')}
            name="Name"
            id="Name"
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
            error={errors.Password as any && touched.Password as any}
            label={t('ChangeNameForm:password.text')}
            title={t('ChangeNameForm:password.title')}
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
            title={t('ChangeNameForm:button.title')}
            disabled={isSubmitting}
          >
            {t('ChangeNameForm:button.text')}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
