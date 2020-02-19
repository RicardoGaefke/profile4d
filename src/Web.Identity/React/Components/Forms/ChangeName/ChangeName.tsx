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
import useStyles from '../../../Utils/Form.Styles';

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
          <TextField
            margin="dense"
            error={errors.Name as any && touched.Name as any}
            label={t('StaticIntroduction:titlePT.text')}
            title={t('StaticIntroduction:titlePT.title')}
            name="Title_PT"
            id="Title_PT"
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
