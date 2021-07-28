import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { action, HandlerFunction } from '@storybook/addon-actions';
import MyThemeHoc from '../../Initial/Theme/StoryBookHOC';
import Alert from './Alert';

const MyTheme = (props: React.PropsWithChildren<React.ReactNode>): React.ReactElement => {
  const { children } = props;

  return (
    <MyThemeHoc>
      {children}
    </MyThemeHoc>
  );
};

const AlertInfo = (): React.ReactElement => (
  <Alert title="Info" text="Some info" severity="info" />
);

const AlertWarning = (): React.ReactElement => (
  <Alert title="Warning" text="Some warn" severity="warning" />
);

const AlertError = (): React.ReactElement => (
  <Alert title="Error" text="Some error" severity="error" />
);

const AlertSuccess = (): React.ReactElement => (
  <Alert title="Success" text="Some success" severity="success" />
);

storiesOf('Alert', module)
  .addDecorator((story: any): React.ReactElement => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Info', (): React.ReactElement => (
    <MyTheme>
      <AlertInfo />
      <AlertWarning />
      <AlertError />
      <AlertSuccess />
    </MyTheme>
  ));
