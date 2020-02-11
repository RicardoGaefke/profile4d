import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
// eslint-disable-next-line no-unused-vars
import { action, HandlerFunction } from '@storybook/addon-actions';
import MyImage from './Image';
import NoImage from './NoImage';

const AppBasic = (): React.ReactElement => (
  <MyImage alt="Este é um exemplo de imagem" image="/img/logo_original.png" />
);

const AppPhoto = (): React.ReactElement => (
  <MyImage alt="Este é um exemplo com foto" image="/img/team.jpg" />
);

const AppNoImage = (): React.ReactElement => (
  <NoImage alt="Sem imagem" image="" />
);

storiesOf('Images.Show', module)
  .addDecorator((story: any): React.ReactElement => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Basic', (): React.ReactElement => (
    <AppBasic />
  ))
  .add('With photo', (): React.ReactElement => (
    <AppPhoto />
  ))
  .add('No photo', (): React.ReactElement => (
    <AppNoImage />
  ));
