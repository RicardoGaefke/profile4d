// eslint-disable-next-line no-unused-vars
import { ILanguage } from './ILanguage';

export default {
  title: 'Create a new account',
  name: {
    text: 'Your name',
    title: 'Please inform your name',
    min: '5 character minimum',
    max: '20 characters maximum',
  },
  email: {
    text: 'Your email',
    title: 'Type your email',
    required: 'This field is required',
    invalid: 'Please inform a valid email',
  },
  confirmEmail: {
    text: 'Confirm your email',
    title: 'Please confirm your email',
    required: 'This field is required',
    invalid: 'Please type exactly same email',
  },
  password: {
    text: 'Your password',
    title: 'Create a password',
    required: 'This field is required',
    min: '6 character minimum',
    max: '20 characters maximum',
  },
  confirmPassword: {
    text: 'Confirm password',
    title: 'Please confirm your password',
    required: 'This field is required',
    invalid: 'Please type exactly same password',
  },
  button: {
    text: 'Create account',
    title: 'Click here to create an account',
  },
  return: {
    text: 'Cancel and go back home',
    title: 'Cancel and go back home',
  },
} as ILanguage;
