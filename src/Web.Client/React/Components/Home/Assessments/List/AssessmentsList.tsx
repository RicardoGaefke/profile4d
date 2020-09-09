import React, { useState, useEffect } from 'react';
import {
  TableContainer, Paper, Table, TableHead, TableCell, TableRow, TableBody, CircularProgress, Grid, Typography, Button,
} from '@material-ui/core';
import { CloudDownload } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import Axios from '../../../../Utils/Axios';
// eslint-disable-next-line no-unused-vars
import { IKey } from '../../../../../../TypeScript/Interfaces/IKey';

const AssessmentsList = withTranslation()(
  (props: WithTranslation): JSX.Element => {
    const { t } = props;
    const [keys, setKeys] = useState<IKey[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const getKeys = async (): Promise<void> => {
      await Axios(window.location.href).get<IKey[]>('SendKey/GetActives').then(
        (response): void => {
          const { data } = response;

          setKeys(data);
          setLoading(false);
        },
      );
    };

    useEffect((): void => {
      getKeys();

      return setKeys([]);
    }, []);

    return (
      (loading) ? (
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
        <TableContainer component={Paper}>
          <Table aria-label="Assessments list">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>{t('Assessment:item.header.action')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                (keys.length === 0) ? (
                  <TableRow>
                    <TableCell colSpan={3} align="center">
                      <Typography variant="body1">
                        Você não possui nenhuma chave ativa.
                      </Typography>
                    </TableCell>
                  </TableRow>
                ) : (
                  keys.map((key): React.ReactNode => (
                    <TableRow key={key.Id}>
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
                        {
                          (key.Finished?.includes('0001')) ? (
                            <Button
                              variant="contained"
                              color="default"
                              title={
                                (key.Started?.includes('0001')) ? t('Assessment:item.action.start.title') : t('Assessment:item.action.continue.title')
                              }
                              component={NavLink}
                              to={`/answer/intro/${key.Guid}`}
                            >
                              {
                                (key.Started?.includes('0001')) ? (
                                  t('Assessment:item.action.start.text')
                                ) : (
                                  t('Assessment:item.action.continue.text')
                                )
                              }
                            </Button>
                          ) : (
                            <Button
                              variant="contained"
                              color="primary"
                              title={t('Assessment:item.action.report.title')}
                              endIcon={<CloudDownload />}
                              component={NavLink}
                              to={`/answer/report/${key.Guid}`}
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
      )
    );
  },
);

AssessmentsList.displayName = 'AssessmentList';

export default AssessmentsList;
