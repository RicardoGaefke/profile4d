import chai, { expect } from 'chai';
// eslint-disable-next-line no-unused-vars
import Enzyme, { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
// eslint-disable-next-line no-unused-vars
import Error, { IErrorProps } from './Error';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('Error', (): void => {
  describe('Smoke Tests', (): void => {
    it('Should exist a module Error', (): void => {
      const wrapper = Error;
      // eslint-disable-next-line no-unused-expressions
      expect(wrapper).to.exist;
    });
  });
});
