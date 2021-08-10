import React, { useEffect, useState } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { IPagination, Pagination as PaginationClass } from '../../../../TypeScript/Interfaces/IPagination';
import { IUser } from '../../../../TypeScript/Interfaces/IUser';
import Loading from '../Loading/Loading';
import getUsers from './getUsers';
import UsersAdminPage from './UsersAdminPage';

const UsersAdmin = withTranslation()(
  (props: WithTranslation): JSX.Element => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { t } = props;

    const initialPagination: IPagination<IUser[]> = new PaginationClass(1, 50, 50);

    const [loading, setLoading] = useState<boolean>(true);
    const [users, setUsers] = useState<IPagination<IUser[]>>(new PaginationClass(1, 50, 50));

    const getData = async (pagination: IPagination = initialPagination): Promise<void> => {
      setLoading(true);
      await getUsers(pagination)
        .then((data): void => {
          if (data.Success) {
            setUsers(data.Object as IPagination<IUser[]>);
            setLoading(false);
          }
        })
        .catch((): void => {
          setLoading(false);
          setUsers(initialPagination);
        });
    };

    const updatePage = (newPage: string): void => {
      const newPagination = new PaginationClass(parseInt(newPage, 10), users.PageSize);
      getData(newPagination);
    };

    useEffect((): void => {
      getData();
    }, []);

    return (loading) ? (<Loading />) : (
      <UsersAdminPage
        users={users.Object as IUser[]}
        updatePage={updatePage}
        getData={getData}
      />
    );
  },
);

UsersAdmin.displayName = 'UsersAdmin';

export default UsersAdmin;
