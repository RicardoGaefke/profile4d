import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { action, HandlerFunction } from '@storybook/addon-actions';
import MyThemeHoc from '../../../Initial/Theme/StoryBookHOC';
import Advice from './Advice';

const App = (): React.ReactElement => (
  <MyThemeHoc>
    <Advice />
  </MyThemeHoc>
);

storiesOf('Advice', module)
  .addDecorator((story: any): React.ReactElement => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Info', (): React.ReactElement => (
    <App />
  ));
