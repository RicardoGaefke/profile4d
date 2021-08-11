import React from 'react';
import {
  Grid, TextField, Button, InputLabel, FormControl, Select, MenuItem,
  FormLabel, FormHelperText,
} from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { WithTranslation, useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { FormikProps } from 'formik';
// eslint-disable-next-line no-unused-vars
import { IDynamicContent } from '../../../../../TypeScript/Interfaces/IDynamicContent';
import Createdby from '../../Created/Created';
import useStyles from '../../../Utils/Form.Styles';
import Editor from '../../Editor/RichEditor';

export interface IProps {
  category: boolean,
}

export type IForm = FormikProps<IDynamicContent> & WithTranslation;

export default (props: IForm): React.ReactElement<IForm> => {
  const classes = useStyles({});
  const { t, i18n } = useTranslation('DynamicForm');

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
        justifyContent="center"
        alignItems="center"
      >
        {
          (values.Category !== 0) ? (
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
            >
              <FormControl className={classes.item}>
                <InputLabel id="Category-label">{t('DynamicForm:category.text')}</InputLabel>
                <Select
                  labelId="Category-label"
                  id="Category"
                  name="Category"
                  value={values.Category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  title={t('DynamicForm:category:title')}
                >
                  <MenuItem value={1}>{t('DynamicForm:category:text1')}</MenuItem>
                  <MenuItem value={2}>{t('DynamicForm:category:text2')}</MenuItem>
                  <MenuItem value={3}>{t('DynamicForm:category:text3')}</MenuItem>
                  <MenuItem value={4}>{t('DynamicForm:category:text4')}</MenuItem>
                  <MenuItem value={5}>{t('DynamicForm:category:text5')}</MenuItem>
                  <MenuItem value={6}>{t('DynamicForm:category:text6')}</MenuItem>
                  <MenuItem value={7}>{t('DynamicForm:category:text7')}</MenuItem>
                  <MenuItem value={8}>{t('DynamicForm:category:text8')}</MenuItem>
                  <MenuItem value={9}>{t('DynamicForm:category:text9')}</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          ) : null
        }
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
        >
          <TextField
            margin="dense"
            error={errors.Title_PT as any && touched.Title_PT as any}
            label={t('DynamicForm:titlePT.text')}
            title={t('DynamicForm:titlePT.title')}
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
            label={t('DynamicForm:titleENG.text')}
            title={t('DynamicForm:titleENG.title')}
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
        {/* <Grid
          item
          xs={12}
          md={12}
          lg={6}
        >
          <TextField
            margin="dense"
            error={errors.Text_PT as any && touched.Text_PT as any}
            label={t('DynamicForm:textPT.text')}
            title={t('DynamicForm:textPT.title')}
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
            label={t('DynamicForm:textENG.text')}
            title={t('DynamicForm:textENG.title')}
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
        </Grid> */}
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
            <FormLabel>{t('DynamicForm:textPT.text')}</FormLabel>
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
            <FormLabel>{t('DynamicForm:textENG.text')}</FormLabel>
            <Editor
              name="Text_ENG"
              value={values.Text_ENG}
              handleChange={setFieldValue}
              handleBlur={handleBlur}
            />
            <FormHelperText>{(errors.Text_ENG && touched.Text_ENG) && errors.Text_ENG}</FormHelperText>
          </FormControl>
        </Grid>
        {
          (values.CreatedBy !== '') ? (
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
            >
              <Createdby Created={values.Created} CreatedBy={values.CreatedBy} />
            </Grid>
          ) : null
        }
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
            title={t('DynamicForm:button.title')}
            disabled={isSubmitting}
          >
            {t('DynamicForm:button.text')}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
