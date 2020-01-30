import React from 'react';
// import { withFormik } from 'formik';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { MemoryRouter } from 'react-router';
import MyThemeHOC from '../../../../Initial/Theme/StoryBookHOC';
// // eslint-disable-next-line no-unused-vars
// import { IStaticFirstPage } from '../../../../../../TypeScript/Interfaces/IStaticContent';
// import initialValues from './Context/InitialValues';
// import useStyles from './Form.Styles';
import MyForm from './Context/Context';

// const MyNewForm = withFormik({
//   displayName: 'Form',
//   enableReinitialize: true,
//   mapPropsToValues: (): IStaticFirstPage => (initialValues),
//   handleSubmit: (values: IStaticFirstPage, { resetForm, setSubmitting }): void => {
//     // eslint-disable-next-line no-alert
//     alert(JSON.stringify(values));
//     setSubmitting(false);
//     resetForm();
//   },
// })(MyForm);

const App = (): React.ReactElement => (
  <MyThemeHOC>
    <MyForm />
  </MyThemeHOC>
);

storiesOf('Form', module)
  .addDecorator((story: any): React.ReactElement => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Default', (): React.ReactElement => (
    <App />
  ));
