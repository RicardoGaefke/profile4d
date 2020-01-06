import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withSnackbar, WithSnackbarProps, SnackbarProvider } from 'notistack';
import chai, { expect } from 'chai';
import Enzyme, { mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { withFormik } from 'formik';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import { TextField, Checkbox, Button } from '@material-ui/core';
import InitialValues from './Form.InitialValues';
import Validation from './Form.Validation';
// eslint-disable-next-line no-unused-vars
import { ILoginForm } from '../../../../../TypeScript/Interfaces/ILoginForm';
import myAxios from '../../../Utils/MyAxios';
// eslint-disable-next-line no-unused-vars
import { IInitialContext } from '../../../../../TypeScript/Interfaces/IInitialContext';
import LoginFormUser from './Form';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('Web.Identity -> LoginForm.Form', (): void => {
  const MyForm = withFormik<WithTranslation & WithSnackbarProps, ILoginForm>({
    displayName: 'LoginForm',
    enableReinitialize: true,
    mapPropsToValues: (): ILoginForm => (InitialValues),
    validationSchema: Validation,
    handleSubmit: async (values, { setSubmitting, props }): Promise<void> => {
      const { enqueueSnackbar, t } = props;
      await myAxios(window.location.href).post<IInitialContext>('Identity/SignIn', {
        Email: values.Email,
        Password: values.Password,
        KeepConnected: values.KeepConnected,
      }).then((response): void => {
        const { data } = response;

        if (data.Success) {
          enqueueSnackbar(t('LoginForm:feedback.success'), {
            variant: 'success',
          });
        } else {
          enqueueSnackbar(t('LoginForm:feedback.failure'), {
            variant: 'error',
          });
        }
      }).catch((): void => {
        enqueueSnackbar(t('LoginForm:feedback.failure'), {
          variant: 'error',
        });
      });
      setSubmitting(false);
    },
  })(LoginFormUser);

  const Login = withTranslation()(withSnackbar(MyForm));

  const SnackedLogin = (): React.ReactElement => (
    <SnackbarProvider>
      <Login />
    </SnackbarProvider>
  );

  describe('Smoke Tests', (): void => {
    // it('Should exist Login', async (): Promise<void> => {
    //   const wrapper = mount(<Login />);
    //   // eslint-disable-next-line no-unused-expressions
    //   expect(wrapper).to.exist;
    // });
    it('Should exist Login', (): void => {
      const wrapper = mount(<SnackedLogin />);
      // eslint-disable-next-line no-unused-expressions
      expect(wrapper).to.exist;
    });
  });
  describe('Tags Existence', (): void => {
    it('Should LoginForm return a tag form equal 1 when is called', (): void => {
      const wrapper = mount(<SnackedLogin />);
      expect(wrapper.find(LoginFormUser).find('form')).to.have.length(1);
    });
    it('Should LoginForm return a tag TextField equal 2 when is called', (): void => {
      const wrapper = mount(<SnackedLogin />);
      expect(wrapper.find(LoginFormUser).find(TextField)).to.have.length(2);
    });
    it('Should LoginForm return a tag Checkbox equal 1 when is called', (): void => {
      const wrapper = mount(<SnackedLogin />);
      expect(wrapper.find(LoginFormUser).find(Checkbox)).to.have.length(1);
    });
    it('Should LoginForm return a tag Button equal 1 when is called', (): void => {
      const wrapper = mount(<SnackedLogin />);
      expect(wrapper.find(LoginFormUser).find(Button)).to.have.length(1);
    });
  });
  describe('Form Properties', (): void => {
    describe('TextField Properties', (): void => {
      it('Should return a TextField in node 0 with correct name by default', (): void => {
        const wrapper = mount(<SnackedLogin />);
        expect(wrapper.find(LoginFormUser).find(TextField).get(0).props.name).equal('Email');
      });
      it('Should return a TextField in node 1 with correct name by default', (): void => {
        const wrapper = mount(<SnackedLogin />);
        expect(wrapper.find(LoginFormUser).find(TextField).get(1).props.name).equal('Password');
      });
    });
    describe('Button Properties', (): void => {
      it('Should return a Button with type "submit" by default', (): void => {
        const wrapper = mount(<SnackedLogin />);
        expect(wrapper.find(LoginFormUser).find(Button).props().type).equal('submit');
      });
      it('Should return a Button with correct title by default', (): void => {
        const wrapper = mount(<SnackedLogin />);
        expect(wrapper.find(LoginFormUser).find(Button).props().title).equal('button.title');
      });
      it('Should return a Button with type disabled: isSubmitting equal "false" by default', (): void => {
        const wrapper = mount(<SnackedLogin />);
        expect(wrapper.find(LoginFormUser).find(Button).props().disabled).equal(false);
      });
      it('Should return a Button with correct children by default', (): void => {
        const wrapper = mount(<SnackedLogin />);
        expect(wrapper.find(LoginFormUser).find(Button).props().children).equal('button.text');
      });
    });
  });
  describe('Props Tests', (): void => {
    describe('Props -> i18n', (): void => {
      it('Should LoginFormUser with i18n has been initialized by default', (): void => {
        const wrapper = mount(<SnackedLogin />);
        expect(wrapper.find(LoginFormUser).props().i18n.isInitialized).equal(true);
      });
      it('Should LoginFormUser with i18n return language equal PT by default', (): void => {
        const wrapper = mount(<SnackedLogin />);
        expect(wrapper.find(LoginFormUser).props().i18n.language).equal('PT');
      });
      it('Should LoginFormUser with i18n return languages equal {} by default', (): void => {
        const wrapper = mount(<SnackedLogin />);
        expect(wrapper.find(LoginFormUser).props().i18n.options.resources).eql({ ENG: {}, PT: {} });
      });
      it('Should LoginFormUser with i18n return languages equal {} by default', (): void => {
        const wrapper = mount(<SnackedLogin />);
        expect(wrapper.find(LoginFormUser).props().i18n.options.debug).eql(false);
      });
    });
    describe('Props -> tReady', (): void => {
      it('Should LoginFormUser with tReady props equal true by default', (): void => {
        const wrapper = mount(<SnackedLogin />);
        expect(wrapper.find(LoginFormUser).props().tReady.valueOf()).equal(true);
      });
    });
  });
  describe('Values Tests', (): void => {
    it('Should LoginFormUser with Email initialValue equal empty by default', (): void => {
      const wrapper = mount(<SnackedLogin />);
      expect(wrapper.find(LoginFormUser).props().values.Email).equal('');
    });
    it('Should LoginFormUser with Password initialValue equal empty by default', (): void => {
      const wrapper = mount(<SnackedLogin />);
      expect(wrapper.find(LoginFormUser).props().values.Password).equal('');
    });
  });
  describe('Errors Tests', (): void => {
    it('Should errors.Email with Email equal undefined by default', (): void => {
      const wrapper = mount(<SnackedLogin />);
      expect(wrapper.find(LoginFormUser).props().errors.Email).equal(undefined);
    });
    it('Should errors.Email with Password equal undefined by default', (): void => {
      const wrapper = mount(<SnackedLogin />);
      expect(wrapper.find(LoginFormUser).props().errors.Password).equal(undefined);
    });
  });
  describe('Touched Tests', (): void => {
    it('Should touched.Email with Email equal undefined by default', (): void => {
      const wrapper = mount(<SnackedLogin />);
      expect(wrapper.find(LoginFormUser).props().touched.Email).equal(undefined);
    });
    it('Should touched.Email with Password equal undefined by default', (): void => {
      const wrapper = mount(<SnackedLogin />);
      expect(wrapper.find(LoginFormUser).props().touched.Password).equal(undefined);
    });
  });
});
