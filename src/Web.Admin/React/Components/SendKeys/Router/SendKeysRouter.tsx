import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  RouteComponentProps,
  Route,
  withRouter,
} from 'react-router-dom';
import MyTemplate from '../../Home/Template/Template';
import SendKey from '../SendKey/SendKey';
import TransferKeys from '../TransferKeys/TransferKeys';

export default withRouter(
  (props: RouteComponentProps): React.ReactElement<RouteComponentProps> => {
    const { match } = props;

    return (
      <MyTemplate>
        <Route path={`${match.url}/sendKey`} component={SendKey} />
        <Route path={`${match.url}/transferKeys`} component={TransferKeys} />
      </MyTemplate>
    );
  },
);
