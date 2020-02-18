import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  RouteComponentProps,
  Route,
  withRouter,
} from 'react-router-dom';
import Advice from '../Advice/Advice';
import CreateForm from '../../CreateUserForm/CreateForm';
import ForgotForm from '../../ForgotForm/ForgotForm';

export default withRouter(
  (props: RouteComponentProps): React.ReactElement<RouteComponentProps> => {
    const { match } = props;

    return (
      <>
        <Route path={`${match.url}/`} exact component={Advice} />
        <Route path={`${match.url}/create`} component={CreateForm} />
        <Route path={`${match.url}/forgot`} component={ForgotForm} />
      </>
    );
  },
);
