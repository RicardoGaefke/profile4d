import React from 'react';
import {
  Grid, TextField, Button,
} from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';
// eslint-disable-next-line no-unused-vars
import { WithTranslation, useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { FormikProps } from 'formik';
// eslint-disable-next-line no-unused-vars
import { IAttachment } from '../../../../../TypeScript/Interfaces/IAttachment';
// eslint-disable-next-line no-unused-vars
import { IStaticImageForm } from '../../../../../TypeScript/Interfaces/IStaticImageForm';
import Createdby from '../../Created/Created';
import useStyles from '../../../Utils/Form.Styles';

export type IForm = FormikProps<IStaticImageForm> & WithTranslation;

export default (props: IForm): React.ReactElement<IForm> => {
  const classes = useStyles({});
  const { t, i18n } = useTranslation('StaticImageForm');

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
            error={errors.Text_PT as any && touched.Text_PT as any}
            label={t('StaticImageForm:textPT.text')}
            title={t('StaticImageForm:textPT.title')}
            name="Text_PT"
            id="Text_PT"
            value={values.Text_PT}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Text_PT && touched.Text_PT) && errors.Text_PT}
            variant="outlined"
            multiline
            rows={3}
            rowsMax={6}
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
            label={t('StaticImageForm:textENG.text')}
            title={t('StaticImageForm:textENG.title')}
            name="Text_ENG"
            id="Text_ENG"
            value={values.Text_ENG}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Text_ENG && touched.Text_ENG) && errors.Text_ENG}
            variant="outlined"
            multiline
            rows={3}
            rowsMax={6}
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
          <DropzoneArea
            filesLimit={1}
            maxFileSize={307200}
            acceptedFiles={[
              'image/jpeg',
              'image/png',
              'application/pdf',
            ]}
            showPreviews={false}
            showPreviewsInDropzone
            dropzoneText={t('StaticImageForm:attachment.dropzoneText')}
            dropzoneClass={classes.dropzone}
            showAlerts={false}
            onChange={(files: File[]): void => {
              const myFiles: IAttachment[] = [];

              files.forEach((f: File): void => {
                myFiles.push({
                  name: f.name,
                  mime: f.type,
                });
              });

              setFieldValue('Attachment', myFiles);
            }}
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
            title={t('StaticImageForm:button.title')}
            disabled={isSubmitting}
          >
            {t('StaticImageForm:button.text')}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
