import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { withSnackbar, WithSnackbarProps } from 'notistack';
import {
  Grid, CircularProgress,
} from '@material-ui/core';
import Axios from '../../Utils/Axios';
// eslint-disable-next-line no-unused-vars
import { IQuestion } from '../../../../TypeScript/Interfaces/IQuestion';
import AnswerForm from '../Options/RadioOptions.form';
import { useStateValue } from '../../Initial/Context/StateProvider';
// eslint-disable-next-line no-unused-vars
import { IAnswerRouterProps } from './Router';
import ProgressBar from '../ProgressBar/ProgressBar';

const Answer = (props: WithSnackbarProps): JSX.Element => {
  const { guid } = useParams<IAnswerRouterProps>();
  const [loading, setLoading] = useState<boolean>(true);
  const [question, setQuestion] = useState<IQuestion>({} as IQuestion);
  const [{ Language }] = useStateValue();

  const { enqueueSnackbar } = props;
  const history = useHistory();

  const getQuestion = async (): Promise<void> => {
    setLoading(true);
    await Axios(window.location.href).get<IQuestion>(`SendKey/Question/${guid}`).then(
      (response): void => {
        const { data } = response;

        if (data.Success) {
          setQuestion(data);
          setLoading(false);
        } else if (data.Code) {
          enqueueSnackbar('Já respondido!', {
            variant: 'warning',
          });
        } else {
          history.push('/');
        }
      },
    );
  };

  useEffect((): void => {
    getQuestion();
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
          
            <Grid
              container
              justify="center"
              alignContent="center"
              xs={12}
            >
              <Grid
                item
                xs={12}
                md={6}
              >
                <ProgressBar Completed={10} Total={99} />
              </Grid>
            </Grid>
            <Grid
              container
              justify="center"
              alignContent="center"
            >
              <Grid item>
                <AnswerForm
                  Id={question.Id}
                  Message={(Language === 'ENG') ? question.Text_ENG : question.Text_PT}
                  submitAction={(): void => {
                    getQuestion();
                  }}
                />
              </Grid>
            </Grid>
            
          </>
        )
      }
    </Grid>
  );
};

Answer.displayName = 'Answer';

export default withSnackbar(Answer);
