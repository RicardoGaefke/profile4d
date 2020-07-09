import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
// eslint-disable-next-line no-unused-vars
import { action, HandlerFunction } from '@storybook/addon-actions';
import MyThemeHoc from '../../../Initial/Theme/StoryBookHOC';
import Tabs from './Tabs';
// eslint-disable-next-line no-unused-vars
import { IEmailRow } from '../Table/IProps';

const data = [
  {
    Id: 1,
    Email: 'ricardogaefke@gmail.com',
    SendGridKey: '',
    When: '09/07/2020 11:32:32',
  },
  {
    Id: 2,
    Email: 'carlos@gmail.com',
    SendGridKey: 'chave2',
    When: '09/07/2020 11:32:32',
  },
  {
    Id: 3,
    Email: 'ligia@gmail.com',
    SendGridKey: 'chave3',
    When: '09/07/2020 11:32:32',
  },
] as IEmailRow[];

const App = (): React.ReactElement => (
  <MyThemeHoc>
    <Tabs mi4d={data} profile4d={data} />
  </MyThemeHoc>
);

storiesOf('Home.Tabs', module)
  .addDecorator((story: any): React.ReactElement => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Basic', (): React.ReactElement => (
    <App />
  ));
