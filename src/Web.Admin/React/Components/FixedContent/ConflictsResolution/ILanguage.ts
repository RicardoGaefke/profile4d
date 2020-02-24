export interface ILanguage {
  title: string,
  titlePT: {
    title: string,
    text: string,
    required: string,
    min: string,
    max: string,
  },
  titleENG: {
    title: string,
    text: string,
    required: string,
    min: string,
    max: string,
  },
  textPT: {
    title: string,
    text: string,
    required: string,
    min: string,
    max: string,
  },
  textENG: {
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
  created: {
    name: string,
    date: string,
  },
  feedback: {
    success: string,
    failure: string,
  },
}
