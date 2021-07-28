// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ILanguage } from './ILanguage';

export default {
  title: 'Transfer keys to consultant',
  alert: {
    title: 'Attention!',
    text: 'Please check the typed email and number of keys! It will not be possible to edit them after completing the operation!',
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
  keys: {
    text: 'Number of keys',
    title: 'Please enter the number of keys to transfer',
    required: 'Please inform the number',
    invalid: 'Minimum of 1 key',
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
