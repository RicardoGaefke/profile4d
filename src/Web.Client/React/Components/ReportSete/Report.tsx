import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import {
  Grid, CircularProgress, Fab,
} from '@material-ui/core';
import { PictureAsPdf } from '@material-ui/icons';
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
import getReportSete from './getReportSete';
import ReportContent from './ReportContent';
import useStyles from './Styles';
import setLanguage from './Language';

export type ReportProps = WithSnackbarProps & WithTranslation;

const ReportSete = withTranslation()(
  (props: ReportProps): JSX.Element => {
    const { enqueueSnackbar } = props;
    const { guid } = useParams<IAnswerRouterProps>();
    const history = useHistory();
    const classes = useStyles();
    setLanguage();

    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<IReport>({} as IReport);


    const updateReport = (): void => {
      getReportSete(guid)
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
        id="printingReport"
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
                <ReportContent data={data} />
                <Fab
                  aria-label="Gerar PDF"
                  className={classes.fab}
                  color="primary"
                  size="large"
                  onClick={(): void => {
                    window.open(`/GetPdfFromReport/${guid}`);
                  }}
                >
                  <PictureAsPdf />
                </Fab>
              </div>
            </Grid>
          )
        }
      </Grid>
    );
  },
);

ReportSete.displayName = 'ReportSete';

export default withSnackbar(ReportSete);
