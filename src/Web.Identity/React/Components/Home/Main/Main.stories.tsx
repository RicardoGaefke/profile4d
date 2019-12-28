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

/* this stories has double header and footer because I imported HOC + App to use full router
I don't mind as I just want to see the form */
storiesOf('Forms', module)
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Create User', (): React.ReactElement => (
    <MemoryRouter
      initialEntries={['/account/create/']}
    >
      <App />
    </MemoryRouter>
  ));

storiesOf('Forms', module)
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Forgot Form', (): React.ReactElement => (
    <MemoryRouter
      initialEntries={['/account/forgot/']}
    >
      <App />
    </MemoryRouter>
  ));
