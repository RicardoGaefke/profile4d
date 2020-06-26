export interface ILanguage {
  title: string,
  alert: {
    title: string,
    text: string,
  },
  email: {
    text: string,
    title: string,
    required: string,
    email: string,
  }
  confirmEmail: {
    text: string,
    title: string,
    required: string,
    confirm: string,
  },
  keys: {
    text: string,
    title: string,
    required: string,
    invalid: string,
  },
  button: {
    text: string,
    title: string,
  },
  feedback: {
    success: string,
    failure: string,
  },
}
