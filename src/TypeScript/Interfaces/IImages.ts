import { IBasicReturn } from './IBasicReturn';
import { ICreated } from './ICreated';

export interface IImages extends IBasicReturn, ICreated {
  Id: number;
  Src: string,
  alt: string,
}