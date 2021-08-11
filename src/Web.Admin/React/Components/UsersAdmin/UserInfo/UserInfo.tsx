import React, { useEffect, useState } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Container, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { withSnackbar, WithSnackbarProps } from 'notistack';
import { IUser } from '../../../../../TypeScript/Interfaces/IUser';
import Loading from '../../Loading/Loading';
import getUserInfo from './getUserInfo';
import { RouteWithGuidProps } from '../../../../../TypeScript/Interfaces/IRouteWithProps';
import useStyles from '../Styles';
import UserInfoBox from './UserInfoBox';
import LicencasRecebidas from './LicencasRecebidas';
import { IKey } from '../../../../../TypeScript/Interfaces/IKey';
import getUserLicencasRecebidas from './getUserLicencasRecebidas';
import setLanguage from '../Language';

const UserInfo = withTranslation()(
  (props: WithTranslation & WithSnackbarProps): JSX.Element => {
    const { enqueueSnackbar } = props;
    const classes = useStyles();
    setLanguage();

    const { guid } = useParams<RouteWithGuidProps>();

    const [userInfo, setUserInfo] = useState<IUser>({});
    const [licencasRecebidas, setLicencasRecebidas] = useState<IKey[]>([]);
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

    const getLicencasRecebidas = async (): Promise<void> => {
      setLoading(true);
      await getUserLicencasRecebidas(guid)
        .then((data): void => {
          if (data.Success) {
            setLicencasRecebidas(data.Object as IKey[]);
            setLoading(false);
          }
        })
        .catch((): void => {
          enqueueSnackbar('Desculpe, mas houve um erro ao buscar licenças recebidas!', {
            variant: 'error',
          });
        });
    };

    useEffect((): void => {
      getData();
      getLicencasRecebidas();
    }, []);

    return (loading) ? (<Loading />) : (
      <Container className={classes.root}>
        <Typography variant="h3" align="center" gutterBottom>
          Informações do usuário
        </Typography>
        <UserInfoBox userInfo={userInfo} />
        <Typography variant="h4" align="center" gutterBottom>
          Licenças enviadas
        </Typography>
        <Typography variant="h4" align="center" gutterBottom>
          Licenças recebidas
        </Typography>
        <LicencasRecebidas licencas={licencasRecebidas} />
      </Container>
    );
  },
);

UserInfo.displayName = 'UserInfo';

export default withSnackbar(UserInfo);
