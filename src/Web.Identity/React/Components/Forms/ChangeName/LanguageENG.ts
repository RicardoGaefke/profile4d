// eslint-disable-next-line no-unused-vars
import { ILanguage } from './ILanguage';

export default {
  title: 'Change user name',
  name: {
    text: 'New name',
    title: 'Type your new name',
    required: 'This field is required',
    min: '6 character minimum',
    max: '20 characters maximum',
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
