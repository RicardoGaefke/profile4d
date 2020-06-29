// eslint-disable-next-line no-unused-vars
import { IBasicReturn } from '../../../../../../TypeScript/Interfaces/IBasicReturn';

export interface IForm extends IBasicReturn {
  Email: string,
  ConfirmEmail: string,
}

export default {
  Email: '',
  ConfirmEmail: '',
} as IForm;
