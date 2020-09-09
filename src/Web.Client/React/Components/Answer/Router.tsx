import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  RouteComponentProps, Route, withRouter, Switch,
} from 'react-router-dom';
import Intro from './Intro/Intro';
import NotFound from '../404/Main/Main';

const Router = (): React.ReactElement<RouteComponentProps> => (
  <Switch>
    <Route path="/answer/intro/:guid" exact component={Intro} />
    <Route component={NotFound} />
  </Switch>
);

const AnswerRouter = withRouter(Router);

AnswerRouter.displayName = 'AnswerRouter';

export default AnswerRouter;
