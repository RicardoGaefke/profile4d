export interface IEmailRow {
  Id: number;
  Email: string;
  Dequeue: number;
  SendGridKey: string;
  When: string;
}

export interface IEmailRows {
  rows: IEmailRow[]
}
