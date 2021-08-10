import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MemoryRouter } from 'react-router';
import UsersAdmin from './UsersAdmin';
import MyThemeHoc from '../../Initial/Theme/StoryBookHOC';

export default {
  title: 'UsersAdmin',
  component: UsersAdmin,
  decorators: [(Component): JSX.Element => <MemoryRouter initialEntries={['/']}><Component /></MemoryRouter>],
} as Meta;

const Template: Story = (): JSX.Element => (
  <MyThemeHoc>
    <>UsersAdmin</>
  </MyThemeHoc>
);

export const Basic = Template;
