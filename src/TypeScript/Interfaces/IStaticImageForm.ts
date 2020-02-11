import { IBasicReturn } from './IBasicReturn';
import { ICreated } from './ICreated';
import { IImage } from './IImage';

export interface IStaticImageForm extends IBasicReturn, ICreated, IImage
{
  Id: number,
  Alt_PT: string,
  Alt_ENG: string,
  Data?: string,
}