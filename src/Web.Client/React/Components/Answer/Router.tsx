import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  RouteComponentProps, Route, withRouter, Switch,
} from 'react-router-dom';
import Intro from './Intro/Intro';
import NotFound from '../404/Main/Main';
import Answer from './Answer';
import Report from '../Report/ReportDynamic';
import ReportPDF from '../Report/ReportPDF/ReportPDFDynamic';

export interface IAnswerRouterProps {
  guid: string;
}

const Router = (): React.ReactElement<RouteComponentProps> => (
  <Switch>
    <Route path="/answer/intro/:guid" exact component={Intro} />
    <Route path="/answer/assessment/:guid" exact component={Answer} />
    <Route path="/answer/report/:guid" exact component={Report} />
    <Route path="/answer/reportPDF/:guid" exact component={ReportPDF} />
    <Route component={NotFound} />
  </Switch>
);

const AnswerRouter = withRouter(Router);

AnswerRouter.displayName = 'AnswerRouter';

export default AnswerRouter;
