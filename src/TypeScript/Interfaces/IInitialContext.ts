export interface IInitialContext {
  Language: string,
  Theme: string,
  ConsentCookie: boolean,
  Name?: string,
  Email?: string,
  IsAuthenticated?: boolean,
  KeepConnected?: boolean,
  Ready: boolean,
  Drawer?: boolean,
  Config?: boolean,
}