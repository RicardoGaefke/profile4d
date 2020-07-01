import React from 'react';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import 'suneditor/dist/css/suneditor.min.css';
import { MemoryRouter } from 'react-router';
import MyThemeHOC from '../../Initial/Theme/StoryBookHOC';
import MyEditor from './RichEditor';

const App = (): React.ReactElement => (
  <MyThemeHOC>
    <MyEditor
      value="teste"
      name="Text"
    />
  </MyThemeHOC>
);

const JustEditor = (): React.ReactElement => (
  <MyEditor
    value="teste"
    name="Text"
  />
);

storiesOf('RichEditor', module)
  .addDecorator((story: any): React.ReactElement => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Default', (): React.ReactElement => (
    <App />
  ))
  .add('Just Editor', (): React.ReactElement => (
    <JustEditor />
  ));
