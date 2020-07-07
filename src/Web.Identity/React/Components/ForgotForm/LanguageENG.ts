// eslint-disable-next-line no-unused-vars
import { ILanguage } from './ILanguage';

export default {
  title: 'Forgot your password',
  email: {
    title: 'Your email',
    text: 'Type your email',
    required: 'This field is required',
    invalid: 'Please inform a valid email',
  },
  button: {
    text: 'Recover password',
    title: 'Click here to recover your password',
  },
  feedback: {
    success: 'If your email is correct a message with instruction will be sent!',
    failure: 'Sorry but it was not possible to recorver your password! Please try again later.',
  },
} as ILanguage;
