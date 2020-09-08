import { IBasicReturn } from './IBasicReturn';

export interface IKey extends IBasicReturn {
  Id?: number;
  Guid?: string;
  Email?: string;
  SentBy?: number;
  Consultant?: number;
  Keys?: number;
  SentWhen?: string;
  Started?: string;
  Fihished?: string;
  Canceled?: boolean;
  CanceledBy?: number;
  CanceledWhen?: string;
}
