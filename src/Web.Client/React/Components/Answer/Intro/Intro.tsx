import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import {
  Grid, CircularProgress, Typography, Button,
} from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import { useStateValue } from '../../../Initial/Context/StateProvider';
import useStyles from './Styles';
import Axios from '../../../Utils/Axios';
// eslint-disable-next-line no-unused-vars
import { IIntro } from '../../../../../TypeScript/Interfaces/IIntro';
import setLanguage from './Language';
// eslint-disable-next-line no-unused-vars
import { IAnswerRouterProps } from '../Router';

const Answer = withTranslation()(
  (props:WithTranslation): JSX.Element => {
    const { t } = props;
    const { guid } = useParams<IAnswerRouterProps>();
    const [{ Language }] = useStateValue();
    const classes = useStyles();

    setLanguage();

    const [loading, setLoading] = useState<boolean>(true);
    const [intro, setIntro] = useState<IIntro>({} as IIntro);

    const getIntro = async (): Promise<void> => {
      await Axios(window.location.href).get<IIntro>('SendKey/Intro').then(
        (response): void => {
          const { data } = response;

          setIntro(data);
          setLoading(false);
        },
      );
    };

    useEffect((): void => {
      getIntro();
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
                item
                className={classes.item}
              >
                <img
                  src={`https://api.staging.performance9x.com.br/Image/Show/${intro.Image.Id?.toString()}.png`}
                  alt={(Language === 'ENG') ? intro.Image.Alt_ENG : intro.Image.Alt_PT}
                  className={classes.image}
                />
              </Grid>
              <Grid
                item
                className={classes.item}
              >
                <Typography
                  align="center"
                  variant="h3"
                  color="initial"
                >
                  {(Language === 'ENG') ? (intro.Texts.Title_ENG) : (intro.Texts.Title_PT)}
                </Typography>
              </Grid>
              <Grid
                item
                className={classes.item}
                md={6}
              >
                <Typography
                  variant="body1"
                  component="div"
                  color="initial"
                  align="justify"
                  gutterBottom
                  dangerouslySetInnerHTML={{
                    __html: (Language === 'ENG') ? (intro.Texts.Text_ENG) : (intro.Texts.Text_PT),
                  }}
                />
                <Button
                  variant="contained"
                  color="default"
                  title={t('Answer:button.title')}
                  endIcon={<ArrowForward />}
                  component={NavLink}
                  to={`/answer/assessment/${guid}`}
                >
                  {t('Answer:button.text')}
                </Button>
              </Grid>
            </>
          )
        }
      </Grid>
    );
  },
);

Answer.displayName = 'Answer';

export default Answer;
