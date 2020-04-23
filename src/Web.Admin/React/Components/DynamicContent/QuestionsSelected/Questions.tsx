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
import QuestionsSelect from '../Select/Select';
// // These imports are just to use Select without API values
// // eslint-disable-next-line no-unused-vars
// import SelectedValues, { ITemporarySelect } from './TemporarySelect';
// // eslint-disable-next-line no-unused-vars
// import { ISelect } from './ISelect';

type IProps = WithTranslation & WithSnackbarProps;

export default withTranslation()(
  withSnackbar(
    (props: IProps): React.ReactElement<IProps> => {
      setLanguage();
      const { t, enqueueSnackbar } = props;
      const classes = useStyles();

      // eslint-disable-next-line no-unused-vars
      const [state, setState] = useState({} as IQuestions);

      // // eslint-disable-next-line no-unused-vars
      // const [selectChanges, setSelectChanges] = useState({} as ISelect);

      const fetchQuestions = (): void => {
        MyAxios(window.location.href)
          // alterar o webservice ▼
          .get<IQuestions>('/QuestionsSelected')
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
          .post<IBasicReturn>('/QuestionsSelected/ChangeActive',
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
                  container
                  spacing={2}
                  justify="center"
                  alignItems="center"
                  className={classes.questions}
                >
                  <Grid
                    item
                    md={6}
                    xs={12}
                  >
                    <QuestionsSelect />
                    {/* <Typography
                      component="p"
                      className={classes.title}
                    >
                      {`${t('DynamicQuestions:subtitle')}:`}
                    </Typography>
                    <FormControl
                      margin="dense"
                      variant="outlined"
                      fullWidth
                    >
                      <InputLabel>
                        {t('DynamicQuestions:label')}
                      </InputLabel>
                      <Select
                        label="Categories"
                        value={selectChanges.categories}
                        onChange={(value: any): void => {
                          setSelectChanges(value);
                        }}
                        inputProps={{
                          id: 'selectChanges.categories',
                          name: 'selectChanges.categories',
                        }}
                      >
                        {
                          SelectedValues.map((s: ITemporarySelect): React.ReactElement<HTMLElement> => (
                            <MenuItem key={s.id} value={s.name}>
                              {s.name}
                            </MenuItem>
                          ))
                        }
                      </Select>
                    </FormControl> */}
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                  >
                    <Quantity
                      minimum={99}
                      total={state.Questions.filter((value): boolean => {
                        if (value.Active) {
                          return true;
                        }
                        return false;
                      }).length}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  className={classes.questions}
                >
                  <Grid item md={12} xs={12}>
                    <List>
                      {state.Questions.map((q, i): React.ReactElement => (
                        <React.Fragment key={`Frag-${q.Guid}`}>
                          {/* // alterar o nome da rota para o editar                                               ▼ */}
                          <Question number={(i + 1)} question={q} key={q.Guid} handleChange={handleChange} to="questionsSelected" />
                          <Divider key={`Div-${q.Guid}`} />
                        </React.Fragment>
                      ))}
                    </List>
                  </Grid>
                </Grid>
              </>
            )
          }
          {/* // alterar apenas o nome da rota ▼ */}
          <Add to="/dynamicContent/questionsSelected/add" />
        </Container>
      );
    },
  ),
);
