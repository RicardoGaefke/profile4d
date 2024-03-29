import {
  Paper, TableContainer, Table, TableHead, TableCell, TableRow, TableBody, Typography,
  Button,
} from '@material-ui/core';
import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { CloudDownload } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import { IKey } from '../../../../../TypeScript/Interfaces/IKey';

export interface LicencasRecebidasProps extends WithTranslation {
  licencas: IKey[];
}

const LicencasRecebidas = withTranslation()(
  (props: LicencasRecebidasProps): JSX.Element => {
    const { licencas, t } = props;

    return (
      <TableContainer component={Paper}>
        <Table aria-label="Assessments list">
          <TableHead>
            <TableRow>
              <TableCell>Enviada por</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Disponível?</TableCell>
              <TableCell>{t('Assessment:item.header.action')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              (licencas.length === 0) ? (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    <Typography variant="body1">
                      Usuário não possui nenhuma chave ativa.
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                licencas.map((key: IKey): React.ReactNode => (
                  <TableRow key={key.Id}>
                    <TableCell>
                      <Typography>
                        {key.Email}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>
                        {key.Guid}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">
                        {
                          // eslint-disable-next-line no-nested-ternary
                          (key.Started?.includes('0001')) ? (
                            t('Assessment:item.status.0.text')
                          ) : (
                            (key.Finished?.includes('0001')) ? t('Assessment:item.status.1.text') : t('Assessment:item.status.5.text')
                          )
                        }
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>
                        {
                          (key.BlockResult) ? 'Aguardando liberação' : 'Liberada'
                        }
                      </Typography>
                    </TableCell>
                    <TableCell>
                      {
                        (key.Started?.includes('0001')) ? (
                          <Button
                            variant="contained"
                            color="default"
                            title={t('Assessment:item.action.report.title')}
                            disabled
                          >
                            {t('Assessment:item.action.report.text')}
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            color="primary"
                            title={t('Assessment:item.action.report.title')}
                            endIcon={<CloudDownload />}
                            component={NavLink}
                            to={`/answer/report/${key.Guid}`}
                            disabled={key.BlockResult}
                          >
                            {t('Assessment:item.action.report.text')}
                          </Button>
                        )
                      }
                    </TableCell>
                  </TableRow>
                ))
              )
            }
          </TableBody>
        </Table>
      </TableContainer>
    );
  },
);

LicencasRecebidas.displayName = 'LicencasRecebidas';

export default LicencasRecebidas;
