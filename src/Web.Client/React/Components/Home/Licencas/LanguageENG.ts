// eslint-disable-next-line no-unused-vars
import { ILanguage } from './ILanguage';

export default {
  title: 'Send key to user',
  alert: {
    title: 'Attention!',
    text: 'Please check the typed email! It will not be possible to edit it after completing the operation!',
  },
  email: {
    text: 'Email',
    title: 'Please fill the email to send the key',
    required: 'Please inform an email',
    email: 'Invalid email',
  },
  confirmEmail: {
    text: 'Confirm Email',
    title: 'Please confirm the email to send the key',
    required: 'Please confirm the email',
    confirm: 'Email and Confirm Email don\'t match',
  },
  button: {
    text: 'Send key',
    title: 'Click here to send a key to the user',
  },
  feedback: {
    success: 'Successfully sent your key',
    failure: 'Sorry but no data was saved',
  },
} as ILanguage;
