// eslint-disable-next-line no-unused-vars
import React, { ChangeEvent } from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { List } from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { IQuestion } from '../../../../../TypeScript/Interfaces/IQuestion';
import MyThemeHoc from '../../../Initial/Theme/StoryBookHOC';
import MyApp from './Question';

const Quest: IQuestion = {
  Guid: 'b60ae1ed-d32a-4e74-bcf9-0a6c18ac3501',
  Active: true,
  Active_Created: '2020-03-06 21:33:22.087',
  Active_CreatedBy: 'Ricardo Gaefke',
  Category: 2,
  Title_PT: 'Título em Português',
  Title_ENG: 'Title in English',
  Text_PT: 'Texto em Português',
  Text_ENG: 'Text in English',
  CreatedBy: 'Ricardo Gaefke',
  Created: '2020-03-06 21:33:22.093',
};

const handleChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean): void => {
  console.log(checked);
};

const App = (): React.ReactElement => (
  <MyThemeHoc>
    <List>
      <MyApp question={Quest} number={1} handleChange={handleChange} to="question" />
    </List>
  </MyThemeHoc>
);

storiesOf('Questions.Question', module)
  .addDecorator((story: any): React.ReactElement => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Default', (): React.ReactElement => (
    <App />
  ));
