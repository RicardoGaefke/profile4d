import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import {
  Grid, CircularProgress,
} from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { withSnackbar, WithSnackbarProps } from 'notistack';
// eslint-disable-next-line no-unused-vars
import { IAnswerRouterProps } from '../Answer/Router';
// eslint-disable-next-line no-unused-vars
import { IReport } from '../../../../TypeScript/Interfaces/IReport';
// eslint-disable-next-line no-unused-vars
import { IKey } from '../../../../TypeScript/Interfaces/IKey';
import getReport from './getReport';
import ReportContent from './ReportContent';
import useStyles from './Styles';
import setLanguage from './Language';

export type ReportProps = WithSnackbarProps & WithTranslation;

const Report = withTranslation()(
  (props: ReportProps): JSX.Element => {
    const { enqueueSnackbar } = props;
    const { guid } = useParams<IAnswerRouterProps>();
    const history = useHistory();
    const classes = useStyles();
    setLanguage();

    const [loading, setLoading] = useState<boolean>(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [data, setData] = useState<IReport>({} as IReport);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [key] = useState<IKey>({ Finished: '2021-05-18T16:27:17.44', Name: 'Herique' } as IKey);

    const updateReport = (): void => {
      getReport(guid)
        .then((dataReport): void => {
          if (dataReport.Success) {
            setData(dataReport);
            setLoading(false);
          } else {
            enqueueSnackbar('Código do relatório inválido!', {
              variant: 'error',
            });
            history.push('/');
          }
        })
        .catch((): void => {
          enqueueSnackbar('Código do relatório inválido!', {
            variant: 'error',
          });
          history.push('/');
        });
    };

    useEffect((): void => {
      updateReport();
    }, []);

    return (
      <Grid
        container
        spacing={0}
        direction="column"
        justify="center"
        alignItems="center"
      >
        {
          (loading) ? (
            <Grid item>
              <CircularProgress size={100} />
            </Grid>
          ) : (
            <Grid
              item
              container
              justify="center"
              className={classes.container}
            >
              <div>
                <ReportContent chave={key} data={data} />
              </div>
            </Grid>
          )
        }
      </Grid>
    );
  },
);

Report.displayName = 'Report';

export default withSnackbar(Report);
