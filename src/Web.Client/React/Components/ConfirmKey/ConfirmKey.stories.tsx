import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { Grid } from '@material-ui/core';
import ConfirmKey from './ConfirmKey';
import MyThemeHoc from '../../Initial/Theme/StoryBookHOC';

const App = (): React.ReactElement => (
  <MyThemeHoc>
    <Grid
      spacing={0}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <ConfirmKey />
      </Grid>
    </Grid>
  </MyThemeHoc>
);

storiesOf('ConfirmKey', module)
  .addDecorator((story: any): React.ReactElement => (
    <MemoryRouter initialEntries={['/guid']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Basic', (): React.ReactElement => (
    <App />
  ));
