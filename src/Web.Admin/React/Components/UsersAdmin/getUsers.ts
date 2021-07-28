import { IPagination } from '../../../../TypeScript/Interfaces/IPagination';
import { IBasicReturn } from '../../../../TypeScript/Interfaces/IBasicReturn';
import { IUser } from '../../../../TypeScript/Interfaces/IUser';
import myAxios from '../../Utils/MyAxios';

const getUsers = async (page: IPagination): Promise<IBasicReturn<IPagination<IUser[]>>> => {
  let users: IBasicReturn<IPagination<IUser[]>> = {
    Success: true,
  };

  await myAxios(window.location.href).get<IBasicReturn<IPagination<IUser[]>>>(`Identity/UsersForAdminView/${page.Page}/${page.PageSize}`)
    .then((response): IBasicReturn<IPagination<IUser[]>> => {
      const { data } = response;

      users = data;

      return users;
    })
    .catch((): IBasicReturn<IPagination<IUser[]>> => {
      users.Success = false;

      return users;
    });

  return users;
};

export default getUsers;
