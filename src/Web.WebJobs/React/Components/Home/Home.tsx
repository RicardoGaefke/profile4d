import React, { useEffect, useState } from 'react';
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

  useEffect((): void => {
    myAxios(window.location.href).get<IEmailRow[]>('Emails/MI4D').then(
      (response): void => {
        const { data } = response;

        setMi4d(data);
      },
    );
  }, []);

  useEffect((): void => {
    myAxios(window.location.href).get<IEmailRow[]>('Emails/Profile4D').then(
      (response): void => {
        const { data } = response;

        setProfile4d(data);
      },
    );
  }, []);

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
