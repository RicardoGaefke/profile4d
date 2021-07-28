import React, { useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withSnackbar, WithSnackbarProps } from 'notistack';
import {
  CircularProgress, Grid, Typography,
} from '@material-ui/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IKeysPreview } from '../../../../../TypeScript/Interfaces/IKeysPreview';
import Axios from '../../../Utils/Axios';
import useStyles from './Styles';
import ListaDeLicencas from './ListaDeLicencas';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IKey } from '../../../../../TypeScript/Interfaces/IKey';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IBasicReturn } from '../../../../../TypeScript/Interfaces/IBasicReturn';
import EnviaLicencas from './Form/Form.Context';
import CardsProfile from '../../CardsProfile/CardsProfile';

const Licencas = withTranslation()(
  (props: WithSnackbarProps & WithTranslation): JSX.Element => {
    const { enqueueSnackbar } = props;
    const [licencas, setLicencas] = useState<IKeysPreview>({});
    const [loading, setLoading] = useState<boolean>(true);

    const classes = useStyles();

    const getKeys = async (): Promise<void> => {
      setLoading(true);
      await Axios(window.location.href).get<IKeysPreview>('SendKey/GetLicensesByConsultant').then(
        (response): void => {
          const { data } = response;

          setLicencas(data);
          setLoading(false);
        },
      );
    };

    const desbloquearChave = async (guid: string): Promise<void> => {
      await Axios(window.location.href).get<IBasicReturn>(`SendKey/DesbloquearChave/${guid}`).then(
        (response): void => {
          const { data } = response;

          if (data.Success) {
            getKeys();
          } else {
            enqueueSnackbar('Desculpe, falha ao desbloquear chave!', {
              variant: 'error',
            });
          }
        },
      );
    };

    const cancelarChave = async (guid: string): Promise<void> => {
      await Axios(window.location.href).get<IBasicReturn>(`SendKey/CancelarChave/${guid}`).then(
        (response): void => {
          const { data } = response;

          if (data.Success) {
            getKeys();
          } else {
            enqueueSnackbar('Desculpe, falha ao cancelar chave! Provavelmente já foi iniciada!', {
              variant: 'error',
            });
          }
        },
      );
    };

    useEffect((): void => {
      getKeys();
    }, []);

    return (loading) ? (
      <Grid
        container
        justify="center"
        alignContent="center"
      >
        <Grid item>
          <CircularProgress size={100} />
        </Grid>
      </Grid>
    ) : (
      <Grid
        container
        justify="center"
        alignContent="center"
        direction="column"
      >
        <div />
        <Grid
          item
          container
          alignItems="center"
          justify="center"
          xs={12}
          md={12}
          lg={12}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            style={{ paddingTop: 16 }}
          >
            Tuas licenças
          </Typography>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justify="center"
          xs={12}
          md={12}
          lg={12}
        >
          <div className={classes.root}>
            <CardsProfile
              CardsText={`${licencas.Total} != "undefined` ? `${licencas.Total}` : `${0}`}
              CardsProfileTitle="Total"
            />
            <CardsProfile
              CardsText={`${licencas.Available} != "undefined` ? `${licencas.Available}` : `${0}`}
              CardsProfileTitle="Disponíveis"
            />
            <CardsProfile
              CardsText={
                `${(licencas.Total as number) - (licencas.Available as number)} != "NaN"`
                  ? `${(licencas.Total as number) - (licencas.Available as number)}`
                  : `${0}`}
              CardsProfileTitle="Usados"
            />
          </div>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justify="center"
          xs={12}
          md={12}
          lg={12}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            style={{ paddingTop: 26 }}
          >
            Enviar avaliação
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={12}
          lg={12}
        >
          <EnviaLicencas />
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={12}
          lg={12}
        >
          <ListaDeLicencas keys={licencas.Keys as IKey[]} onDesbloquear={desbloquearChave} onCancelar={cancelarChave} />
        </Grid>
      </Grid>
    );
  },
);

Licencas.displayName = 'Licencas';

export default withSnackbar(Licencas);
