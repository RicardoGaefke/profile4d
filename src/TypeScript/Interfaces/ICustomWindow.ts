import { IInitialContext } from './IInitialContext';

export interface ICustomWindow extends Window {
  MyInitialState: IInitialContext,
}