import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import {
  Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody,
  Typography, Button,
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
              <TableCell>email</TableCell>
              <TableCell>Status</TableCell>
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
                      {key.Email}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {
                      (!key.Finished?.includes('1900')) && (
                        <Button
                          variant="contained"
                          color="default"
                          title="Abrir resultado"
                          component={NavLink}
                          to={`/answer/report/${key.Guid}`}
                        >
                          Resultado
                        </Button>
                      )
                    }
                    {
                      (!key.Started?.includes('1900') && key.Finished?.includes('1900')) && (
                        <Typography>Iniciada</Typography>
                      )
                    }
                    {
                      (key.Started?.includes('1900')) && (
                        <Typography>Não Iniciada</Typography>
                      )
                    }
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
