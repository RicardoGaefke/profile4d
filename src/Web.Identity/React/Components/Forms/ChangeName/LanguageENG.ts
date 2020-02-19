// eslint-disable-next-line no-unused-vars
import { ILanguage } from './ILanguage';

export default {
  title: 'Already a member?',
  email: {
    text: 'Your email',
    title: 'Type your email',
    required: 'This field is required',
    invalid: 'Please inform a valid email',
  },
  password: {
    text: 'Your password',
    title: 'Type your password',
    required: 'This field is required',
    min: '6 character minimum',
    max: '20 characters maximum',
  },
  forgot: {
    text: 'Forgot your password?',
    title: 'Click here to create a new password',
  },
  button: {
    text: 'Login',
    title: 'Click here to start a new session',
  },
  keep: {
    text: 'Keep me connected?',
    title: 'Check this option to keep connection alive',
  },
  create: {
    text: 'Create new credentials',
    title: 'Click here to create new credentials',
  },
  feedback: {
    success: 'Successfully logged in',
    failure: 'You were not able to log in',
  },
} as ILanguage;
