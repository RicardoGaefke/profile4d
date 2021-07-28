import React from 'react';
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  RouteComponentProps, withRouter,
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
        <ProtectedRoute path={`${match.url}`} exact component={Advice} />
        <ProtectedRoute path={`${match.url}/changeName`} component={ChangeName} />
        <ProtectedRoute path={`${match.url}/changeEmail`} component={ChangeEmail} />
        <ProtectedRoute path={`${match.url}/changePassword`} component={ChangePassword} />
      </>
    );
  },
);
