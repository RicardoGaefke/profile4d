export interface ILanguage {
  title: string,
  name: {
    title: string,
    text: string,
    required: string,
    min: string,
    max: string,
  },
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
  password: {
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
  button: {
    title: string,
    text: string,
  },
  return: {
    title: string,
    text: string,
  },
}
