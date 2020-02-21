export interface ICreateUser {
  Name: string,
  Email: string,
  ConfirmEmail: string,
  Password: string,
  NewPassword?: string,
  ConfirmPassword: string,
  ShowPassword: boolean,
  ShowConfirmPassword: boolean,
  ValidatePassword?: string,
}