// // eslint-disable-next-line no-unused-vars
// import React from 'react';
// import chai, { expect } from 'chai';
// import Enzyme, { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import chaiEnzyme from 'chai-enzyme';

// import appData from '../../../Initial/Context/InitialContext';
// import MyStateProvider from '../../../Initial/Context/AppContext';
// import MyApp from '../../../Initial/Theme/StoryBookApp';

// import MyPolicy from './Main';

// const App = (): React.ReactElement<any> => (
//   <MyStateProvider initialContext={appData}>
//     <MyApp>
//       <MyPolicy />
//     </MyApp>
//   </MyStateProvider>
// );

// chai.use(chaiEnzyme());
// Enzyme.configure({ adapter: new Adapter() });

// describe('Policy Tests', (): void => {
//   describe('Smoke Tests', (): void => {
//     it('Should exist Policy', (): void => {
//       const wrapper = shallow(<App />);
//       expect(wrapper.props().initialContext.Theme).equal('light');
//     });
//   });
// });
