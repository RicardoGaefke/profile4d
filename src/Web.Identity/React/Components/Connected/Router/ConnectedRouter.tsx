import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  RouteComponentProps,
  Route,
  withRouter,
} from 'react-router-dom';
import Advice from '../Advice/Advice';
import ChangeName from '../../Forms/ChangeName/ChangeName';
import ChangeEmail from '../../Forms/ChangeEmail/ChangeEmail';
import ChangePassword from '../../Forms/ChangePassword/ChangePassword';
import ProtectedRoute from '../../ProtectedRoute/ProtectedRoute';

export default withRouter(
  (props: RouteComponentProps): React.ReactElement<RouteComponentProps> => {
    const { match } = props;

    return (
      <>
        <Route path={`${match.url}/`} exact component={Advice} />
        <ProtectedRoute path={`${match.url}/changeName`} exact component={ChangeName} />
        <ProtectedRoute path={`${match.url}/changeEmail`} exact component={ChangeEmail} />
        <ProtectedRoute path={`${match.url}/changePassword`} exact component={ChangePassword} />
      </>
    );
  },
);
