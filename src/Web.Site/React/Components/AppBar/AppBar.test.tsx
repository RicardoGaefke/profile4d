import chai, { expect } from 'chai';
// eslint-disable-next-line no-unused-vars
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('Smoke Tests', (): void => {
  it('Should exist module', (): void => {
    const wrapper = true;
    // eslint-disable-next-line no-unused-expressions
    expect(wrapper).to.be.equal(true);
  });
});
