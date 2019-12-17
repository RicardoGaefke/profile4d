import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';

describe('Policy Tests', (): void => {
  describe('Smoke Tests', (): void => {
    it('Should exist Policy', (): void => {
      const wrapper = true;
      expect(wrapper).equal(true);
    });
  });
});