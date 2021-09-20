/* eslint-disable no-nested-ternary */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody,
  Typography, Button, Grid,
} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
// eslint-disable-next-line no-unused-vars
import { IKey } from '../../../../../TypeScript/Interfaces/IKey';
import SelectLicenca from '../Licencas/SelectLicenca/SelectLicenca';

export interface NaoRecebidasListaProps extends WithTranslation {
  keys: IKey[];
  onCancelar: (guid: string) => void;
  onAlterar: (guid: string, type: number) => void;
}

const NaoRecebidasLista = withTranslation()(
  (props: NaoRecebidasListaProps): JSX.Element => {
    const {
      keys, onCancelar, onAlterar,
    } = props;

    const tipoDeLicenca = (type: number): string => {
      if (type === 1) return 'Degustação';
      if (type === 2) return 'Pessoal';
      if (type === 3) return 'Profissional';
      return 'Avançada';
    };

    return (
      <TableContainer component={Paper}>
        <Table aria-label="Assessments list">
          <TableHead>
            <TableRow>
              <TableCell>email</TableCell>
              <TableCell>Tipo de licença</TableCell>
              <TableCell>Enviada</TableCell>
              <TableCell>Alterar</TableCell>
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
                    <Typography>
                      {tipoDeLicenca(key.Type as number)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {new Date(key.SentWhen as string).toLocaleDateString()}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Button>
                      <Grid>
                        <SelectLicenca keyGuid={key.Guid as string} keyType={key.Type as number} onAlterar={onAlterar} />
                      </Grid>
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ backgroundColor: '#E0E0E0' }}
                      title="Cancelar envio de chave"
                      onClick={(): void => { onCancelar(key.Guid as string); }}
                    >
                      <Grid>
                        <CancelIcon style={{ color: '#A0A0A0', fontSize: 20, marginBottom: -4 }} />
                      </Grid>
                    </Button>
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

NaoRecebidasLista.displayName = 'NaoRecebidasLista';

export default NaoRecebidasLista;
