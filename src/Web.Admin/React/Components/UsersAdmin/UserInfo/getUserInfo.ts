import { IBasicReturn } from '../../../../../TypeScript/Interfaces/IBasicReturn';
import { IUser } from '../../../../../TypeScript/Interfaces/IUser';
import myAxios from '../../../Utils/MyAxios';

const getUserInfo = async (userGuid: string): Promise<IBasicReturn<IUser>> => {
  let userInfo: IBasicReturn<IUser> = {
    Success: true,
  };

  await myAxios(window.location.href).get<IBasicReturn<IUser>>(`Identity/AdminUserGetInfoByGuid/${userGuid}`)
    .then((response): IBasicReturn<IUser> => {
      const { data } = response;

      userInfo = data;

      return userInfo;
    })
    .catch((): IBasicReturn<IUser> => {
      userInfo.Success = false;

      return userInfo;
    });

  return userInfo;
};

export default getUserInfo;
