/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import {
  Grid, TextField, Button, InputLabel, FormControl, Select, MenuItem,
} from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { WithTranslation, useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { FormikProps } from 'formik';

import { Editor, EditorState, RichUtils } from 'draft-js';

// eslint-disable-next-line no-unused-vars
import { IDynamicContent } from '../../../../../TypeScript/Interfaces/IDynamicContent';
import Createdby from '../../Created/Created';
import useStyles from '../../../Utils/Form.Styles';

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
  } = props;

  i18n.on('languageChanged', (): void => {
    Object.keys(errors).forEach((fieldName): void => {
      setFieldTouched(fieldName as any);
    });
  });

  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState({
    // eslint-disable-next-line new-cap
    editorState: new EditorState.createEmpty(),
  });

  // Custom overrides for "code" style.
  const styleMap = {
    CODE: {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
      fontSize: 16,
      padding: 2,
    },
  };

  const getBlockStyle = (block): any => {
    switch (block.getType()) {
      case 'blockquote':
        return 'RichEditor-blockquote';
      default:
        return null;
    }
  };

  // eslint-disable-next-line no-shadow
  const onChange = (edit): any => {
    onChange(edit);
  };

  // eslint-disable-next-line no-unused-vars
  const handleKeyCommand = (command): any => {
    const newState = RichUtils.handleKeyCommand(state.editorState, command);
    if (newState) {
      onChange(newState);
      return true;
    }
    return false;
  };

  // eslint-disable-next-line no-unused-vars
  const onTab = (e): any => {
    const maxDepth = 4;
    onChange(RichUtils.onTab(e, state.editorState, maxDepth));
  };

  // eslint-disable-next-line no-unused-vars
  const toggleBlockType = (blockType): any => {
    onChange(RichUtils.toggleBlockType(state.editorState, blockType));
  };

  // eslint-disable-next-line no-unused-vars
  const toggleInlineStyle = (inlineStyle): any => {
    onChange(
      RichUtils.toggleInlineStyle(state.editorState, inlineStyle),
    );
  };

  return (
    <>
      <form
        className={classes.root}
        autoComplete="off"
        onSubmit={handleSubmit}
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
          <Grid
            item
            xs={12}
            md={12}
            lg={6}
          >
            <Editor
              blockStyleFn={getBlockStyle}
              customStyleMap={styleMap}
              editorState={state.editorState}
              handleKeyCommand={handleKeyCommand}
              onChange={onChange}
              onTab={onTab}
              placeholder="Tell a story..."
              spellCheck
            />
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
            {/* <Editor
              apiKey="obj5ks51c7cuym2iqji04posibsudk9m34khpemr7yiwkw58"
              id="Text_PT"
              value={values.Text_PT}
              init={{
                plugins: 'link image code',
                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
                settings: {
                  name: 'Text_PT',
                },
                label: t('DynamicForm:textPT.text'),
                title: t('DynamicForm:textPT.title'),
              }}
              onBlur={handleBlur}
              onChange={handleChange}
            /> */}
            {/* <Editor
              name="Text_PT"
              editorState={initTextArea}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
              onChange={handleChange}
            /> */}
            {/* <Editor
              name="Text_PT"
              id="Text_PT"
              value={values.Text_PT}
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={onEditorStateChange}
            /> */}
            {/* <RichEditorExample
              editorState={state.editorState}
              onChange={setFieldValue}
              onBlur={handleBlur}
            /> */}
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
              onClick={(): void => alert(JSON.stringify(values))}
            >
              {t('DynamicForm:button.text')}
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
