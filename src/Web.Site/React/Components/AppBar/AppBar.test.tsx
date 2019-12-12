import chai, { expect } from 'chai';
// eslint-disable-next-line no-unused-vars
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('Smoke Tests', (): void => {
  it('Should return true', (): void => {
    const foo: boolean = true;
    expect(foo).to.be.equal(true);
  });
});
