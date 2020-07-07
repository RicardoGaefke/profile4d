// eslint-disable-next-line no-unused-vars
import { ILanguage } from './ILanguage';

export default {
  title: 'Change user password',
  newPassword: {
    text: 'New password',
    title: 'Type your new password',
    required: 'This field is required',
    min: '6 character minimum',
    max: '20 characters maximum',
  },
  confirmPassword: {
    text: 'Confirm new password',
    title: 'Please confirm your new password',
    required: 'This field is required',
    invalid: 'Please type exactly same new password',
  },
  password: {
    text: 'Your password to confirm',
    title: 'Type your password to confirm the change',
    required: 'This field is required',
    min: '6 character minimum',
    max: '20 characters maximum',
  },
  button: {
    text: 'Save new password',
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
