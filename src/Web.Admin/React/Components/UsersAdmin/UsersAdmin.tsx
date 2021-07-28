import React, { useEffect } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
// import { IPagination, Pagination as PaginationClass } from '../../../../TypeScript/Interfaces/IPagination';
import { IUser } from '../../../../TypeScript/Interfaces/IUser';
// import { IUser } from '../../../../TypeScript/Interfaces/IUser';
// import Loading from '../Loading/Loading';
// import getUsers from './getUsers';
import { IBasicReturn, BasicReturn } from '../../../../TypeScript/Interfaces/IBasicReturn';

const UsersAdmin = withTranslation()(
  (props: WithTranslation): JSX.Element => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { t } = props;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const initialPagination: IBasicReturn<IUser[]> = new BasicReturn(true);

    // const [loading, setLoading] = useState<boolean>(true);
    // const [users, setUsers] = useState<IPagination<IUser[]>>(new PaginationClass(1, 30, 30));

    // const getData = async (pagination: IPagination = initialPagination): Promise<void> => {
    //   setLoading(true);
    //   await getUsers(pagination)
    //     .then((data): void => {
    //       if (data.Success) {
    //         setUsers(data.Object as IPagination<IUser[]>);
    //         setLoading(false);
    //       }
    //     })
    //     .catch((): void => {
    //       setUsers(initialPagination);
    //     });
    // };

    useEffect((): void => {
      // getData();
    }, []);

    return (
      <>
        admin
      </>
    );
  },
);

UsersAdmin.displayName = 'UsersAdmin';

export default UsersAdmin;
