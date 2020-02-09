import { IBasicReturn } from './IBasicReturn';
import { ICreated } from './ICreated';

export interface IStaticImageForm extends IBasicReturn, ICreated
{
  Id: number;
  Text_PT: string;
  Text_ENG: string;
}