import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyHome from '../Components/Home/Home';
import MyAbout from '../Views/About/About';
import MyNotFound from '../Views/404/404';
import MyPolicy from '../Views/Policy/Policy';
import AnswerRouter from '../Components/Answer/Router';
import ConfirmKey from '../Components/ConfirmKey/ConfirmKey';

const Router = (): JSX.Element => (
  <Switch>
    <Route exact path="/" component={MyHome} />
    <Route path="/home" component={MyHome} />
    <Route path="/about" component={MyAbout} />
    <Route path="/policy" component={MyPolicy} />
    <Route path="/404" component={MyNotFound} />
    <Route path="/answer/" component={AnswerRouter} />
    <Route path="/confirmKey/:guid" component={ConfirmKey} />
    <Route component={MyNotFound} />
  </Switch>
);

export default Router;
