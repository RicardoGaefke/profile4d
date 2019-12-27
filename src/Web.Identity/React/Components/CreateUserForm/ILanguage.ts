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
  keep: {
    title: string,
    text: string,
  },
  button: {
    title: string,
    text: string,
  },
  forgot: {
    title: string,
    text: string,
  },
  create: {
    title: string,
    text: string,
  },
}
