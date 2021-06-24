/* eslint-disable no-nested-ternary */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import {
  Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody,
  Typography, Button, Grid,
} from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { IKey } from '../../../../../TypeScript/Interfaces/IKey';

export interface ListaDeLicencasProps extends WithTranslation {
  keys: IKey[];
  onDesbloquear: (guid: string) => void;
  onCancelar: (guid: string) => void;
}

const ListaDeLicencas = withTranslation()(
  (props: ListaDeLicencasProps): JSX.Element => {
    const { keys, onDesbloquear, onCancelar } = props;

    return (
      <TableContainer component={Paper}>
        <Table aria-label="Assessments list">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Enviada</TableCell>
              <TableCell>Iniciada</TableCell>
              <TableCell>Bloqueada</TableCell>
              <TableCell>&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              keys.map((key): React.ReactNode => (
                <TableRow key={key.Guid}>
                  <TableCell>
                    <Typography>
                      {key.Name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {key.Email}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {
                      // eslint-disable-next-line no-nested-ternary
                    (key.Started?.includes('1900')) ? (
                      <Grid
                        item
                        container
                        xs={12}
                        md={12}
                        lg={12}
                      >
                        <Grid
                          item
                          xs={6}
                        >
                          <Typography>Não Iniciada</Typography>
                        </Grid>
                      </Grid>
                    ) : (!key.Started?.includes('1900') && !key.Finished?.includes('1900')) ? (
                      <Grid
                        item
                        container
                        xs={12}
                        md={12}
                        lg={12}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          title="Abrir resultado"
                          component={NavLink}
                          to={`/answer/report/${key.Guid}`}
                        >
                          Resultado
                        </Button>
                      </Grid>
                    ) : (
                      <Grid
                        item
                        container
                        xs={12}
                        md={12}
                        lg={12}
                      >
                        <Grid
                          item
                          xs={6}
                        >
                          <Typography>Iniciada</Typography>
                        </Grid>
                      </Grid>
                    )
                    }
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {new Date(key.SentWhen as string).toLocaleDateString()}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {((key.Started as string).includes('1900')) ? '---' : new Date(key.Started as string).toLocaleDateString()}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {(key.BlockResult) ? (
                      <Button
                        variant="contained"
                        color="default"
                        title="Desbloquear"
                        onClick={(): void => { onDesbloquear(key.Guid as string); }}
                      >
                        Desbloquear
                      </Button>
                    ) : (
                      <Typography>Desbloqueada</Typography>
                    )}
                  </TableCell>
                  <TableCell>
                    {
                      (key.Started?.includes('1900')) && (
                        <Button
                          variant="contained"
                          color="default"
                          title="Cancelar envio de chave"
                          onClick={(): void => { onCancelar(key.Guid as string); }}
                        >
                          Cancelar
                        </Button>
                      )
                    }
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    );
  },
);

ListaDeLicencas.displayName = 'ListaDeLicencas';

export default ListaDeLicencas;
