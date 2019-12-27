import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
// eslint-disable-next-line no-unused-vars
import { action, HandlerFunction } from '@storybook/addon-actions';
import MyThemeHoc from '../../../Initial/Theme/StoryBookHOC';
import MyApp from '../../../Initial/App';

const App = (): React.ReactElement => (
  <MyThemeHoc>
    <MyApp />
  </MyThemeHoc>
);

storiesOf('Forms', module)
  .addDecorator((story: any): React.ReactElement => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Login', (): React.ReactElement => (
    <App />
  ));

storiesOf('Forms', module)
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Create User', (): React.ReactElement => (
    <MemoryRouter
      initialEntries={['/', '/account/', '/account/create/']}
      initialIndex={2}
    >
      <App />
    </MemoryRouter>
  ));
