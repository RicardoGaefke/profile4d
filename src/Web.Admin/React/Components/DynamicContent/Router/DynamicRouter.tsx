import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  RouteComponentProps,
  Route,
  withRouter,
} from 'react-router-dom';
import MyTemplate from '../../Home/Template/Template';
import Questions from '../Questions/Questions';
import QuestionAdd from '../Questions/Add/Add';
import PageEdit from '../Questions/Edit/Page';
import ProfileName from '../ProfileName/Questions';
import ProfileNameAdd from '../ProfileName/Add/Add';
import ProfileNameEdit from '../ProfileName/Edit/Page';
import FeaturesDominant from '../FeaturesDominant/Questions';
import FeaturesDominantAdd from '../FeaturesDominant/Add/Add';
import FeaturesDominantEdit from '../FeaturesDominant/Edit/Page';
import PersonalityForces from '../PersonalityForces/Questions';
import PersonalityForcesAdd from '../PersonalityForces/Add/Add';
import PersonalityForcesEdit from '../PersonalityForces/Edit/Page';
import Motivations from '../Motivations/Questions';
import MotivationsAdd from '../Motivations/Add/Add';
import MotivationsEdit from '../Motivations/Edit/Page';

export default withRouter(
  (props: RouteComponentProps): React.ReactElement<RouteComponentProps> => {
    const { match } = props;

    return (
      <MyTemplate>
        <Route path={`${match.url}/questions`} exact component={Questions} />
        <Route path={`${match.url}/questions/add`} component={QuestionAdd} />
        <Route path={`${match.url}/questions/edit/:id`} component={PageEdit} />
        <Route path={`${match.url}/profileName`} exact component={ProfileName} />
        <Route path={`${match.url}/profileName/add`} component={ProfileNameAdd} />
        <Route path={`${match.url}/profileName/edit/:id`} component={ProfileNameEdit} />
        <Route path={`${match.url}/featuresDominant`} exact component={FeaturesDominant} />
        <Route path={`${match.url}/featuresDominant/add`} component={FeaturesDominantAdd} />
        <Route path={`${match.url}/featuresDominant/edit/:id`} component={FeaturesDominantEdit} />
        <Route path={`${match.url}/personalityForces`} exact component={PersonalityForces} />
        <Route path={`${match.url}/personalityForces/add`} component={PersonalityForcesAdd} />
        <Route path={`${match.url}/personalityForces/edit/:id`} component={PersonalityForcesEdit} />
        <Route path={`${match.url}/yourMotivations`} exact component={Motivations} />
        <Route path={`${match.url}/yourMotivations/add`} component={MotivationsAdd} />
        <Route path={`${match.url}/yourMotivations/edit/:id`} component={MotivationsEdit} />
      </MyTemplate>
    );
  },
);
