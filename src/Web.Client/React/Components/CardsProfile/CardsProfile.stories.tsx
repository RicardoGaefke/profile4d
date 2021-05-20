import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { Grid } from '@material-ui/core';
import CardsProfile from './CardsProfile';
import MyThemeHoc from '../../Initial/Theme/StoryBookHOC';

const App = (): React.ReactElement => (
  <MyThemeHoc>
    <Grid
      spacing={0}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <CardsProfile CardsText="teste" CardsProfileTitle="teste" />
      </Grid>
    </Grid>
  </MyThemeHoc>
);

storiesOf('CardsProfile', module)
  .addDecorator((story: any): React.ReactElement => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Basic', (): React.ReactElement => (
    <App />
  ));
