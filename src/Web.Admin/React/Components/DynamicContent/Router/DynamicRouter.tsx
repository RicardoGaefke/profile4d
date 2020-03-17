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
import FocusAttention from '../FocusAttention/Questions';
import FocusAttentionAdd from '../FocusAttention/Add/Add';
import FocusAttentionEdit from '../FocusAttention/Edit/Page';
import LeaderDifferent from '../LeaderDifferent/Questions';
import LeaderDifferentAdd from '../LeaderDifferent/Add/Add';
import LeaderDifferentEdit from '../LeaderDifferent/Edit/Page';
import ValuesDom from '../ValuesDom/Questions';
import ValuesDomAdd from '../ValuesDom/Add/Add';
import ValuesDomEdit from '../ValuesDom/Edit/Page';
import EmotionalCompetent from '../EmotionalCompetent/Questions';
import EmotionalCompetentAdd from '../EmotionalCompetent/Add/Add';
import EmotionalCompetentEdit from '../EmotionalCompetent/Edit/Page';
import ComunicateMode from '../ComunicateMode/Questions';
import ComunicateModeAdd from '../ComunicateMode/Add/Add';
import ComunicateModeEdit from '../ComunicateMode/Edit/Page';
import InteractMode from '../InteractMode/Questions';
import InteractModeAdd from '../InteractMode/Add/Add';
import InteractModeEdit from '../InteractMode/Edit/Page';
import ProfileNames from '../ProfileNames/Questions';
import ProfileNamesAdd from '../ProfileNames/Add/Add';
import ProfileNamesEdit from '../ProfileNames/Edit/Page';
import SaboteurSynteshis from '../SaboteurSynteshis/Questions';
import SaboteurSynteshisAdd from '../SaboteurSynteshis/Add/Add';
import SaboteurSynteshisEdit from '../SaboteurSynteshis/Edit/Page';

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
        <Route path={`${match.url}/focusAttention`} exact component={FocusAttention} />
        <Route path={`${match.url}/focusAttention/add`} component={FocusAttentionAdd} />
        <Route path={`${match.url}/focusAttention/edit/:id`} component={FocusAttentionEdit} />
        <Route path={`${match.url}/leaderDifferent`} exact component={LeaderDifferent} />
        <Route path={`${match.url}/leaderDifferent/add`} component={LeaderDifferentAdd} />
        <Route path={`${match.url}/leaderDifferent/edit/:id`} component={LeaderDifferentEdit} />
        <Route path={`${match.url}/valuesDom`} exact component={ValuesDom} />
        <Route path={`${match.url}/valuesDom/add`} component={ValuesDomAdd} />
        <Route path={`${match.url}/valuesDom/edit/:id`} component={ValuesDomEdit} />
        <Route path={`${match.url}/emotionalCompetent`} exact component={EmotionalCompetent} />
        <Route path={`${match.url}/emotionalCompetent/add`} component={EmotionalCompetentAdd} />
        <Route path={`${match.url}/emotionalCompetent/edit/:id`} component={EmotionalCompetentEdit} />
        <Route path={`${match.url}/comunicateMode`} exact component={ComunicateMode} />
        <Route path={`${match.url}/comunicateMode/add`} component={ComunicateModeAdd} />
        <Route path={`${match.url}/comunicateMode/edit/:id`} component={ComunicateModeEdit} />
        <Route path={`${match.url}/interactMode`} exact component={InteractMode} />
        <Route path={`${match.url}/interactMode/add`} component={InteractModeAdd} />
        <Route path={`${match.url}/interactMode/edit/:id`} component={InteractModeEdit} />
        <Route path={`${match.url}/profileNames`} exact component={ProfileNames} />
        <Route path={`${match.url}/profileNames/add`} component={ProfileNamesAdd} />
        <Route path={`${match.url}/profileNames/edit/:id`} component={ProfileNamesEdit} />
        <Route path={`${match.url}/saboteurSynteshis`} exact component={SaboteurSynteshis} />
        <Route path={`${match.url}/saboteurSynteshis/add`} component={SaboteurSynteshisAdd} />
        <Route path={`${match.url}/saboteurSynteshis/edit/:id`} component={SaboteurSynteshisEdit} />
      </MyTemplate>
    );
  },
);
