import React from 'react';
import { Grid } from '@material-ui/core';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
// eslint-disable-next-line no-unused-vars
import { action, HandlerFunction } from '@storybook/addon-actions';
import MyThemeHoc from '../../Initial/Theme/StoryBookHOC';
import Chart6 from './Chart6CanvasV2';
import fakeData from './fakeData';
import useStyles from './Styles';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';


const App = (): React.ReactElement => {
  const classes = useStyles();

  return (
    <MyThemeHoc>
      <Grid
        container
        spacing={0}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          container
          justify="center"
          className={classes.container}
        >
          <Chart6
            printing={false}
            profiles={fakeData.Profiles as IProfiles[]}
          />
        </Grid>
      </Grid>
    </MyThemeHoc>
  );
};

storiesOf('Chart06', module)
  .addDecorator((story: any): React.ReactElement => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Basic', (): React.ReactElement => (
    <App />
  ));
