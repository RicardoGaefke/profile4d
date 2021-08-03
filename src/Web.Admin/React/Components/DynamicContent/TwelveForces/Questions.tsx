// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, ChangeEvent } from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { withSnackbar, WithSnackbarProps } from 'notistack';
import {
  Typography, Grid, Container, List, Divider,
} from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { IQuestions, IQuestion } from '../../../../../TypeScript/Interfaces/IQuestion';
// eslint-disable-next-line no-unused-vars
import { IBasicReturn } from '../../../../../TypeScript/Interfaces/IBasicReturn';
import Loading from '../../Loading/Loading';
import Quantity from '../Quantity/Quantity';
import Question from '../Question/Question';
import Add from '../AddButton/Add';
import setLanguage from './Language';
import useStyles from './Styles';
import MyAxios from '../../../Utils/MyAxios';

type IProps = WithTranslation & WithSnackbarProps;

export default withTranslation()(
  withSnackbar(
    (props: IProps): React.ReactElement<IProps> => {
      setLanguage();
      const { t, enqueueSnackbar } = props;
      const classes = useStyles();

      // eslint-disable-next-line no-unused-vars
      const [state, setState] = useState({} as IQuestions);

      const fetchQuestions = (): void => {
        MyAxios(window.location.href)
          // alterar o webservice ▼
          .get<IQuestions>('/TwelveForces')
          .then((response): void => setState(response.data));
      };

      useEffect((): void => {
        fetchQuestions();
      }, []);

      const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setState({
          Questions: [],
          Success: false,
        });

        MyAxios(window.location.href)
          // alterar o webservice - apenas o nome do serviço
          // não a função ChangeActive) ▼
          .post<IBasicReturn>('/TwelveForces/ChangeActive',
          {
            Guid: event.target.value,
            Active: event.target.checked,
          } as IQuestion)
          .then((response): void => {
            const { data } = response;
            fetchQuestions();
            if (data.Success) {
              enqueueSnackbar('Dados alterados com sucesso', {
                variant: 'success',
              });
            } else {
              fetchQuestions();
              enqueueSnackbar('Falha ao atualizar.', {
                variant: 'error',
              });
            }
          });
      };

      return (
        <Container className={classes.root}>
          <Typography variant="h4" align="center">
            {t('DynamicQuestions:title')}
          </Typography>
          {
            (!state.Success) ? (
              <Loading />
            ) : (
              <>
                <Grid
                  justify="flex-end"
                  container
                >
                  <Grid
                    item
                  >
                    <Quantity
                      minimum={36}
                      total={state.Questions.filter((value): boolean => {
                        if (value.Active) {
                          return true;
                        }
                        return false;
                      }).length}
                    />
                  </Grid>
                </Grid>
                <List>
                  {state.Questions.map((q, i): React.ReactElement => (
                    <React.Fragment key={`Frag-${q.Guid}`}>
                      {/* // alterar o nome da rota para o editar                                               ▼ */}
                      <Question number={(i + 1)} question={q} key={q.Guid} handleChange={handleChange} to="twelveForces" />
                      <Divider key={`Div-${q.Guid}`} />
                    </React.Fragment>
                  ))}
                </List>
              </>
            )
          }
          {/* // alterar apenas o nome da rota ▼ */}
          <Add to="/dynamicContent/TwelveForces/add" />
        </Container>
      );
    },
  ),
);
