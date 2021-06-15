import { Button, Grid, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import useStyles from './Styles';
// eslint-disable-next-line no-unused-vars
import { RouteWithGuidProps } from '../../../../TypeScript/Interfaces/IRouteWithProps';

const ConfirmKey = withTranslation()(
  (props: WithTranslation): JSX.Element => {
    // eslint-disable-next-line no-unused-vars
    const { t } = props;
    const history = useHistory();
    const classes = useStyles();
    // eslint-disable-next-line no-unused-vars
    const { guid } = useParams<RouteWithGuidProps>();

    return (
      <Grid
        container
        spacing={0}
        className={classes.main}
      >
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.item}
        >
          <Grid
            item
            container
            justify="center"
          >
            <Typography
              variant="h2"
              align="center"
            >
              Bem-vindo ao MeuPerfil4D!
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.item}
        >
          <Grid
            item
            container
            justify="center"
          >
            <Typography
              variant="subtitle1"
              align="center"
            >
              Você acaba de receber uma chave para utilizar nossos serviços.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.item}
        >
          <Grid
            item
            container
            justify="center"
          >
            <Button
              title="Ver minhas chaves"
              variant="outlined"
              color="primary"
              onClick={(): void => { history.push('/'); }}
            >
              Ver minhas chaves
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  },
);

ConfirmKey.displayName = 'ConfirmKey';

export default ConfirmKey;
