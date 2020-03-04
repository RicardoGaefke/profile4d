import { IBasicReturn } from './IBasicReturn';
import { ICreated } from './ICreated';

export interface IDynamicContent extends IBasicReturn, ICreated
{
  Id: number;
  Guid: string;
  Active: boolean;
  Active_Created: string;
  Active_CreatedBy: string;
  Title_PT: string;
  Title_ENG: string;
  Text_PT: string;
  Text_ENG: string;
}