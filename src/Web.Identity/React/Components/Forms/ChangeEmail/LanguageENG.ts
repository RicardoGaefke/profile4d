// eslint-disable-next-line no-unused-vars
import { ILanguage } from './ILanguage';

export default {
  title: 'Change user email',
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
  blockedEmail: {
    title: 'Sorry, blocked email!',
    text: 'This email was declined by the server. It may already be in use by another user.',
  },
  password: {
    text: 'Your password to confirm',
    title: 'Type your password to confirm the change',
    required: 'This field is required',
    min: '6 character minimum',
    max: '20 characters maximum',
  },
  button: {
    text: 'Save new name',
    title: 'Click here to save the changes',
  },
  alert: {
    title: 'Attention to registration changes',
    text: `Changing registration information <strong>immediately disconnects the user</strong>, so that a new credential is
  loaded with the updated information`,
  },
  feedback: {
    success: 'Data saved successfully',
    failure: 'We were unable to save your changes',
  },
} as ILanguage;
