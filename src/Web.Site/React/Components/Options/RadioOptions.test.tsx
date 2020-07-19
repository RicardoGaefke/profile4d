import React from 'react';
import { withTranslation } from 'react-i18next';
import chai, { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import appData from '../../Initial/Context/InitialContext';
import MyStateProvider from '../../Initial/Context/AppContext';
import MyApp from '../../Initial/Tests/TestsApp';
import RadioOptionsForm from './RadioOptions.form';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

const DefaultForm = withTranslation()(RadioOptionsForm);

describe('Web.Site -> Home.RadioOptionsForm', (): void => {
  const App = (): React.ReactElement<any> => (
    <MyStateProvider initialContext={appData}>
      <MyApp>
        <DefaultForm />
      </MyApp>
    </MyStateProvider>
  );

  describe('Smoke Tests', (): void => {
    it('Should exist RadioOptionsForm', (): void => {
      const wrapper = shallow(<App />);
      // eslint-disable-next-line no-unused-expressions
      expect(wrapper).to.exist;
    });
  });
  describe('InitialContext Provider', (): void => {
    it('Should return App with Ready context like "false" by default', (): void => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(MyStateProvider).props().initialContext.Ready).equal(false);
    });
    it('Should return App with Theme context like "light" by default', (): void => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(MyStateProvider).props().initialContext.Theme).equal('light');
    });
    it('Should return App with Language context like "PT" by default', (): void => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(MyStateProvider).props().initialContext.Language).equal('PT');
    });
    it('Should return App with ConsentCookie context like "true" by default', (): void => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(MyStateProvider).props().initialContext.ConsentCookie).equal(true);
    });
    it('Should return App with Name context like "Profile4d" by default', (): void => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(MyStateProvider).props().initialContext.Name).equal('Profile4d');
    });
    it('Should return App with Email context like "empty" by default', (): void => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(MyStateProvider).props().initialContext.Email).equal('');
    });
    it('Should return App with KeepConnected context like "false" by default', (): void => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(MyStateProvider).props().initialContext.KeepConnected).equal(false);
    });
    it('Should return App with Drawer context like "false" by default', (): void => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(MyStateProvider).props().initialContext.Drawer).equal(false);
    });
    it('Should return App with IsAuthenticated context like "false" by default', (): void => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(MyStateProvider).props().initialContext.IsAuthenticated).equal(false);
    });
  });
  // describe('Childrens Return', (): any => {
  //   // it('Should exist Typography', (): void => {
  //   //   const wrapper = shallow(<RadioOptionsForm />);
  //   //   expect(testWrap).to.have.length(1);
  //   // });
  //   // it('Should exist Typography', (): void => {
  //   //   const wrapper = shallow(<App />);
  //   //   expect(wrapper.props().Container).to.have.length(1);
  //   // });
  // });
});
