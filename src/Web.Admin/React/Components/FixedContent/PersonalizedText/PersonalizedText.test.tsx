import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { withSnackbar, SnackbarProvider } from 'notistack';
import chai, { expect } from 'chai';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
// eslint-disable-next-line no-unused-vars
import { TextField, Button } from '@material-ui/core';
import initialValues from '../FirstPage/Form/Form.InitialValues';
// eslint-disable-next-line no-unused-vars
import { MyPersonalizedText } from './PersonalizedText';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('Web.Admin -> PersonalizedText', (): void => {
  // The complete strucutre are here [Formik, Form, i18n & Snackbar]
  const DefaultForm = withTranslation()(withSnackbar(MyPersonalizedText));

  /*
    This component is extremally necessary to run enqueueSnackbar on tests.
    Don't use this can broke all running tests.
  */
  const App = (): React.ReactElement<HTMLElement> => (
    <SnackbarProvider>
      <DefaultForm myValues={initialValues} />
    </SnackbarProvider>
  );

  describe('Smoke Tests', (): void => {
    it('Should exist PersonalizedText', (): void => {
      const wrapper = mount(<App />);
      // eslint-disable-next-line no-unused-expressions
      expect(wrapper).to.exist;
    });
  });
  describe('Tags Existence', (): void => {
    it('Should MyPersonalizedText return a tag form length equal 1 when is called', (): void => {
      const wrapper = mount(<App />);
      expect(wrapper.find(MyPersonalizedText).find('form')).to.have.length(1);
    });
    it('Should MyPersonalizedText return a tag TextField length equal 5 when is called', (): void => {
      const wrapper = mount(<App />);
      expect(wrapper.find(MyPersonalizedText).find(TextField)).to.have.length(4);
    });
    it('Should MyPersonalizedText return a tag Button length equal 1 when is called', (): void => {
      const wrapper = mount(<App />);
      expect(wrapper.find(MyPersonalizedText).find(Button)).to.have.length(1);
    });
  });
  describe('Form Properties', (): void => {
    describe('TextField Properties', (): void => {
      it('Should return a TextField in node 0 with correct name by default', (): void => {
        const wrapper = mount(<App />);
        expect(wrapper.find(MyPersonalizedText).find(TextField).get(0).props.name).equal('Title_PT');
      });
      it('Should return a TextField in node 1 with correct name by default', (): void => {
        const wrapper = mount(<App />);
        expect(wrapper.find(MyPersonalizedText).find(TextField).get(1).props.name).equal('Title_ENG');
      });
      it('Should return a TextField in node 2 with correct name by default', (): void => {
        const wrapper = mount(<App />);
        expect(wrapper.find(MyPersonalizedText).find(TextField).get(2).props.name).equal('Text_PT');
      });
      it('Should return a TextField in node 3 with correct name by default', (): void => {
        const wrapper = mount(<App />);
        expect(wrapper.find(MyPersonalizedText).find(TextField).get(3).props.name).equal('Text_ENG');
      });
    });
    describe('Button Properties', (): void => {
      it('Should return a Button with type "submit" by default', (): void => {
        const wrapper = mount(<App />);
        expect(wrapper.find(MyPersonalizedText).find(Button).props().type).equal('submit');
      });
      it('Should return a Button with correct title by default', (): void => {
        const wrapper = mount(<App />);
        expect(wrapper.find(MyPersonalizedText).find(Button).props().title).equal('button.title');
      });
      it('Should return a Button with type disabled: isSubmitting equal "false" by default', (): void => {
        const wrapper = mount(<App />);
        expect(wrapper.find(MyPersonalizedText).find(Button).props().disabled).equal(false);
      });
      it('Should return a Button with correct children by default', (): void => {
        const wrapper = mount(<App />);
        expect(wrapper.find(MyPersonalizedText).find(Button).props().children).equal('button.text');
      });
    });
  });
  describe('Props Tests', (): void => {
    describe('Props -> i18n', (): void => {
      it('Should MyPersonalizedText with i18n has been initialized by default', (): void => {
        const wrapper = mount(<App />);
        expect(wrapper.find(MyPersonalizedText).props().i18n.isInitialized).equal(true);
      });
      it('Should MyPersonalizedText with i18n return language equal PT by default', (): void => {
        const wrapper = mount(<App />);
        expect(wrapper.find(MyPersonalizedText).props().i18n.language).equal('PT');
      });
      // it('Should MyPersonalizedText with i18n return languages equal {} by default', (): void => {
      //   const wrapper = mount(<App />);
      //   expect(wrapper.find(MyPersonalizedText).props().i18n.options.resources).eql({ ENG: {}, PT: {} });
      // });
      it('Should MyPersonalizedText with i18n return languages equal {} by default', (): void => {
        const wrapper = mount(<App />);
        expect(wrapper.find(MyPersonalizedText).props().i18n.options.debug).eql(false);
      });
    });
    describe('Props -> tReady', (): void => {
      it('Should MyPersonalizedText with tReady props equal true by default', (): void => {
        const wrapper = mount(<App />);
        expect(wrapper.find(MyPersonalizedText).props().tReady.valueOf()).equal(true);
      });
    });
  });
  describe('Values Tests', (): void => {
    it('Should MyPersonalizedText with Title_PT initialValue equal Form.initialValues.ts by default', (): void => {
      const wrapper = mount(<App />);
      expect(wrapper.find(MyPersonalizedText).props().myValues.Title_PT).equal('Título em Português');
    });
    it('Should MyPersonalizedText with Title_ENG initialValue equal Form.initialValues.ts by default', (): void => {
      const wrapper = mount(<App />);
      expect(wrapper.find(MyPersonalizedText).props().myValues.Title_ENG).equal('Title in English');
    });
    it('Should MyPersonalizedText with Text_PT initialValue equal Form.initialValues.ts by default', (): void => {
      const wrapper = mount(<App />);
      expect(wrapper.find(MyPersonalizedText).props().myValues.Text_PT).equal('Texto em Português');
    });
    it('Should MyPersonalizedText with Text_ENG initialValue equal Form.initialValues.ts by default', (): void => {
      const wrapper = mount(<App />);
      expect(wrapper.find(MyPersonalizedText).props().myValues.Text_ENG).equal('Text in English');
    });
    it('Should MyPersonalizedText with Created initialValue equal Form.initialValues.ts by default', (): void => {
      const wrapper = mount(<App />);
      expect(wrapper.find(MyPersonalizedText).props().myValues.Created).equal('R. Gaefke');
    });
    it('Should MyPersonalizedText with CreatedBy initialValue equal Form.initialValues.ts by default', (): void => {
      const wrapper = mount(<App />);
      expect(wrapper.find(MyPersonalizedText).props().myValues.CreatedBy).equal('R. Gaefke');
    });
    it('Should MyPersonalizedText with Success initialValue equal Form.initialValues.ts by default', (): void => {
      const wrapper = mount(<App />);
      expect(wrapper.find(MyPersonalizedText).props().myValues.Success).equal(true);
    });
    it('Should MyPersonalizedText with Message initialValue equal Form.initialValues.ts by default', (): void => {
      const wrapper = mount(<App />);
      expect(wrapper.find(MyPersonalizedText).props().myValues.Message).equal('Success');
    });
    it('Should MyPersonalizedText with Code initialValue equal Form.initialValues.ts by default', (): void => {
      const wrapper = mount(<App />);
      expect(wrapper.find(MyPersonalizedText).props().myValues.Code).equal('Undefined');
    });
    it('Should MyPersonalizedText with Details initialValue equal Form.initialValues.ts by default', (): void => {
      const wrapper = mount(<App />);
      expect(wrapper.find(MyPersonalizedText).props().myValues.Details).equal('Undefined');
    });
    it('Should MyPersonalizedText with Url initialValue equal Form.initialValues.ts by default', (): void => {
      const wrapper = mount(<App />);
      expect(wrapper.find(MyPersonalizedText).props().myValues.Url).equal('www.staging.profile4d.com');
    });
  });
});
