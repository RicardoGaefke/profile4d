import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { HubConnectionBuilder, HubConnection } from '@microsoft/signalr';
import {
  Container, Typography,
} from '@material-ui/core';
import useStyles from './Styles';
import Tabs from './Tabs/Tabs';
// eslint-disable-next-line no-unused-vars
import { IEmailRow } from './Table/IProps';
import myAxios from '../../Utils/MyAxios';

export default (): React.ReactElement => {
  const classes = useStyles({});

  const [mi4d, setMi4d] = useState<IEmailRow[]>([]);
  const [profile4d, setProfile4d] = useState<IEmailRow[]>([]);

  const getMI4D = async (): Promise<void> => {
    await myAxios(window.location.href).get<IEmailRow[]>('Emails/MI4D').then(
      (response): void => {
        const { data } = response;

        setMi4d(data);
      },
    );
  };

  const getProfile4D = async (): Promise<void> => {
    await myAxios(window.location.href).get<IEmailRow[]>('Emails/Profile4D').then(
      (response): void => {
        const { data } = response;

        setProfile4d(data);
      },
    );
  };

  useEffect((): void => {
    getMI4D();
    getProfile4D();
  }, []);

  const [connection, setConnection] = useState<HubConnection | null>(null);
  useEffect((): void => {
    const newConnection = new HubConnectionBuilder()
      .withUrl('/hubs/webjobs')
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, []);

  useEffect((): void => {
    if (connection) {
      connection.start().then(
        (): void => {
          connection.on('MI4D', (): void => {
            getMI4D();
          });

          connection.on('Profile4D', (): void => {
            getProfile4D();
          });
        },
      ).catch((e): void => {
        // eslint-disable-next-line no-console
        console.log('Connection error: ', e);
      });
    }
  }, [connection]);

  return (
    <>
      <Container maxWidth="lg" className={classes.main}>
        <Typography variant="h3" align="center" gutterBottom>
          Acompanhar envio de emails
        </Typography>
        <Tabs mi4d={mi4d} profile4d={profile4d} />
      </Container>
    </>
  );
};
