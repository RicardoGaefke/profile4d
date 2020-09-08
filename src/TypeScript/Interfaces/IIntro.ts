import { IBasicReturn } from './IBasicReturn';
import { IStaticIntroduction } from './IStaticContent';
import { IStaticImageForm } from './IStaticImageForm';

export interface IIntro extends IBasicReturn {
  Image: IStaticImageForm;
  Texts: IStaticIntroduction;
}