import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import appData from '../../../Initial/Context/InitialContext';
import MyStateProvider from '../../../Initial/Context/AppContext';
import MyApp from '../../../Initial/Tests/TestsApp';
import Banner from './Banner';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

const App = (): React.ReactElement<any> => (
  <MyStateProvider initialContext={appData}>
    <MyApp>
      <Banner />
    </MyApp>
  </MyStateProvider>
);

describe('Home.Banner', (): void => {
  describe('Smoke Tests', (): void => {
    it('Should exist Banner', (): void => {
      const wrapper = shallow(<App />);
      // eslint-disable-next-line no-unused-expressions
      expect(wrapper).to.exist;
    });
  });
  describe('InitialContext Provider', (): void => {
    it('Should return Theme like "light" by default', (): void => {
      const wrapper = shallow(<App />);
      expect(wrapper.props().initialContext.Theme).equal('light');
    });
    it('Should return Language like "PT" by default', (): void => {
      const wrapper = shallow(<App />);
      expect(wrapper.props().initialContext.Language).equal('PT');
    });
  });
});
