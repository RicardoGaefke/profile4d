export interface ILanguage {
  title: string,
  text: string,
  request: {
    title: string;
    text: string;
  }
  phone: {
    title: string;
    text: string;
  }
  cancel: {
    title: string;
    text: string;
  }
  confirm: {
    title: string;
    text: string;
  }
  feedback: {
    success: string;
    failure: string;
  }
}
