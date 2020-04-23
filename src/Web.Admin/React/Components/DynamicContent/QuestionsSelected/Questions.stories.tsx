import React from 'react';
import { Typography, Grid } from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import MyThemeHoc from '../../../Initial/Theme/StoryBookHOC';
// eslint-disable-next-line no-unused-vars
import { IQuestion } from '../../../../../TypeScript/Interfaces/IQuestion';
import MySelect from '../Select/Select';
import MyQuestions from '../Question/Question';
import MyQuantity from '../Quantity/Quantity';
import setLanguage from './Language';

const Quest: IQuestion = {
  Guid: 'b60ae1ed-d32a-4e74-bcf9-0a6c18ac3501',
  Active: true,
  Active_Created: '2020-03-06 21:33:22.087',
  Active_CreatedBy: 'Ricardo Gaefke',
  Title_PT: 'Título em Português',
  Title_ENG: 'Title in English',
  Text_PT: 'Texto em Português',
  Text_ENG: 'Text in English',
  CreatedBy: 'Ricardo Gaefke',
  Created: '2020-03-06 21:33:22.093',
};

const handleChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void => {
  // eslint-disable-next-line no-console
  console.log(checked);
};

const App = withTranslation()(
  (props: WithTranslation): React.ReactElement<HTMLElement> => {
    const { t } = props;
    setLanguage();

    return (
      <MyThemeHoc>
        <Typography variant="h4" align="center">
          {t('DynamicQuestions:title')}
        </Typography>
        <Grid
          container
          spacing={2}
          justify="center"
          alignItems="center"
        >
          <Grid item md={6} xs={6}>
            <MySelect />
          </Grid>
          <Grid item md={6} xs={6}>
            <MyQuantity total={99} minimum={1} />
          </Grid>
        </Grid>
        <MyQuestions question={Quest} number={1} handleChange={handleChange} to="question" />
      </MyThemeHoc>
    );
  },
);

// Alterar o componente      ▼
storiesOf('Questions.QuestionSelected', module)
  .addDecorator((story: any): React.ReactElement => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Default', (): React.ReactElement => (
    <App />
  ));
