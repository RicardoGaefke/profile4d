import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { withFormik } from 'formik';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { ICreateUser } from '../../../../../TypeScript/Interfaces/ICreateUser';
import Validation from './Form.Validation';
import InitialValues from './Form.InitialValues';
import CreateUserForm from './Form';
// import MyStateProvider from '../../../Initial/Context/AppContext';
// import appData from '../../../Initial/Context/InitialContext';
// import MyApp from '../../../Initial/Tests/TestsApp';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('Web.Identity -> CreateUserForm.Form', (): void => {
  const MyForm = withFormik<WithTranslation, ICreateUser>({
    displayName: 'CreateUser',
    enableReinitialize: true,
    mapPropsToValues: (): ICreateUser => (InitialValues),
    validationSchema: Validation,
    handleSubmit: (values, { setSubmitting }): void => {
      setSubmitting(false);
    },
  })(CreateUserForm);

  const CreateUser = withTranslation()(MyForm);

  describe('Smoke Tests', (): void => {
    it('Should exist CreateUser', (): void => {
      const wrapper = mount(<CreateUser />);
      // eslint-disable-next-line no-unused-expressions
      expect(wrapper).to.exist;
    });
    it('Should exist MyForm inside of CreateUser', (): void => {
      const wrapper = mount(<CreateUser />);
      // eslint-disable-next-line no-unused-expressions
      expect(wrapper.find(MyForm)).to.exist;
    });
    it('Should exist CreateUserForm inside of CreateUser', (): void => {
      const wrapper = mount(<CreateUser />);
      // eslint-disable-next-line no-unused-expressions
      expect(wrapper.find(CreateUserForm)).to.exist;
    });
  });
  describe('Props Tests', (): void => {
    describe('Props -> i18n', (): void => {
      it('Should MyForm with i18n has been initialized by default', (): void => {
        const wrapper = mount(<CreateUser />);
        expect(wrapper.find(MyForm).props().i18n.isInitialized).equal(true);
      });
      it('Should MyForm with i18n return language equal PT by default', (): void => {
        const wrapper = mount(<CreateUser />);
        expect(wrapper.find(MyForm).props().i18n.language).equal('PT');
      });
      it('Should MyForm with i18n return languages equal {} by default', (): void => {
        const wrapper = mount(<CreateUser />);
        expect(wrapper.find(MyForm).props().i18n.options.resources).eql({ ENG: {}, PT: {} });
      });
      it('Should MyForm with i18n return languages equal {} by default', (): void => {
        const wrapper = mount(<CreateUser />);
        expect(wrapper.find(MyForm).props().i18n.options.debug).eql(false);
      });
    });
    describe('Props -> tReady', (): void => {
      it('Should MyForm with tReady props equal true by default', (): void => {
        const wrapper = mount(<CreateUser />);
        expect(wrapper.find(MyForm).props().tReady.valueOf()).equal(true);
      });
    });
  });
  describe('Values Tests', (): void => {
    it('Should MyForm with Name initialValue equal empty by default', (): void => {
      const wrapper = mount(<CreateUser />);
      expect(wrapper.find(CreateUserForm).props().values.Name).equal('');
    });
    it('Should MyForm with Email initialValue equal empty by default', (): void => {
      const wrapper = mount(<CreateUser />);
      expect(wrapper.find(CreateUserForm).props().values.Email).equal('');
    });
    it('Should MyForm with Password initialValue equal empty by default', (): void => {
      const wrapper = mount(<CreateUser />);
      expect(wrapper.find(CreateUserForm).props().values.Password).equal('');
    });
    it('Should MyForm with ConfirmEmail initialValue equal empty by default', (): void => {
      const wrapper = mount(<CreateUser />);
      expect(wrapper.find(CreateUserForm).props().values.ConfirmEmail).equal('');
    });
    it('Should MyForm with ConfirmPassword initialValue equal empty by default', (): void => {
      const wrapper = mount(<CreateUser />);
      expect(wrapper.find(CreateUserForm).props().values.ConfirmPassword).equal('');
    });
  });
  describe('Errors Tests', (): void => {
    it('Should MyForm with errors.Name equal undefined by default', (): void => {
      const wrapper = mount(<CreateUser />);
      expect(wrapper.find(CreateUserForm).props().errors.Name).equal(undefined);
    });
    it('Should MyForm with errors.Email equal undefined by default', (): void => {
      const wrapper = mount(<CreateUser />);
      expect(wrapper.find(CreateUserForm).props().errors.Email).equal(undefined);
    });
    it('Should MyForm with errors.Password equal undefined by default', (): void => {
      const wrapper = mount(<CreateUser />);
      expect(wrapper.find(CreateUserForm).props().errors.Password).equal(undefined);
    });
    it('Should MyForm with errors.ConfirmEmail equal undefined by default', (): void => {
      const wrapper = mount(<CreateUser />);
      expect(wrapper.find(CreateUserForm).props().errors.ConfirmEmail).equal(undefined);
    });
    it('Should MyForm with errors.ConfirmPassword equal undefined by default', (): void => {
      const wrapper = mount(<CreateUser />);
      expect(wrapper.find(CreateUserForm).props().errors.ConfirmPassword).equal(undefined);
    });
  });
  describe('Touched Tests', (): void => {
    it('Should MyForm with touched.Name equal undefined by default', (): void => {
      const wrapper = mount(<CreateUser />);
      expect(wrapper.find(CreateUserForm).props().touched.Name).equal(undefined);
    });
    it('Should MyForm with touched.Email equal undefined by default', (): void => {
      const wrapper = mount(<CreateUser />);
      expect(wrapper.find(CreateUserForm).props().touched.Email).equal(undefined);
    });
    it('Should MyForm with touched.Password equal undefined by default', (): void => {
      const wrapper = mount(<CreateUser />);
      expect(wrapper.find(CreateUserForm).props().touched.Password).equal(undefined);
    });
    it('Should MyForm with touched.ConfirmEmail equal undefined by default', (): void => {
      const wrapper = mount(<CreateUser />);
      expect(wrapper.find(CreateUserForm).props().touched.ConfirmEmail).equal(undefined);
    });
    it('Should MyForm with touched.ConfirmPassword equal undefined by default', (): void => {
      const wrapper = mount(<CreateUser />);
      expect(wrapper.find(CreateUserForm).props().touched.ConfirmPassword).equal(undefined);
    });
  });
});
