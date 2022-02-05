import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { withSnackbar, WithSnackbarProps } from 'notistack';
import {
  CircularProgress, Grid, Typography,
} from '@material-ui/core';
import Axios from '../../../Utils/Axios';
// eslint-disable-next-line no-unused-vars
import { IKey } from '../../../../../TypeScript/Interfaces/IKey';
// eslint-disable-next-line no-unused-vars
import { IBasicReturn } from '../../../../../TypeScript/Interfaces/IBasicReturn';
import NaoRecebidasLista from './NaoRecebidasLista';

const NaoRecebidas = withTranslation()(
  (props: WithSnackbarProps & WithTranslation): JSX.Element => {
    const { enqueueSnackbar } = props;
    const [licencas, setLicencas] = useState<IKey[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const getKeys = async (): Promise<void> => {
      setLoading(true);
      await Axios(window.location.href).get<IKey[]>('SendKey/ChavesNaoRecebidasPorConsultor').then(
        (response): void => {
          const { data } = response;

          // @ts-ignore
          setLicencas(data.Object as IKey[]);
          setLoading(false);
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

    const alterarTipoDeChave = async (guid: string, type: number): Promise<void> => {
      const chave = {
        Guid: guid,
        Type: type,
      } as IKey;

      await Axios(window.location.href).post<IBasicReturn>('SendKey/AlterarTipoDeLicenca', chave)
        .then(
          (response): void => {
            const { data } = response;

            if (data.Success) {
              enqueueSnackbar('Tipo de chave alterado com sucesso!', {
                variant: 'success',
              });
              getKeys();
            } else {
              enqueueSnackbar('Desculpe, falha ao alterar tipo de chave chave!', {
                variant: 'error',
              });
            }
          },
        )
        .catch((): void => {
          enqueueSnackbar('Desculpe, falha ao alterar tipo de chave chave!', {
            variant: 'error',
          });
        });
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
      <>
        {
          (licencas.length > 0) && (
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
                  Licenças não entregues
                </Typography>
              </Grid>
              <Grid
                item
                container
                xs={12}
                md={12}
                lg={12}
              >
                <NaoRecebidasLista
                  keys={licencas as IKey[]}
                  onCancelar={cancelarChave}
                  onAlterar={alterarTipoDeChave}
                />
              </Grid>
            </Grid>
          )
        }
      </>
    );
  },
);

NaoRecebidas.displayName = 'NaoRecebidas';

export default withSnackbar(NaoRecebidas);
