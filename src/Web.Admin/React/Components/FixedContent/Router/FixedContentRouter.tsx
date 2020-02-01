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
import DominantStructure from '../DominantStructure/Page';
import SabotageMode from '../SabotageMode/Page';
import SabotageWhoIAm from '../SabotageWhoIAm/Page';
import SabotageDominant from '../SabotageDominant/Page';
import SabotageName from '../SabotageName/Page';

export default withRouter(
  (props: RouteComponentProps): React.ReactElement<RouteComponentProps> => {
    const { match } = props;

    return (
      <MyTemplate>
        <Route path={`${match.url}/firstpage`} component={Page} />
        <Route path={`${match.url}/competentmind`} component={Competent} />
        <Route path={`${match.url}/dominantwhoiam`} component={DominantWhoIAm} />
        <Route path={`${match.url}/dominantname`} component={DominantName} />
        <Route path={`${match.url}/dominantstructure`} component={DominantStructure} />
        <Route path={`${match.url}/sabotagemode`} component={SabotageMode} />
        <Route path={`${match.url}/sabotagewhoiam`} component={SabotageWhoIAm} />
        <Route path={`${match.url}/sabotagedominant`} component={SabotageDominant} />
        <Route path={`${match.url}/sabotagename`} component={SabotageName} />
      </MyTemplate>
    );
  },
);
