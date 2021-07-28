import React from 'react';
import { Grid } from '@material-ui/core';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { PDFViewer, Document } from '@react-pdf/renderer';
import { withConsole } from '@storybook/addon-console';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { action, HandlerFunction } from '@storybook/addon-actions';
import MyThemeHoc from '../../../Initial/Theme/StoryBookHOC';
import fakeData from '../fakeData';
import useStyles from '../Styles';
import Page01 from './Page01';


const App = (): React.ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        >
          <PDFViewer
            style={{
              display: 'flex',
              width: '100%',
              height: '100vh',
              flex: 1,
              border: 0,
            }}
          >
            <Document>
              <Page01 data={fakeData} />
            </Document>
          </PDFViewer>
        </Grid>
      </Grid>
    </MyThemeHoc>
  );
};

storiesOf('Page01', module)
  .addDecorator((story: any): React.ReactElement => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Basic', (): React.ReactElement => (
    <App />
  ));
