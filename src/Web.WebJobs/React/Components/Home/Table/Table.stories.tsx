import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
// eslint-disable-next-line no-unused-vars
import { action, HandlerFunction } from '@storybook/addon-actions';
import MyThemeHoc from '../../../Initial/Theme/StoryBookHOC';
import Table from './Table';
// eslint-disable-next-line no-unused-vars
import { IEmailRow } from './IProps';

const data = [
  {
    Id: 1,
    Email: 'ricardogaefke@gmail.com',
    Dequeue: 1,
    SendGridKey: '',
    When: '09/07/2020 11:32:32',
  },
  {
    Id: 2,
    Email: 'carlos@gmail.com',
    Dequeue: 1,
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
    <Table rows={data} />
  </MyThemeHoc>
);

storiesOf('Home.Table', module)
  .addDecorator((story: any): React.ReactElement => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Basic', (): React.ReactElement => (
    <App />
  ));
