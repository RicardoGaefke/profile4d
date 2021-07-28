// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import { IPagination } from '../../../../TypeScript/Interfaces/IPagination';
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import { IBasicReturn } from '../../../../TypeScript/Interfaces/IBasicReturn';
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import { IUser } from '../../../../TypeScript/Interfaces/IUser';
// import myAxios from '../../Utils/MyAxios';

// const getUsers = async (page: IPagination): Promise<IBasicReturn<IPagination<IUser[]>>> => {
//   let users: IBasicReturn<IPagination<IUser[]>> = {
//     Success: true,
//   };

//   await myAxios(window.location.href).get<IBasicReturn<IPagination<IUser[]>>>(`Identity/UsersForAdminView/${page.Page}/${page.PageSize}`)
//     .then((response): IBasicReturn<IPagination<IUser[]>> => {
//       const { data } = response;

//       users = data;

//       return users;
//     })
//     .catch((): IBasicReturn<IPagination<IUser[]>> => {
//       users.Success = false;

//       return users;
//     });

//   return users;
// };

// export default getUsers;
