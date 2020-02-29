import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import MyThemeHoc from '../../../../Initial/Theme/StoryBookHOC';
import MyApp from './Quantity';

const AppZero = (): React.ReactElement => (
  <MyThemeHoc>
    <MyApp minimum={99} total={0} />
  </MyThemeHoc>
);

const AppLess = (): React.ReactElement => (
  <MyThemeHoc>
    <MyApp minimum={99} total={30} />
  </MyThemeHoc>
);

const AppEqual = (): React.ReactElement => (
  <MyThemeHoc>
    <MyApp minimum={99} total={99} />
  </MyThemeHoc>
);

const AppMore = (): React.ReactElement => (
  <MyThemeHoc>
    <MyApp minimum={99} total={120} />
  </MyThemeHoc>
);

storiesOf('Questions.Minimum', module)
  .addDecorator((story: any): React.ReactElement => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Zero', (): React.ReactElement => (
    <AppZero />
  ))
  .add('Less', (): React.ReactElement => (
    <AppLess />
  ))
  .add('Equal', (): React.ReactElement => (
    <AppEqual />
  ))
  .add('More', (): React.ReactElement => (
    <AppMore />
  ));
