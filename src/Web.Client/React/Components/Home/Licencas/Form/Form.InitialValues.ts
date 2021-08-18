// eslint-disable-next-line no-unused-vars
import { IBasicReturn } from '../../../../../../TypeScript/Interfaces/IBasicReturn';

export interface IForm extends IBasicReturn {
  Email: string;
  ConfirmEmail: string;
  BlockResult: boolean;
  Type: number;
}

export default {
  Email: '',
  ConfirmEmail: '',
  BlockResult: true,
  Type: 1,
} as IForm;
