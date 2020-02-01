import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  RouteComponentProps,
  Route,
  withRouter,
} from 'react-router-dom';
import MyTemplate from '../../Home/Template/Template';
import Page from '../FirstPage/Page';
import Competent from '../CompetentMind/Page';
import DominantWhoIAm from '../DominantWhoIAm/Page';
import DominantName from '../DominantName/Page';

export default withRouter(
  (props: RouteComponentProps): React.ReactElement<RouteComponentProps> => {
    const { match } = props;

    return (
      <MyTemplate>
        <Route path={`${match.url}/firstpage`} component={Page} />
        <Route path={`${match.url}/competentmind`} component={Competent} />
        <Route path={`${match.url}/dominantwhoiam`} component={DominantWhoIAm} />
        <Route path={`${match.url}/dominantname`} component={DominantName} />
      </MyTemplate>
    );
  },
);
