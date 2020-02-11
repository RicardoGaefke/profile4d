import { IBasicReturn } from './IBasicReturn';
import { ICreated } from './ICreated';
import { IImage } from './IImage';

export interface IStaticImageForm extends IBasicReturn, ICreated, IImage
{
  Id: number,
  Text_PT: string,
  Text_ENG: string,
  Data?: string,
}