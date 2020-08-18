export interface ILanguage {
  title: string,
  options: {
    disagreeStrongly: string,
    disagreePartially: string,
    noAgreeOrDisagree: string,
    agreePartially: string,
    agreeStrongly: string,
  },
  error: string,
  buttonConfirm: string,
  buttonReset: string,
}
