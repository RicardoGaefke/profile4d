import { Container, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import { useParams, useHistory } from 'react-router-dom';
import Loading from '../Connected/Loading/Loading';
import useStyles from '../ForgotForm/Form/Form.Styles';
import Axios from '../../Utils/MyAxios';
// eslint-disable-next-line no-unused-vars
import { RouteWithIdAndGuidProps } from '../../../../TypeScript/Interfaces/IRouteWithProps';
// eslint-disable-next-line no-unused-vars
import { IBasicReturn } from '../../../../TypeScript/Interfaces/IBasicReturn';

const Remember = withTranslation()(
  (props: WithTranslation): JSX.Element => {
    // eslint-disable-next-line no-unused-vars
    const { t } = props;
    const classes = useStyles({});
    const { guid, id } = useParams<RouteWithIdAndGuidProps>();
    const history = useHistory();

    const activatePassword = async (): Promise<void> => {
      await Axios(window.location.href).get<IBasicReturn>(`Identity/ForgotActivate/${guid}/${id}`)
        .then((): void => {
          history.push('/');
        });
    };

    useEffect((): void => {
      activatePassword();
    }, []);

    return (
      <Container maxWidth="md" className={classes.container}>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            md={6}
            xs={12}
          >
            <Loading />
          </Grid>
        </Grid>
      </Container>
    );
  },
);

Remember.displayName = 'Remember';

export default Remember;
