import React from 'react';
import { MemoryRouter } from 'react-router';
import { Grid } from '@material-ui/core';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
// eslint-disable-next-line no-unused-vars
import { action, HandlerFunction } from '@storybook/addon-actions';
import MyThemeHoc from '../../Initial/Theme/StoryBookHOC';
import ProgressBar from './ProgressBar';

const App = (): React.ReactElement => (
  <MyThemeHoc>
    <Grid
      spacing={0}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <ProgressBar Completed={35} Total={99} />
      </Grid>
    </Grid>
  </MyThemeHoc>
);

storiesOf('ProgressBar', module)
  .addDecorator((story: any): React.ReactElement => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Basic', (): React.ReactElement => (
    <App />
  ));
