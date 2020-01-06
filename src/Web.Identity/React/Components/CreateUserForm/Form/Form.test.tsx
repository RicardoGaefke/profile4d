import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TextField, Button } from '@material-ui/core';
import { withFormik } from 'formik';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { ICreateUser } from '../../../../../TypeScript/Interfaces/ICreateUser';
import Validation from './Form.Validation';
import InitialValues from './Form.InitialValues';
import CreateUserForm from './Form';

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
  describe('Tags Existence', (): void => {
    it('Should MyForm return a tag form length equal 1 when is called', (): void => {
      const wrapper = mount(<CreateUser />);
      expect(wrapper.find(MyForm).find('form')).to.have.length(1);
    });
    it('Should MyForm return a tag TextField length equal 5 when is called', (): void => {
      const wrapper = mount(<CreateUser />);
      expect(wrapper.find(MyForm).find(TextField)).to.have.length(5);
    });
    it('Should MyForm return a tag Button length equal 1 when is called', (): void => {
      const wrapper = mount(<CreateUser />);
      expect(wrapper.find(MyForm).find(Button)).to.have.length(1);
    });
  });
  describe('Form Properties', (): void => {
    describe('TextField Properties', (): void => {
      it('Should return a TextField in node 0 with correct name by default', (): void => {
        const wrapper = mount(<CreateUser />);
        expect(wrapper.find(MyForm).find(TextField).get(0).props.name).equal('Name');
      });
      it('Should return a TextField in node 1 with correct name by default', (): void => {
        const wrapper = mount(<CreateUser />);
        expect(wrapper.find(MyForm).find(TextField).get(1).props.name).equal('Email');
      });
      it('Should return a TextField in node 2 with correct name by default', (): void => {
        const wrapper = mount(<CreateUser />);
        expect(wrapper.find(MyForm).find(TextField).get(2).props.name).equal('ConfirmEmail');
      });
      it('Should return a TextField in node 3 with correct name by default', (): void => {
        const wrapper = mount(<CreateUser />);
        expect(wrapper.find(MyForm).find(TextField).get(3).props.name).equal('Password');
      });
      it('Should return a TextField in node 4 with correct name by default', (): void => {
        const wrapper = mount(<CreateUser />);
        expect(wrapper.find(MyForm).find(TextField).get(4).props.name).equal('ConfirmPassword');
      });
    });
    describe('Button Properties', (): void => {
      it('Should return a Button with type "submit" by default', (): void => {
        const wrapper = mount(<CreateUser />);
        expect(wrapper.find(MyForm).find(Button).props().type).equal('submit');
      });
      it('Should return a Button with correct title by default', (): void => {
        const wrapper = mount(<CreateUser />);
        expect(wrapper.find(MyForm).find(Button).props().title).equal('button.title');
      });
      it('Should return a Button with type disabled: isSubmitting equal "false" by default', (): void => {
        const wrapper = mount(<CreateUser />);
        expect(wrapper.find(MyForm).find(Button).props().disabled).equal(false);
      });
      it('Should return a Button with correct children by default', (): void => {
        const wrapper = mount(<CreateUser />);
        expect(wrapper.find(MyForm).find(Button).props().children).equal('button.text');
      });
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
