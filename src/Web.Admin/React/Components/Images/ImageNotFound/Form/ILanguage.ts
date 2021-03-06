export interface ILanguage {
  title: string,
  altPT: {
    title: string,
    text: string,
    required: string,
    min: string,
    max: string,
  },
  altENG: {
    title: string,
    text: string,
    required: string,
    min: string,
    max: string,
  },
  file: {
    title: string,
    required: string,
    type: string,
  },
  noImage: string,
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
  altImage: string,
  showImage: string,
}
