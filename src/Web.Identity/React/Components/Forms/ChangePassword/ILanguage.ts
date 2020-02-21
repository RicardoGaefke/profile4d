export interface ILanguage {
  title: string,
  newPassword: {
    title: string,
    text: string,
    required: string,
    min: string,
    max: string,
  },
  confirmPassword: {
    title: string,
    text: string,
    required: string,
    invalid: string,
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
