// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, ChangeEvent } from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  Typography, Grid, Container, List, Divider,
} from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { IQuestions } from '../../../../../TypeScript/Interfaces/IQuestion';
import Loading from '../../Loading/Loading';
import Quantity from './Quantity/Quantity';
import Question from './Question/Question';
import Add from '../AddButton/Add';
import setLanguage from './Language';
import useStyles from './Styles';
import MyAxios from '../../../Utils/MyAxios';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    setLanguage();
    const { t } = props;
    const classes = useStyles();

    // eslint-disable-next-line no-unused-vars
    const [state, setState] = useState({} as IQuestions);

    useEffect((): void => {
      MyAxios(window.location.href)
        .get<IQuestions>('/Questions')
        .then((response): void => setState(response.data));
    }, []);

    const handleChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean): void => {
      console.log(checked);
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
                  <Quantity minimum={99} total={state.Questions.length} />
                </Grid>
              </Grid>
              <List>
                {state.Questions.map((q, i): React.ReactElement => (
                  <React.Fragment key={`Frag-${q.Guid}`}>
                    <Question number={(i + 1)} question={q} key={q.Guid} handleChange={handleChange} />
                    <Divider key={`Div-${q.Guid}`} />
                  </React.Fragment>
                ))}
              </List>
            </>
          )
        }
        <Add to="/dynamicContent/questions/add" />
      </Container>
    );
  },
);
