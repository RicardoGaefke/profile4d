import { IBasicReturn } from './IBasicReturn';
import { ICreated } from './ICreated';

export interface IImage {
  Id?: number;
  Src: string,
  Alt: string,
  Data?: string,
  Mime?: string,
  Height?: number,
  Width?: number,
  Size?: number,
}