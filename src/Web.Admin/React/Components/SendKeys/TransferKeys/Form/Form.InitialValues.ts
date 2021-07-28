// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IBasicReturn } from '../../../../../../TypeScript/Interfaces/IBasicReturn';

export interface IForm extends IBasicReturn {
  Email: string,
  ConfirmEmail: string,
  Keys: number,
}

export default {
  Email: '',
  ConfirmEmail: '',
  Keys: 0,
} as IForm;
