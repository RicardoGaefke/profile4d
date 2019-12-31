import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MyStateProvider from '../../Initial/Context/AppContext';
import appData from '../../Initial/Context/InitialContext';
import MyApp from '../../Initial/Tests/TestsApp';
// import MyHOCTests from '../../Initial/Tests/TestsHOC';
// import { MemoryRouter } from 'react-router';
import MyAppBar from './AppBar';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('Web.Site -> AppBar', (): void => {
  const App = (): React.ReactElement => (
    <MyStateProvider initialContext={appData}>
      <MyApp>
        <MyAppBar />
      </MyApp>
    </MyStateProvider>
  );

  // const MyHOC = (): React.ReactElement => (
  //   <MyHOCTests>
  //     <MyAppBar />
  //   </MyHOCTests>
  // );

  describe('Smoke Tests', (): void => {
    it('Should exist AppBar', (): void => {
      const wrapper = shallow(<App />);
      // eslint-disable-next-line no-unused-expressions
      expect(wrapper).to.exist;
    });
  });
  describe('Childrens Return', (): void => {
    // it('Should return...', (): void => {
    //   const wrapper = mount(
    //     <MemoryRouter initialEntries={['/']}>
    //       <MyHOC />
    //     </MemoryRouter>
    //   );
    //   expect(wrapper.find('#myProfile').props().to).equal('xx');
    // });
  });
});
