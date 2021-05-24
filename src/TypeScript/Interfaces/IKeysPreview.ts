import { IBasicReturn } from './IBasicReturn';
import { IKey } from './IKey';

export interface IKeysPreview extends IBasicReturn {
  Consultant?: number;
  Total?: number;
  Available?: number;
  Keys?: IKey[];
}
