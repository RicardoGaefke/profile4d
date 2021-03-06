// eslint-disable-next-line no-unused-vars
import { ILanguage } from './ILanguage';

export default {
  title: 'Static data from the introduction of the report',
  titlePT: {
    text: 'Title in Portuguese',
    title: 'The title of the report in Portuguese',
    required: 'This field is required',
    min: '3 character minimum',
    max: '95 characters maximum',
  },
  titleENG: {
    text: 'Title in English',
    title: 'The title of the report in English',
    required: 'This field is required',
    min: '3 character minimum',
    max: '95 characters maximum',
  },
  textPT: {
    text: 'Text in Portuguese',
    title: 'The text of the report in Portuguese',
    required: 'This field is required',
    min: '5 character minimum',
    max: '950 characters maximum',
  },
  textENG: {
    text: 'Text in English',
    title: 'The text of the report in English',
    required: 'This field is required',
    min: '5 character minimum',
    max: '950 characters maximum',
  },
  button: {
    text: 'Save changes',
    title: 'Click here to save changes',
  },
  category: {
    title: 'Select a category',
    text: 'Category',
    text1: 'Profile Organizer',
    text2: 'Profile Helpful',
    text3: 'Profile Director',
    text4: 'Profile Creative',
    text5: 'Profile Analytical',
    text6: 'Perfil Planner',
    text7: 'Profile Visionary',
    text8: 'Profile Commander',
    text9: 'Profile Mediator',
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
