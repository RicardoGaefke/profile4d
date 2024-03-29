import '@babel/polyfill';
// eslint-disable-next-line no-unused-vars
import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  Grid, TextField, Button, FormControl,
  Input, FormHelperText,
} from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
// eslint-disable-next-line no-unused-vars
import { WithTranslation, useTranslation } from 'react-i18next';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withSnackbar, WithSnackbarProps } from 'notistack';
// eslint-disable-next-line no-unused-vars
import { FormikProps } from 'formik';
// eslint-disable-next-line no-unused-vars
import { IStaticImageForm } from '../../../../../../TypeScript/Interfaces/IStaticImageForm';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IImage } from '../../../../../../TypeScript/Interfaces/IImage';
import setLanguage from './Language';
import Createdby from '../../../Created/Created';
import useStyles from '../../../../Utils/Form.Styles';
import NoImage from '../../NoImage';
import ImageInfo from '../../ImageInfo/ImageInfo';
import ShowImage from '../../ShowImage/ShowImage';
import Hosts from '../../../../Utils/Hosts';
import MyAxios from '../../../../Utils/MyAxios';

export type IForm = FormikProps<IStaticImageForm> & WithTranslation & WithSnackbarProps;

export default (props: IForm): React.ReactElement<IForm> => {
  const classes = useStyles({});
  const { t, i18n } = useTranslation('StaticImageNotFound');
  setLanguage();
  const Api = new Hosts(window.location.href);

  const {
    enqueueSnackbar,
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

  const [image, setImage] = useState(values.Id);

  useEffect((): void => {
    if (!isSubmitting) {
      MyAxios(window.location.href)
        .get<IStaticImageForm>('Image/ImageNotFound')
        .then((response): void => {
          const { data } = response;

          setImage(data.Id);
        });
    }
  }, [isSubmitting]);

  const myRef = React.useRef<HTMLInputElement>(null);

  const pickFile = (): void => {
    if (myRef.current) {
      myRef.current.click();
    }
  };

  const changeFile = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files?.length === 0) {
      enqueueSnackbar('No image', {
        variant: 'error',
      });
      return;
    }

    // @ts-ignore: Object is possibly 'null'.
    const myFile = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(myFile);
    reader.onload = (): void => {
      const { result } = reader;

      setFieldValue('Data', result);
      setFieldValue('Src', result);

      const myImage = new Image();
      // @ts-ignore: Object is possibly 'null'.
      myImage.src = result.toString();
      myImage.onload = (): void => {
        setFieldValue('Size', myFile.size);
        setFieldValue('Mime', myFile.type);
        setFieldValue('Width', myImage.width);
        setFieldValue('Height', myImage.height);
      };
    };
    reader.onerror = (err): void => {
      enqueueSnackbar(`error: ${err}`, {
        variant: 'error',
      });

      // eslint-disable-next-line no-console
      console.log('err', err);
    };
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
          lg={6}
        >
          <TextField
            margin="dense"
            error={errors.Alt_PT as any && touched.Alt_PT as any}
            label={t('StaticImageNotFound:altPT.text')}
            title={t('StaticImageNotFound:altPT.title')}
            name="Alt_PT"
            id="Alt_PT"
            value={values.Alt_PT}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Alt_PT && touched.Alt_PT) && errors.Alt_PT}
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
            error={errors.Alt_ENG as any && touched.Alt_ENG as any}
            label={t('StaticImageNotFound:altENG.text')}
            title={t('StaticImageNotFound:altENG.title')}
            name="Alt_ENG"
            id="Alt_ENG"
            value={values.Alt_ENG}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Alt_ENG && touched.Alt_ENG) && errors.Alt_ENG}
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
          md={6}
          lg={6}
        >
          <FormControl>
            <Input
              id="image-file"
              value={values.Src}
              className={classes.hidden}
              inputComponent={(): React.ReactElement => (
                <input
                  ref={myRef}
                  type="file"
                  id="image-file"
                  accept="image/png"
                  onChange={changeFile}
                />
              )}
            />
            <FormHelperText
              error
              id="image-helper-text"
            >
              {errors.Src && touched.Src && errors.Src}
            </FormHelperText>
          </FormControl>
          {
            (values.Data === '')
              ? <NoImage alt={t('StaticImageNotFound:noImage')} />
              : (
                <ImageInfo
                  Src={values.Data || ''}
                  Alt={t('StaticImageNotFound:altImage')}
                  Mime={values.Mime}
                  Size={values.Size}
                  Width={values.Width}
                  Height={values.Height}
                />
              )
          }
          <Button
            color="primary"
            variant="outlined"
            startIcon={<PublishIcon />}
            onClick={pickFile}
          >
            {t('StaticImageNotFound:file.title')}
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
        >
          <ShowImage Src={`${Api.Api()}Image/Show/${image}.png`} Alt={values.Alt} />
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
            title={t('StaticImageNotFound:button.title')}
            disabled={isSubmitting}
          >
            {t('StaticImageNotFound:button.text')}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
