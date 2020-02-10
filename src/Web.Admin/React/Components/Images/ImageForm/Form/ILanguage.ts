export interface ILanguage {
  title: string,
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
  attachment: {
    uploads: string,
    save: string,
    dropzoneText: string,
    noAttachments: string,
  },
}
