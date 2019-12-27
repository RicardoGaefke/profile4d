import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  RouteComponentProps,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import LoginForm from '../../LoginForm/LoginForm';

export default withRouter(
  (props: RouteComponentProps): React.ReactElement => {
    const { match } = props;

    return (
      <Switch>
        <Route exact path={`${match.url}/`} component={LoginForm} />
      </Switch>
    );
  },
);
