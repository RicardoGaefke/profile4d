import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyHome from '../Views/Home/Home';
import MyAbout from '../Views/About/About';
import MyNotFound from '../Views/404/404';
import MyPolicy from '../Views/Policy/Policy';
import FixedContentRouter from '../Components/FixedContent/Router/FixedContentRouter';
import ImageFormRouter from '../Components/Images/Router/ImagesRouter';
import DinamicRouter from '../Components/DynamicContent/Router/DynamicRouter';

export default (): React.ReactElement => (
  <Switch>
    <Route path="/" exact component={MyHome} />
    <Route path="/home/" component={MyHome} />
    <Route path="/fixedcontent/" component={FixedContentRouter} />
    <Route path="/imageform/" component={ImageFormRouter} />
    <Route path="/dinamicContent/" component={DinamicRouter} />
    <Route path="/about" component={MyAbout} />
    <Route path="/policy" component={MyPolicy} />
    <Route path="/404" component={MyNotFound} />
    <Route component={MyNotFound} />
  </Switch>
);
