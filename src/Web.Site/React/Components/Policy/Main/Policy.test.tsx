// // eslint-disable-next-line no-unused-vars
// import React from 'react';
// // eslint-disable-next-line no-unused-vars
// import i18next from 'i18next';
// // eslint-disable-next-line no-unused-vars
// import { withTranslation } from 'react-i18next';
// import chai, { expect } from 'chai';
// // eslint-disable-next-line no-unused-vars
// import './Language';
// import Enzyme, { mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import chaiEnzyme from 'chai-enzyme';

// import { BrowserRouter } from 'react-router-dom';
// // eslint-disable-next-line no-unused-vars
// import { ICustomWindow } from '../../../../../TypeScript/Interfaces/ICustomWindow';
// import MyStateProvider from '../../../Initial/Context/AppContext';

// import MyPolicy from './Main';

// const App = (): React.ReactElement<any> => {
//   const appData = (window as unknown as ICustomWindow).MyInitialState;
//   delete (window as unknown as ICustomWindow).MyInitialState;

//   return (
//     <BrowserRouter>
//       <MyStateProvider initialContext={appData}>
//         <MyPolicy />
//       </MyStateProvider>
//     </BrowserRouter>
//   );
// };

// chai.use(chaiEnzyme());
// Enzyme.configure({ adapter: new Adapter() });

// describe('Policy Tests', (): void => {
//   describe('Smoke Tests', (): void => {
//     it('Should exist Policy', (): void => {
//       const wrapper = mount(<App />);
//       expect(wrapper.props()).equal('');
//     });
//   });
// });
