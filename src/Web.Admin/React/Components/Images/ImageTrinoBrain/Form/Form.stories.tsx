import React from 'react';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { MemoryRouter } from 'react-router';
import MyThemeHOC from '../../../../Initial/Theme/StoryBookHOC';
import MyForm from '../../ImageForm/Form/Form.Context';

const App = (): React.ReactElement => (
  <MyThemeHOC>
    <MyForm />
  </MyThemeHOC>
);

storiesOf('Images.TrinoBrain', module)
  .addDecorator((story: any): React.ReactElement => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Default', (): React.ReactElement => (
    <App />
  ));
