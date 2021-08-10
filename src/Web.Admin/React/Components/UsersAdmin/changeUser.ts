import { IBasicReturn } from '../../../../TypeScript/Interfaces/IBasicReturn';
import myAxios from '../../Utils/MyAxios';

const changeUsers = async (userGuid: string, editingAction: number): Promise<IBasicReturn> => {
  let users: IBasicReturn = {
    Success: true,
  };

  let url: string;

  switch (editingAction) {
    case 1:
      url = `Identity/AdminUsersChangeActive/${userGuid}`;
      break;

    case 2:
      url = `Identity/AdminUsersChangeAdmin/${userGuid}`;
      break;

    case 3:
      url = `Identity/AdminUsersChangePassword/${userGuid}`;
      break;

    default:
      url = `Identity/AdminUsersChangeActive/${userGuid}`;
      break;
  }

  await myAxios(window.location.href).get<IBasicReturn>(url)
    .then((response): IBasicReturn => {
      const { data } = response;

      users = data;

      return users;
    })
    .catch((): IBasicReturn => {
      users.Success = false;

      return users;
    });

  return users;
};

export default changeUsers;
