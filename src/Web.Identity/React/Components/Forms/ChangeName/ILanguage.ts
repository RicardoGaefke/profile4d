export interface ILanguage {
  title: string,
  name: {
    title: string,
    text: string,
    required: string,
    min: string,
    max: string,
  },
  password: {
    title: string,
    text: string,
    required: string,
    min: string,
    max: string,
  },
  button: {
    title: string,
    text: string,
  },
  alert: {
    title: string,
    text: string,
  },
  feedback: {
    success: string,
    failure: string,
  },
}
