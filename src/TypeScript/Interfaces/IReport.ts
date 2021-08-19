import { IBasicReturn } from './IBasicReturn';
import { IProfiles } from './IProfiles';
import { IStaticIntroduction } from './IStaticContent';
import { IImage } from './IImage';
import { IKey } from './IKey';

export interface IReport extends IBasicReturn
{
  Profiles?: IProfiles[];
  StaticContent?: IStaticIntroduction[];
  DynamicContent?: IStaticIntroduction[];
  DynamicContent56?: IStaticIntroduction[];
  DynamicContent57?: IStaticIntroduction[];
  DynamicContent19?: IStaticIntroduction[];
  DynamicContent34?: IStaticIntroduction[];
  DynamicContent35?: IStaticIntroduction[];
  DynamicContent38?: IStaticIntroduction[];
  DynamicContent59?: IStaticIntroduction[];
  Images?: IImage[];
  Chave?: IKey;
}