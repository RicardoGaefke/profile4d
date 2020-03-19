import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import MyThemeHoc from '../../../Initial/Theme/StoryBookHOC';
import MyApp from './Questions';

const App = (): React.ReactElement => (
  <MyThemeHoc>
    <MyApp />
  </MyThemeHoc>
);

// Alterar o componente      ▼
storiesOf('Questions.DyObservationThirteen', module)
  .addDecorator((story: any): React.ReactElement => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Default', (): React.ReactElement => (
    <App />
  ));
