import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MyStateProvider from '../../../Initial/Context/AppContext';
import appData from '../../../Initial/Context/InitialContext';
import MyApp from '../../../Initial/Tests/TestsApp';
import MyForm, { IForm } from './Form';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('Web.Identity -> CreateUserForm.Form', (): void => {
  const App = (): React.ReactElement => (
    <MyStateProvider initialContext={appData}>
      <MyApp>
        <MyForm />
      </MyApp>
    </MyStateProvider>
  );

  describe('Smoke Tests', (): void => {
    it('Should exist MyForm', (): void => {
      const wrapper = mount(<App />);
    });
  });
});