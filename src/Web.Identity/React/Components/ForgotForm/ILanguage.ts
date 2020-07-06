export interface ILanguage {
  title: string;
  email: {
    title: string;
    text: string;
    required: string;
    invalid: string;
  },
  button: {
    text: string;
    title: string;
  },
  feedback: {
    success: string,
    failure: string,
  },
}
