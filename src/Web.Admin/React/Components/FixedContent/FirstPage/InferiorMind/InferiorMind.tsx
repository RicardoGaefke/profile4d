import React from 'react';
import {
  Grid, TextField, Button,
} from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { WithTranslation, useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { FormikProps } from 'formik';
// eslint-disable-next-line no-unused-vars
import { IStaticFirstPage } from '../../../../../../TypeScript/Interfaces/IStaticContent';
import Createdby from '../../../Created/Created';
import useStyles from './InferiorMind.Styles';

export type IForm = FormikProps<IStaticFirstPage> & WithTranslation;

export default (props: IForm): React.ReactElement<IForm> => {
  const classes = useStyles({});
  const { t, i18n } = useTranslation('StaticFirstPage');
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
          lg={6}
        >
          <TextField
            margin="dense"
            error={errors.Title_PT as any && touched.Title_PT as any}
            label={t('StaticFirstPage:titlePT.text')}
            title={t('StaticFirstPage:titlePT.title')}
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
            label={t('StaticFirstPage:titleENG.text')}
            title={t('StaticFirstPage:titleENG.title')}
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
          <TextField
            margin="dense"
            error={errors.Text_PT as any && touched.Text_PT as any}
            label={t('StaticFirstPage:textPT.text')}
            title={t('StaticFirstPage:textPT.title')}
            name="Text_PT"
            id="Text_PT"
            value={values.Text_PT}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Text_PT && touched.Text_PT) && errors.Text_PT}
            variant="outlined"
            multiline
            rows={15}
            rowsMax={30}
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
            error={errors.Text_ENG as any && touched.Text_ENG as any}
            label={t('StaticFirstPage:textENG.text')}
            title={t('StaticFirstPage:textENG.title')}
            name="Text_ENG"
            id="Text_ENG"
            value={values.Text_ENG}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Text_ENG && touched.Text_ENG) && errors.Text_ENG}
            variant="outlined"
            multiline
            rows={15}
            rowsMax={30}
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
            title={t('StaticFirstPage:button.title')}
            disabled={isSubmitting}
          >
            {t('StaticFirstPage:button.text')}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
