export interface IBasicReturn {
  Success?: boolean;
  Message?: string;
  Details?: string;
  Code?: string;
  Url?: string;
}

export interface IBasicReturn<T = {}>
{
  Success?: boolean;
  Message?: string;
  Details?: string;
  Code?: string;
  Url?: string;
  Object?: T;
}

export class BasicReturn implements IBasicReturn {
  Success: boolean;

  Code: string;

  Message: string;

  constructor(success: boolean) {
    this.Success = success;
  }
}
