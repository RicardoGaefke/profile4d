import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MemoryRouter } from 'react-router';
import UsersAdmin from './UsersAdmin';
import { IInitialContext } from '../../../../TypeScript/Interfaces/IInitialContext';
import MyThemeHoc from '../../Initial/Theme/StoryBookHOC';

export default {
  title: 'UsersAdmin',
  component: UsersAdmin,
  decorators: [(Component): JSX.Element => <MemoryRouter initialEntries={['/']}><Component /></MemoryRouter>],
} as Meta;

const contextDark = {
  Ready: false,
  Theme: 'dark',
  Language: 'ENG',
  ConsentCookie: true,
  FirstName: '',
  LastName: '',
  Email: '',
  KeepConnected: false,
  Drawer: false,
  IsAuthenticated: false,
  Config: false,
} as IInitialContext;

const Template: Story = (args): JSX.Element => (
  <MyThemeHoc>
    <>UsersAdmin</>
  </MyThemeHoc>
);

export const Basic = Template;
