export interface ILanguage {
  title: string,
  email: {
    title: string,
    text: string,
    required: string,
    invalid: string,
  },
  confirmEmail: {
    title: string,
    text: string,
    required: string,
    invalid: string,
  },
  blockedEmail: {
    title: string,
    text: string,
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
