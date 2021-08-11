import React, { useEffect, useState } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { withSnackbar, WithSnackbarProps } from 'notistack';
import { IUser } from '../../../../../TypeScript/Interfaces/IUser';
import Loading from '../../Loading/Loading';
import getUserInfo from './getUserInfo';
import { RouteWithGuidProps } from '../../../../../TypeScript/Interfaces/IRouteWithProps';

const UserInfo = withTranslation()(
  (props: WithTranslation & WithSnackbarProps): JSX.Element => {
    const { enqueueSnackbar } = props;

    const { guid } = useParams<RouteWithGuidProps>();

    const [userInfo, setUserInfo] = useState<IUser>({});
    const [loading, setLoading] = useState<boolean>(true);

    const getData = async (): Promise<void> => {
      setLoading(true);
      await getUserInfo(guid)
        .then((data): void => {
          if (data.Success) {
            setUserInfo(data.Object as IUser);
            setLoading(false);
          }
        })
        .catch((): void => {
          enqueueSnackbar('Desculpe, mas houve um erro ao buscar UserInfo!', {
            variant: 'error',
          });
        });
    };

    useEffect((): void => {
      getData();
    }, []);

    return (loading) ? (<Loading />) : (
      <>
        {userInfo.Name}
      </>
    );
  },
);

UserInfo.displayName = 'UserInfo';

export default withSnackbar(UserInfo);
