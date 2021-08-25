import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyHome from '../Views/Home/Home';
import Connected from '../Views/Connected/Connected';
import MyAbout from '../Views/About/About';
import MyNotFound from '../Views/404/404';
import Forbidden from '../Components/403/Main/Main';
import MyPolicy from '../Views/Policy/Policy';
import Remember from '../Components/Remember/Remember';

export default (): React.ReactElement => (
  <Switch>
    <Route path="/" exact component={MyHome} />
    <Route path="/account/" component={MyHome} />
    <Route path="/connected/" component={Connected} />
    <Route path="/remember/:guid/:id" component={Remember} />
    <Route path="/about" component={MyAbout} />
    <Route path="/policy" component={MyPolicy} />
    <Route path="/404" component={MyNotFound} />
    <Route path="/403" component={Forbidden} />
    <Route component={MyNotFound} />
  </Switch>
);
