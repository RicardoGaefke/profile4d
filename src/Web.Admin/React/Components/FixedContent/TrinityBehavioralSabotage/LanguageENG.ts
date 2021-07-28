// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ILanguage } from './ILanguage';

export default {
  title: 'Static data from the Triad Behavioral - Sabotage Mode of the report',
  titlePT: {
    text: 'Title in Portuguese',
    title: 'The title of the report in Portuguese',
    required: 'This field is required',
    min: '5 character minimum',
    max: '95 characters maximum',
  },
  titleENG: {
    text: 'Title in English',
    title: 'The title of the report in English',
    required: 'This field is required',
    min: '5 character minimum',
    max: '95 characters maximum',
  },
  textPT: {
    text: 'Text in Portuguese',
    title: 'The text of the report in Portuguese',
    required: 'This field is required',
    min: '5 character minimum',
    max: '8000 characters maximum',
  },
  textENG: {
    text: 'Text in English',
    title: 'The text of the report in English',
    required: 'This field is required',
    min: '5 character minimum',
    max: '8000 characters maximum',
  },
  button: {
    text: 'Save changes',
    title: 'Click here to save changes',
  },
  created: {
    name: 'Last changes by',
    date: 'in',
  },
  feedback: {
    success: 'Successfully saved your data',
    failure: 'Sorry but no data was saved',
  },
} as ILanguage;
