import { IBasicReturn } from './IBasicReturn';
import { ICreated } from './ICreated';

export interface IStaticIntroduction extends IBasicReturn, ICreated
{
  Id: number;
  Title_PT: string;
  Title_ENG: string;
  Text_PT: string;
  Text_ENG: string;
}