// eslint-disable-next-line no-unused-vars
import { ILanguage } from './ILanguage';

export default {
  title: 'This is a model question. Assuming this is really a model question, do you agree?',
  options: {
    disagreeStrongly: 'Disagree strongly',
    disagreePartially: 'Disagree partially',
    noAgreeOrDisagree: 'No agree or disagree',
    agreePartially: 'Agree partially',
    agreeStrongly: 'Agree strongly',
  },
  error: 'This field is required',
  buttonConfirm: 'Confirm',
  buttonReset: 'Reset',
} as ILanguage;
