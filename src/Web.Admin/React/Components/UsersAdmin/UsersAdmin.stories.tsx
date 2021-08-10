import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MemoryRouter } from 'react-router';
import UsersAdmin from './UsersAdmin';
import MyThemeHoc from '../../Initial/Theme/StoryBookHOC';
import UsersAdminPage from './UsersAdminPage';
import { IUser } from '../../../../TypeScript/Interfaces/IUser';

const usersList = [{
  Guid: '61d60296-e326-4655-8088-4a465377331b', Name: 'Lucas Neves', Email: 'lucasneves.dev@gmail.com', Active: true,
}, {
  Guid: '54662fb8-5758-479c-8c86-88241524ea6a', Name: 'Carlos de Souza', Email: 'coachcarlosdesouza@hotmail.com', Active: true,
}, {
  Guid: '0e593fc6-77e7-4493-bf46-8a9f53af709c', Name: 'Ricardo Gaefke', Email: 'ricardogaefke@hotmail.com', Active: true,
}, {
  Guid: '8a05c2e3-8dd6-4a37-b5d9-686531ec1238', Name: 'antonio de souza', Email: 'antoniomi3d@gmail.com', Active: true,
}, {
  Guid: '54d5d9db-b5c3-4aad-8cb2-26a3099fdb77', Name: 'carlos silva', Email: 'carlossilvapro4d@gmail.com', Active: true,
}, {
  Guid: '5f040f4d-0fe3-4de4-b84d-1c580b2cd626', Name: 'Valdete de Souza', Email: 'valdetesdv@outlook.com', Active: true,
}, {
  Guid: 'c61278f1-da1b-44c1-a02b-37899d76a090', Name: 'David Costa Vieira', Email: 'David@chefhealth.com.br', Active: true,
}, {
  Guid: 'be87b4fa-1a41-4607-b85b-bf25bd55f568', Name: 'davidcvieira@icloud.com', Email: 'davidcvieira@icloud.com', Active: true,
}, {
  Guid: 'e63b1ae5-ef25-448a-9e5d-b51f9e562689', Name: 'Matheus ', Email: 'contato@matheusfontenele.com', Active: true,
}, {
  Guid: '7cc17ddf-495a-4fa8-9e5d-b94ce3231fee', Name: 'JOSE WILSON GALDINO', Email: 'jwgaldino@hotmail.com', Active: true,
}, {
  Guid: '8900365b-b543-47b7-90a8-a8523e1b58a6', Name: 'Carlos de Souza', Email: 'coachcarlosdesouza@gmail.com', Active: true,
}, {
  Guid: '1e2b1e0a-d42a-43c1-b773-26dbe9bf6335', Name: 'Wanderson Henrique', Email: 'wsantos@interdev.me', Active: true,
}, {
  Guid: '98d14f4e-e5c7-4f18-a19a-5c949d0c0f02', Name: 'Cristiano Santos', Email: 'csantos@interdev.me', Active: true,
}, {
  Guid: '40c8677a-94c5-4e88-868a-ab49735057a0', Name: 'Chef Health', Email: 'contato@chefhealth.com.br', Active: true,
}, {
  Guid: 'edf93334-7b4d-4181-a199-d90c2c579cd1', Name: 'Luciana Costa', Email: 'lcosta13@hotmail.com', Active: true,
}, {
  Guid: '6571e3c8-943b-43a2-bad2-4353c3953f4f', Name: 'Larissa ', Email: 'larissamascarenhas06@gmail.com', Active: true,
}, {
  Guid: 'a105c2ea-2784-49a0-953d-554c39135227', Name: 'David Teste Hotmail', Email: 'eudcv@hotmail.com', Active: true,
}, {
  Guid: '30ff2c8c-6266-4055-a9e2-b13e55512730', Name: 'ANDRE RAMOS', Email: 'andre.ramos@imts.com.br', Active: true,
}, {
  Guid: 'f00bfd64-ad4e-4dbb-b009-dc2649ae7f7f', Name: 'Talitta', Email: 'talittams@yahoo.com.br', Active: true,
}, {
  Guid: '3a40f661-0f9b-4265-a76d-29c714cf7bb8', Name: 'JANAINA NASCIMENTO ', Email: 'JANAORDEAS@GMAIL.COM', Active: true,
}, {
  Guid: 'a639e55f-155e-4a12-88a3-296ccd48b952', Name: 'Anderson Oliveira', Email: 'And02071@gmail.com', Active: true,
}, {
  Guid: '66d8eff8-e478-47c9-8634-eaa4facdb62c', Name: 'João Italo Pompeu', Email: 'joaoitalo@hotmail.com', Active: true,
}, {
  Guid: 'c28770d7-13c7-40b8-8af0-b2258de93986', Name: 'claudio goncalves', Email: 'claudio@consultoriacg.com.br', Active: true,
}, {
  Guid: 'f96114e3-f4a1-417c-a71d-ffaffc42477f', Name: 'Patricia satiro', Email: 'patrycia.satiro@gmail.com', Active: true,
}] as IUser[];

export default {
  title: 'UsersAdmin',
  component: UsersAdmin,
  decorators: [(Component): JSX.Element => <MemoryRouter initialEntries={['/']}><Component /></MemoryRouter>],
} as Meta;

const Template: Story = (): JSX.Element => (
  <MyThemeHoc>
    <UsersAdminPage users={usersList} updatePage={(): void => {}} getData={(): void => {}} />
  </MyThemeHoc>
);

export const Basic = Template;
