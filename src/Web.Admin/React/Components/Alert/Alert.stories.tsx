import React from 'react';
// import { withFormik } from 'formik';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { MemoryRouter } from 'react-router';
import MyThemeHOC from '../../Initial/Theme/StoryBookHOC';
import Alert from './Alert';

const App = (props: React.PropsWithChildren<any>): React.ReactElement => {
  const { children } = props;

  return (
    <MyThemeHOC>
      {children}
    </MyThemeHOC>
  );
};

storiesOf('Alert', module)
  .addDecorator((story: any): React.ReactElement => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Info', (): React.ReactElement => (
    <App>
      <Alert
        title="Info"
        text="Este é um exemplo de alerta!"
        severity="info"
      />
    </App>
  ))
  .add('Warning', (): React.ReactElement => (
    <App>
      <Alert
        title="Warning"
        text="Este é um exemplo de alerta!"
        severity="warning"
      />
    </App>
  ))
  .add('Error', (): React.ReactElement => (
    <App>
      <Alert
        title="Error"
        text="Este é um exemplo de alerta!"
        severity="error"
      />
    </App>
  ))
  .add('Success', (): React.ReactElement => (
    <App>
      <Alert
        title="Success"
        text="Este é um exemplo de alerta!"
        severity="success"
      />
    </App>
  ));
