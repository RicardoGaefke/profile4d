import React from 'react';
import {
  Grid, TextField, Button, FormControl,
  FormLabel, FormHelperText,
} from '@material-ui/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { WithTranslation, useTranslation } from 'react-i18next';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormikProps } from 'formik';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IStaticIntroduction } from '../../../../../../TypeScript/Interfaces/IStaticContent';
import Createdby from '../../../Created/Created';
import useStyles from '../../../../Utils/Form.Styles';
import Editor from '../../../Editor/RichEditor';

export type IForm = FormikProps<IStaticIntroduction> & WithTranslation;

export default (props: IForm): React.ReactElement<IForm> => {
  const classes = useStyles({});
  const { t, i18n } = useTranslation('StaticIntroduction');

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
          lg={6}
        >
          <TextField
            margin="dense"
            error={errors.Title_PT as any && touched.Title_PT as any}
            label={t('StaticIntroduction:titlePT.text')}
            title={t('StaticIntroduction:titlePT.title')}
            name="Title_PT"
            id="Title_PT"
            value={values.Title_PT}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Title_PT && touched.Title_PT) && errors.Title_PT}
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
            error={errors.Title_ENG as any && touched.Title_ENG as any}
            label={t('StaticIntroduction:titleENG.text')}
            title={t('StaticIntroduction:titleENG.title')}
            name="Title_ENG"
            id="Title_ENG"
            value={values.Title_ENG}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Title_ENG && touched.Title_ENG) && errors.Title_ENG}
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
          <FormControl
            error={errors.Text_PT as any && touched.Text_PT as any}
            fullWidth
          >
            <FormLabel>{t('StaticIntroduction:textPT.text')}</FormLabel>
            <Editor
              name="Text_PT"
              value={values.Text_PT}
              handleChange={setFieldValue}
              handleBlur={handleBlur}
            />
            <FormHelperText>{(errors.Text_PT && touched.Text_PT) && errors.Text_PT}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
        >
          <FormControl
            error={errors.Text_ENG as any && touched.Text_ENG as any}
            fullWidth
          >
            <FormLabel>{t('StaticIntroduction:textENG.text')}</FormLabel>
            <Editor
              name="Text_ENG"
              value={values.Text_ENG}
              handleChange={setFieldValue}
              handleBlur={handleBlur}
            />
            <FormHelperText>{(errors.Text_ENG && touched.Text_ENG) && errors.Text_ENG}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
        >
          <Createdby Created={values.Created} CreatedBy={values.CreatedBy} />
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
            title={t('StaticIntroduction:button.title')}
            disabled={isSubmitting}
          >
            {t('StaticIntroduction:button.text')}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
