import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import 'i18next';
// eslint-disable-next-line no-unused-vars
import { withFormik, FormikProps } from 'formik';
// eslint-disable-next-line no-unused-vars
import { WithTranslation, withTranslation } from 'react-i18next';
import { withConsole } from '@storybook/addon-console';
// eslint-disable-next-line no-unused-vars
import { action, HandlerFunction } from '@storybook/addon-actions';
import MyThemeHoc from '../../../Initial/Theme/StoryBookHOC';
import LoginForm from './Form';
// eslint-disable-next-line no-unused-vars
import { ILoginForm } from '../../../../../TypeScript/Interfaces/ILoginForm';
import InitialValues from './Form.InitialValues';
import Validation from './Form.Validation';

const MyForm = withFormik<WithTranslation, ILoginForm>({
  displayName: 'LoginForm',
  enableReinitialize: true,
  mapPropsToValues: (): ILoginForm => (InitialValues),
  validationSchema: Validation,
  handleSubmit: (values, { setSubmitting }): void => {
    setSubmitting(false);
  },
})(LoginForm);

const Form = withTranslation()(MyForm);

const App = (): React.ReactElement => (
  <MyThemeHoc>
    <Form />
  </MyThemeHoc>
);

storiesOf('Login Form', module)
  .addDecorator((story: any): React.ReactElement => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Basic', (): React.ReactElement => (
    <App />
  ));
