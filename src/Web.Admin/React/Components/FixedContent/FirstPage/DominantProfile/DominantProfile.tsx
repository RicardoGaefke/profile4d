import React from 'react';
import {
  Grid, TextField, Button,
} from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { WithTranslation, useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { FormikProps } from 'formik';
// eslint-disable-next-line no-unused-vars
import { IStaticFirstPage } from '../../../../../../TypeScript/Interfaces/IStaticContent.Dominant';
import Createdby from '../../../Created/Created';
import useStyles from './DominantProfile.Styles';

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
          lg={6}
        >
          <TextField
            margin="dense"
            error={errors.Text1_PT as any && touched.Text1_PT as any}
            label={t('StaticFirstPage:titlePT.text')}
            title={t('StaticFirstPage:titlePT.title')}
            name="Text1_PT"
            id="Text1_PT"
            value={values.Text1_PT}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Text1_PT && touched.Text1_PT) && errors.Text1_PT}
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
            error={errors.Text1_ENG as any && touched.Text1_ENG as any}
            label={t('StaticFirstPage:titleENG.text')}
            title={t('StaticFirstPage:titleENG.title')}
            name="Text1_ENG"
            id="Text1_ENG"
            value={values.Text1_ENG}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Text1_ENG && touched.Text1_ENG) && errors.Text1_ENG}
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
            error={errors.Text2_PT as any && touched.Text2_PT as any}
            label={t('StaticFirstPage:titlePT.text')}
            title={t('StaticFirstPage:titlePT.title')}
            name="Text2_PT"
            id="Text2_PT"
            value={values.Text2_PT}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Text2_PT && touched.Text2_PT) && errors.Text2_PT}
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
            error={errors.Text2_ENG as any && touched.Text2_ENG as any}
            label={t('StaticFirstPage:titleENG.text')}
            title={t('StaticFirstPage:titleENG.title')}
            name="Text2_ENG"
            id="Text2_ENG"
            value={values.Text2_ENG}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Text2_ENG && touched.Text2_ENG) && errors.Text2_ENG}
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
            error={errors.Text3_PT as any && touched.Text3_PT as any}
            label={t('StaticFirstPage:titlePT.text')}
            title={t('StaticFirstPage:titlePT.title')}
            name="Text3_PT"
            id="Text3_PT"
            value={values.Text3_PT}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Text3_PT && touched.Text3_PT) && errors.Text3_PT}
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
            error={errors.Text3_ENG as any && touched.Text3_ENG as any}
            label={t('StaticFirstPage:titleENG.text')}
            title={t('StaticFirstPage:titleENG.title')}
            name="Text3_ENG"
            id="Text3_ENG"
            value={values.Text3_ENG}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Text3_ENG && touched.Text3_ENG) && errors.Text3_ENG}
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
            error={errors.Text4_PT as any && touched.Text4_PT as any}
            label={t('StaticFirstPage:titlePT.text')}
            title={t('StaticFirstPage:titlePT.title')}
            name="Text4_PT"
            id="Text4_PT"
            value={values.Text4_PT}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Text4_PT && touched.Text4_PT) && errors.Text4_PT}
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
            error={errors.Text4_ENG as any && touched.Text4_ENG as any}
            label={t('StaticFirstPage:titleENG.text')}
            title={t('StaticFirstPage:titleENG.title')}
            name="Text4_ENG"
            id="Text4_ENG"
            value={values.Text4_ENG}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Text4_ENG && touched.Text4_ENG) && errors.Text4_ENG}
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
            error={errors.Text5_PT as any && touched.Text5_PT as any}
            label={t('StaticFirstPage:titlePT.text')}
            title={t('StaticFirstPage:titlePT.title')}
            name="Text5_PT"
            id="Text5_PT"
            value={values.Text5_PT}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Text5_PT && touched.Text5_PT) && errors.Text5_PT}
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
            error={errors.Text5_ENG as any && touched.Text5_ENG as any}
            label={t('StaticFirstPage:titleENG.text')}
            title={t('StaticFirstPage:titleENG.title')}
            name="Text5_ENG"
            id="Text5_ENG"
            value={values.Text5_ENG}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Text5_ENG && touched.Text5_ENG) && errors.Text5_ENG}
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
            error={errors.Text6_PT as any && touched.Text6_PT as any}
            label={t('StaticFirstPage:titlePT.text')}
            title={t('StaticFirstPage:titlePT.title')}
            name="Text6_PT"
            id="Text6_PT"
            value={values.Text6_PT}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Text6_PT && touched.Text6_PT) && errors.Text6_PT}
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
            error={errors.Text6_ENG as any && touched.Text6_ENG as any}
            label={t('StaticFirstPage:titleENG.text')}
            title={t('StaticFirstPage:titleENG.title')}
            name="Text6_ENG"
            id="Text6_ENG"
            value={values.Text6_ENG}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Text6_ENG && touched.Text6_ENG) && errors.Text6_ENG}
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
            error={errors.Text7_PT as any && touched.Text7_PT as any}
            label={t('StaticFirstPage:titlePT.text')}
            title={t('StaticFirstPage:titlePT.title')}
            name="Text7_PT"
            id="Text7_PT"
            value={values.Text7_PT}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Text7_PT && touched.Text7_PT) && errors.Text7_PT}
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
            error={errors.Text7_ENG as any && touched.Text7_ENG as any}
            label={t('StaticFirstPage:titleENG.text')}
            title={t('StaticFirstPage:titleENG.title')}
            name="Text7_ENG"
            id="Text7_ENG"
            value={values.Text7_ENG}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Text7_ENG && touched.Text7_ENG) && errors.Text7_ENG}
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
            error={errors.Text8_PT as any && touched.Text8_PT as any}
            label={t('StaticFirstPage:titlePT.text')}
            title={t('StaticFirstPage:titlePT.title')}
            name="Text8_PT"
            id="Text8_PT"
            value={values.Text8_PT}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Text8_PT && touched.Text8_PT) && errors.Text8_PT}
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
            error={errors.Text8_ENG as any && touched.Text8_ENG as any}
            label={t('StaticFirstPage:titleENG.text')}
            title={t('StaticFirstPage:titleENG.title')}
            name="Text8_ENG"
            id="Text8_ENG"
            value={values.Text8_ENG}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Text8_ENG && touched.Text8_ENG) && errors.Text8_ENG}
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
            error={errors.Text9_PT as any && touched.Text9_PT as any}
            label={t('StaticFirstPage:titlePT.text')}
            title={t('StaticFirstPage:titlePT.title')}
            name="Text9_PT"
            id="Text9_PT"
            value={values.Text9_PT}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Text9_PT && touched.Text9_PT) && errors.Text9_PT}
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
            error={errors.Text9_ENG as any && touched.Text9_ENG as any}
            label={t('StaticFirstPage:titleENG.text')}
            title={t('StaticFirstPage:titleENG.title')}
            name="Text9_ENG"
            id="Text9_ENG"
            value={values.Text9_ENG}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Text9_ENG && touched.Text9_ENG) && errors.Text9_ENG}
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
            error={errors.Text10_PT as any && touched.Text10_PT as any}
            label={t('StaticFirstPage:titlePT.text')}
            title={t('StaticFirstPage:titlePT.title')}
            name="Text10_PT"
            id="Text10_PT"
            value={values.Text10_PT}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Text10_PT && touched.Text10_PT) && errors.Text10_PT}
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
            error={errors.Text10_ENG as any && touched.Text10_ENG as any}
            label={t('StaticFirstPage:titleENG.text')}
            title={t('StaticFirstPage:titleENG.title')}
            name="Text10_ENG"
            id="Text10_ENG"
            value={values.Text10_ENG}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Text10_ENG && touched.Text10_ENG) && errors.Text10_ENG}
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
