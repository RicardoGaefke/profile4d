import { IBasicReturn } from './IBasicReturn';

export interface IQuestion extends IBasicReturn
{
  Id?: number;
  Guid?: string;
  Active?: boolean;
  Active_Created?: string;
  Active_CreatedBy?: string;
  Category?: number;
  Title_PT?: string;
  Title_ENG?: string;
  Text_PT?: string;
  Text_ENG?: string;
  CreatedBy?: string;
  Created?: string;
  Answer?: string | number;
  Finished?: boolean;
}

export interface IQuestions extends IBasicReturn
{
  Questions: IQuestion[],
}