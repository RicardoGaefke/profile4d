import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import { TextField, Button } from '@material-ui/core';
import { withFormik } from 'formik';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import Validation from './Form.Validation';
import InitialValues from './Form.InitialValues';
// eslint-disable-next-line no-unused-vars
import { IForgotForm } from '../../../../../TypeScript/Interfaces/IForgotForm';
import ForgotForm from './Form';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('Web.Identity -> ForgotForm.Form', (): void => {
  const MyForm = withFormik<WithTranslation, IForgotForm>({
    displayName: 'ForgotForm',
    enableReinitialize: true,
    mapPropsToValues: (): IForgotForm => (InitialValues),
    validationSchema: Validation,
    handleSubmit: (values, { setSubmitting }): void => {
      setSubmitting(false);
    },
  })(ForgotForm);

  const Forgot = withTranslation()(MyForm);

  describe('Smoke Tests', (): void => {
    it('Should exist ForgotForm', (): void => {
      const wrapper = mount(<Forgot />);
      // eslint-disable-next-line no-unused-expressions
      expect(wrapper).to.exist;
    });
  });
  describe('Tags Existence', (): void => {
    it('Should ForgotForm return a tag form length equal 1 when is called', (): void => {
      const wrapper = mount(<Forgot />);
      expect(wrapper.find(ForgotForm).find('form')).to.have.length(1);
    });
    it('Should ForgotForm return a tag TextField length equal 5 when is called', (): void => {
      const wrapper = mount(<Forgot />);
      expect(wrapper.find(ForgotForm).find(TextField)).to.have.length(1);
    });
    it('Should ForgotForm return a tag Button length equal 1 when is called', (): void => {
      const wrapper = mount(<Forgot />);
      expect(wrapper.find(ForgotForm).find(Button)).to.have.length(1);
    });
  });
  describe('Form Properties', (): void => {
    describe('TextField Properties', (): void => {
      it('Should return a TextField in node 0 with correct name by default', (): void => {
        const wrapper = mount(<Forgot />);
        expect(wrapper.find(ForgotForm).find(TextField).get(0).props.name).equal('Email');
      });
    });
    describe('Button Properties', (): void => {
      it('Should return a Button with type "submit" by default', (): void => {
        const wrapper = mount(<Forgot />);
        expect(wrapper.find(ForgotForm).find(Button).props().type).equal('submit');
      });
      it('Should return a Button with correct title by default', (): void => {
        const wrapper = mount(<Forgot />);
        expect(wrapper.find(ForgotForm).find(Button).props().title).equal('button.title');
      });
      it('Should return a Button with type disabled: isSubmitting equal "false" by default', (): void => {
        const wrapper = mount(<Forgot />);
        expect(wrapper.find(ForgotForm).find(Button).props().disabled).equal(false);
      });
      it('Should return a Button with correct children by default', (): void => {
        const wrapper = mount(<Forgot />);
        expect(wrapper.find(ForgotForm).find(Button).props().children).equal('button.text');
      });
    });
  });
  describe('Props Tests', (): void => {
    describe('Props -> i18n', (): void => {
      it('Should ForgotForm with i18n has been initialized by default', (): void => {
        const wrapper = mount(<Forgot />);
        expect(wrapper.find(ForgotForm).props().i18n.isInitialized).equal(true);
      });
      it('Should ForgotForm with i18n return language equal PT by default', (): void => {
        const wrapper = mount(<Forgot />);
        expect(wrapper.find(ForgotForm).props().i18n.language).equal('PT');
      });
      it('Should ForgotForm with i18n return languages equal {} by default', (): void => {
        const wrapper = mount(<Forgot />);
        expect(wrapper.find(ForgotForm).props().i18n.options.resources).eql({ ENG: {}, PT: {} });
      });
      it('Should ForgotForm with i18n return languages equal {} by default', (): void => {
        const wrapper = mount(<Forgot />);
        expect(wrapper.find(ForgotForm).props().i18n.options.debug).eql(false);
      });
    });
    describe('Props -> tReady', (): void => {
      it('Should ForgotForm with tReady props equal true by default', (): void => {
        const wrapper = mount(<Forgot />);
        expect(wrapper.find(ForgotForm).props().tReady.valueOf()).equal(true);
      });
    });
  });
  describe('Values Tests', (): void => {
    it('Should MyForm with Email initialValue equal empty by default', (): void => {
      const wrapper = mount(<Forgot />);
      expect(wrapper.find(ForgotForm).props().values.Email).equal('');
    });
  });
  describe('Errors Tests', (): void => {
    it('Should MyForm with errors.Email equal undefined by default', (): void => {
      const wrapper = mount(<Forgot />);
      expect(wrapper.find(ForgotForm).props().errors.Email).equal(undefined);
    });
  });
  describe('Touched Tests', (): void => {
    it('Should MyForm with touched.Email equal undefined by default', (): void => {
      const wrapper = mount(<Forgot />);
      expect(wrapper.find(ForgotForm).props().touched.Email).equal(undefined);
    });
  });
});
