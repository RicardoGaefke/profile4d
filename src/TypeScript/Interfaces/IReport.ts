import { IBasicReturn } from './IBasicReturn';
import { IProfiles } from './IProfiles';
import { IStaticIntroduction } from './IStaticContent';
import { IImage } from './IImage';

export interface IReport extends IBasicReturn
  {
    Profiles?: IProfiles[];
    StaticContent?: IStaticIntroduction[];
    Images?: IImage[];
  }