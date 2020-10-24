import { IBasicReturn } from './IBasicReturn';
import { ICreated } from './ICreated';

export interface IImage {
  Id?: number;
  Src: string,
  Alt: string,
  Alt_PT?: string;
  Alt_ENG?: string;
  Data?: string,
  Mime?: string,
  Height?: number,
  Width?: number,
  Size?: number,
}