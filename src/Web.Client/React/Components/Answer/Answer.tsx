import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
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

const Answer = (props: WithSnackbarProps): JSX.Element => {
  const { guid } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [question, setQuestion] = useState<IQuestion>({} as IQuestion);
  const [{ Language }] = useStateValue();

  const { enqueueSnackbar } = props;

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
          <AnswerForm
            Id={question.Id}
            Message={(Language === 'ENG') ? question.Text_ENG : question.Text_PT}
            submitAction={(): void => {
              getQuestion();
            }}
          />
        )
      }
    </Grid>
  );
};

Answer.displayName = 'Answer';

export default withSnackbar(Answer);
