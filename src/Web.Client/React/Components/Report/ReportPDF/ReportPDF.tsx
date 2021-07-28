import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import {
  Grid, CircularProgress,
} from '@material-ui/core';
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  PDFViewer, Document, Page, View, Image,
} from '@react-pdf/renderer';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { withSnackbar, WithSnackbarProps } from 'notistack';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IAnswerRouterProps } from '../../Answer/Router';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IReport } from '../../../../../TypeScript/Interfaces/IReport';
import getReport from '../getReport';
import setLanguage from '../Language';
import useStyles from '../Styles';
import Page01 from './Page01';
import styles from './Styles';

export type ReportPDFProps = WithSnackbarProps & WithTranslation;

const ReportPDF = withTranslation()(
  (props: ReportPDFProps): JSX.Element => {
    const { enqueueSnackbar } = props;
    const { guid } = useParams<IAnswerRouterProps>();
    const history = useHistory();
    setLanguage();
    const classes = useStyles();

    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<IReport>({} as IReport);

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
        className={classes.pdfContainer}
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
            <PDFViewer
              style={{
                display: 'flex',
                width: '100%',
                height: '100%',
                flex: 1,
                border: 0,
              }}
            >
              <Document>
                <Page01 data={data} />
                <Page size="A4">
                  <View style={styles.imageWrapper}>
                    {/* <Image
                      source="/img/locker.jpg"
                      style={styles.image}
                    /> */}
                  </View>
                </Page>
              </Document>
            </PDFViewer>
          )
        }
      </Grid>
    );
  },
);

ReportPDF.displayName = 'ReportPDF';

export default withSnackbar(ReportPDF);
