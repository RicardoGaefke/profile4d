import React from 'react';
import { Grid } from '@material-ui/core';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { action, HandlerFunction } from '@storybook/addon-actions';
import MyThemeHoc from '../../../Initial/Theme/StoryBookHOC';
import Loading from './Loading';

const App = (): React.ReactElement => (
  <MyThemeHoc>
    <Grid
      container
      spacing={2}
      direction="row"
      justify="center"
      alignItems="center"
      style={{ marginTop: 100 }}
    >
      <Grid
        item
        md={6}
        xs={12}
      >
        <Loading />
      </Grid>
    </Grid>
  </MyThemeHoc>
);

storiesOf('Loading', module)
  .addDecorator((story: any): React.ReactElement => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Basic', (): React.ReactElement => (
    <App />
  ));
