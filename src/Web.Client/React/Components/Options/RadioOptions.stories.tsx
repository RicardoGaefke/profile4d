import React from 'react';
import { withTranslation } from 'react-i18next';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
// eslint-disable-next-line no-unused-vars
import { action, HandlerFunction } from '@storybook/addon-actions';
import MyThemeHoc from '../../Initial/Theme/StoryBookHOC';
import RadioOptionsForm from './RadioOptions.form';

const DefaultForm = withTranslation()(RadioOptionsForm);

const App = (): React.ReactElement => (
  <MyThemeHoc>
    <DefaultForm />
  </MyThemeHoc>
);

storiesOf('Options', module)
  .addDecorator((story: any): React.ReactElement => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Radio', (): React.ReactElement => (
    <App />
  ));
