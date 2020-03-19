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
import LimitedMatrix from '../LimitedMatrix/Questions';
import LimitedMatrixAdd from '../LimitedMatrix/Add/Add';
import LimitedMatrixEdit from '../LimitedMatrix/Edit/Page';
import DifficultComunicate from '../DifficultComunicate/Questions';
import DifficultComunicateAdd from '../DifficultComunicate/Add/Add';
import DifficultComunicateEdit from '../DifficultComunicate/Edit/Page';
import RelationshipDifficult from '../RelationshipDifficult/Questions';
import RelationshipDifficultAdd from '../RelationshipDifficult/Add/Add';
import RelationshipDifficultEdit from '../RelationshipDifficult/Edit/Page';
import FourLimited from '../FourLimited/Questions';
import FourLimitedAdd from '../FourLimited/Add/Add';
import FourLimitedEdit from '../FourLimited/Edit/Page';
import LimitedAttitude from '../LimitedAttitude/Questions';
import LimitedAttitudeAdd from '../LimitedAttitude/Add/Add';
import LimitedAttitudeEdit from '../LimitedAttitude/Edit/Page';
import BehavioralAddiction from '../BehavioralAddiction/Questions';
import BehavioralAddictionAdd from '../BehavioralAddiction/Add/Add';
import BehavioralAddictionEdit from '../BehavioralAddiction/Edit/Page';
import EmotionalAddiction from '../EmotionalAddiction/Questions';
import EmotionalAddictionAdd from '../EmotionalAddiction/Add/Add';
import EmotionalAddictionEdit from '../EmotionalAddiction/Edit/Page';
import MentalAddiction from '../MentalAddiction/Questions';
import MentalAddictionAdd from '../MentalAddiction/Add/Add';
import MentalAddictionEdit from '../MentalAddiction/Edit/Page';
import NeuroticCompulsion from '../NeuroticCompulsion/Questions';
import NeuroticCompulsionAdd from '../NeuroticCompulsion/Add/Add';
import NeuroticCompulsionEdit from '../NeuroticCompulsion/Edit/Page';
import DefenseMecanism from '../DefenseMecanism/Questions';
import DefenseMecanismAdd from '../DefenseMecanism/Add/Add';
import DefenseMecanismEdit from '../DefenseMecanism/Edit/Page';
import CompetentMode from '../CompetentMode/Questions';
import CompetentModeAdd from '../CompetentMode/Add/Add';
import CompetentModeEdit from '../CompetentMode/Edit/Page';
import SaboteurMode from '../SaboteurMode/Questions';
import SaboteurModeAdd from '../SaboteurMode/Add/Add';
import SaboteurModeEdit from '../SaboteurMode/Edit/Page';
import NameProfile from '../NameProfile/Questions';
import NameProfileAdd from '../NameProfile/Add/Add';
import NameProfileEdit from '../NameProfile/Edit/Page';
import LimitedForcesOne from '../LimitedForcesOne/Questions';
import LimitedForcesOneAdd from '../LimitedForcesOne/Add/Add';
import LimitedForcesOneEdit from '../LimitedForcesOne/Edit/Page';
import ProfileNameOne from '../ProfileNameOne/Questions';
import ProfileNameOneAdd from '../ProfileNameOne/Add/Add';
import ProfileNameOneEdit from '../ProfileNameOne/Edit/Page';
import LimitedForcesTwo from '../LimitedForcesTwo/Questions';
import LimitedForcesTwoAdd from '../LimitedForcesTwo/Add/Add';
import LimitedForcesTwoEdit from '../LimitedForcesTwo/Edit/Page';
import SaboteurNameOne from '../SaboteurNameOne/Questions';
import SaboteurNameOneAdd from '../SaboteurNameOne/Add/Add';
import SaboteurNameOneEdit from '../SaboteurNameOne/Edit/Page';
import LimitedForcesThree from '../LimitedForcesThree/Questions';
import LimitedForcesThreeAdd from '../LimitedForcesThree/Add/Add';
import LimitedForcesThreeEdit from '../LimitedForcesThree/Edit/Page';
import SaboteurNameTwo from '../SaboteurNameTwo/Questions';
import SaboteurNameTwoAdd from '../SaboteurNameTwo/Add/Add';
import SaboteurNameTwoEdit from '../SaboteurNameTwo/Edit/Page';
import LimitedForcesFour from '../LimitedForcesFour/Questions';
import LimitedForcesFourAdd from '../LimitedForcesFour/Add/Add';
import LimitedForcesFourEdit from '../LimitedForcesFour/Edit/Page';
import ConflictsIdentified from '../ConflictsIdentified/Questions';
import ConflictsIdentifiedAdd from '../ConflictsIdentified/Add/Add';
import ConflictsIdentifiedEdit from '../ConflictsIdentified/Edit/Page';
import TriadHeHo from '../TriadHeHo/Questions';
import TriadHeHoAdd from '../TriadHeHo/Add/Add';
import TriadHeHoEdit from '../TriadHeHo/Edit/Page';
import SpecificsTriad from '../SpecificsTriad/Questions';
import SpecificsTriadAdd from '../SpecificsTriad/Add/Add';
import SpecificsTriadEdit from '../SpecificsTriad/Edit/Page';
import FluxAnalyze from '../FluxAnalyze/Questions';
import FluxAnalyzeAdd from '../FluxAnalyze/Add/Add';
import FluxAnalyzeEdit from '../FluxAnalyze/Edit/Page';
import DomProfile from '../DomProfile/Questions';
import DomProfileAdd from '../DomProfile/Add/Add';
import DomProfileEdit from '../DomProfile/Edit/Page';
import InternalPartners from '../InternalPartners/Questions';
import InternalPartnersAdd from '../InternalPartners/Add/Add';
import InternalPartnersEdit from '../InternalPartners/Edit/Page';
import InternalPartOne from '../InternalPartOne/Questions';
import InternalPartOneAdd from '../InternalPartOne/Add/Add';
import InternalPartOneEdit from '../InternalPartOne/Edit/Page';
import InternalPartTwo from '../InternalPartTwo/Questions';
import InternalPartTwoAdd from '../InternalPartTwo/Add/Add';
import InternalPartTwoEdit from '../InternalPartTwo/Edit/Page';
import ArchetypeDiscover from '../ArchetypeDiscover/Questions';
import ArchetypeDiscoverAdd from '../ArchetypeDiscover/Add/Add';
import ArchetypeDiscoverEdit from '../ArchetypeDiscover/Edit/Page';
import EssentialCharacter from '../EssentialCharacter/Questions';
import EssentialCharacterAdd from '../EssentialCharacter/Add/Add';
import EssentialCharacterEdit from '../EssentialCharacter/Edit/Page';
import DomProfileOne from '../DomProfileOne/Questions';
import DomProfileOneAdd from '../DomProfileOne/Add/Add';
import DomProfileOneEdit from '../DomProfileOne/Edit/Page';
import BigChallenge from '../BigChallenge/Questions';
import BigChallengeAdd from '../BigChallenge/Add/Add';
import BigChallengeEdit from '../BigChallenge/Edit/Page';
import KeyWork from '../KeyWork/Questions';
import KeyWorkAdd from '../KeyWork/Add/Add';
import KeyWorkEdit from '../KeyWork/Edit/Page';
import IdealPart from '../IdealPart/Questions';
import IdealPartAdd from '../IdealPart/Add/Add';
import IdealPartEdit from '../IdealPart/Edit/Page';
import YourMoment from '../YourMoment/Questions';
import YourMomentAdd from '../YourMoment/Add/Add';
import YourMomentEdit from '../YourMoment/Edit/Page';
import ExistentialPain from '../ExistentialPain/Questions';
import ExistentialPainAdd from '../ExistentialPain/Add/Add';
import ExistentialPainEdit from '../ExistentialPain/Edit/Page';
import CristallyzationProcess from '../CristallyzationProcess/Questions';
import CristallyzationProcessAdd from '../CristallyzationProcess/Add/Add';
import CristallyzationProcessEdit from '../CristallyzationProcess/Edit/Page';
import BodyShape from '../BodyShape/Questions';
import BodyShapeAdd from '../BodyShape/Add/Add';
import BodyShapeEdit from '../BodyShape/Edit/Page';
import YourDevelopment from '../YourDevelopment/Questions';
import YourDevelopmentAdd from '../YourDevelopment/Add/Add';
import YourDevelopmentEdit from '../YourDevelopment/Edit/Page';
import BenefitsContact from '../BenefitsContact/Questions';
import BenefitsContactAdd from '../BenefitsContact/Add/Add';
import BenefitsContactEdit from '../BenefitsContact/Edit/Page';
import TwelveForces from '../TwelveForces/Questions';
import TwelveForcesAdd from '../TwelveForces/Add/Add';
import TwelveForcesEdit from '../TwelveForces/Edit/Page';
import DyObservationOne from '../DyObservationOne/Questions';
import DyObservationOneAdd from '../DyObservationOne/Add/Add';
import DyObservationOneEdit from '../DyObservationOne/Edit/Page';
import DyObservationTwo from '../DyObservationTwo/Questions';
import DyObservationTwoAdd from '../DyObservationTwo/Add/Add';
import DyObservationTwoEdit from '../DyObservationTwo/Edit/Page';
import DyObservationThree from '../DyObservationThree/Questions';
import DyObservationThreeAdd from '../DyObservationThree/Add/Add';
import DyObservationThreeEdit from '../DyObservationThree/Edit/Page';
import DyObservationFour from '../DyObservationFour/Questions';
import DyObservationFourAdd from '../DyObservationFour/Add/Add';
import DyObservationFourEdit from '../DyObservationFour/Edit/Page';
import DyObservationFive from '../DyObservationFive/Questions';
import DyObservationFiveAdd from '../DyObservationFive/Add/Add';
import DyObservationFiveEdit from '../DyObservationFive/Edit/Page';
import DyObservationSix from '../DyObservationSix/Questions';
import DyObservationSixAdd from '../DyObservationSix/Add/Add';
import DyObservationSixEdit from '../DyObservationSix/Edit/Page';
import DyObservationSeven from '../DyObservationSeven/Questions';
import DyObservationSevenAdd from '../DyObservationSeven/Add/Add';
import DyObservationSevenEdit from '../DyObservationSeven/Edit/Page';
import DyObservationEight from '../DyObservationEight/Questions';
import DyObservationEightAdd from '../DyObservationEight/Add/Add';
import DyObservationEightEdit from '../DyObservationEight/Edit/Page';
import DyObservationNine from '../DyObservationNine/Questions';
import DyObservationNineAdd from '../DyObservationNine/Add/Add';
import DyObservationNineEdit from '../DyObservationNine/Edit/Page';
import DyObservationTen from '../DyObservationTen/Questions';
import DyObservationTenAdd from '../DyObservationTen/Add/Add';
import DyObservationTenEdit from '../DyObservationTen/Edit/Page';
import DyObservationEleven from '../DyObservationEleven/Questions';
import DyObservationElevenAdd from '../DyObservationEleven/Add/Add';
import DyObservationElevenEdit from '../DyObservationEleven/Edit/Page';
import DyObservationTwelve from '../DyObservationTwelve/Questions';
import DyObservationTwelveAdd from '../DyObservationTwelve/Add/Add';
import DyObservationTwelveEdit from '../DyObservationTwelve/Edit/Page';
import DyObservationThirteen from '../DyObservationThirteen/Questions';
import DyObservationThirteenAdd from '../DyObservationThirteen/Add/Add';
import DyObservationThirteenEdit from '../DyObservationThirteen/Edit/Page';
import DyObservationFourteen from '../DyObservationFourteen/Questions';
import DyObservationFourteenAdd from '../DyObservationFourteen/Add/Add';
import DyObservationFourteenEdit from '../DyObservationFourteen/Edit/Page';

// import DyObservationFifteen from '../DyObservationFifteen/Questions';
// import DyObservationFifteenAdd from '../DyObservationFifteen/Add/Add';
// import DyObservationFifteenEdit from '../DyObservationFifteen/Edit/Page';

// import DyObservationSixteen from '../DyObservationSixteen/Questions';
// import DyObservationSixteenAdd from '../DyObservationSixteen/Add/Add';
// import DyObservationSixteenEdit from '../DyObservationSixteen/Edit/Page';

// import DyObservationSeventeen from '../DyObservationSeventeen/Questions';
// import DyObservationSeventeenAdd from '../DyObservationSeventeen/Add/Add';
// import DyObservationSeventeenEdit from '../DyObservationSeventeen/Edit/Page';

// import DyObservationEighteen from '../DyObservationEighteen/Questions';
// import DyObservationEighteenAdd from '../DyObservationEighteen/Add/Add';
// import DyObservationEighteenEdit from '../DyObservationEighteen/Edit/Page';

// import DyObservationNineteen from '../DyObservationNineteen/Questions';
// import DyObservationNineteenAdd from '../DyObservationNineteen/Add/Add';
// import DyObservationNineteenEdit from '../DyObservationNineteen/Edit/Page';

// import DyObservationTwenty from '../DyObservationTwenty/Questions';
// import DyObservationTwentyAdd from '../DyObservationTwenty/Add/Add';
// import DyObservationTwentyEdit from '../DyObservationTwenty/Edit/Page';

// import DyObservationTwentyOne from '../DyObservationTwentyOne/Questions';
// import DyObservationTwentyOneAdd from '../DyObservationTwentyOne/Add/Add';
// import DyObservationTwentyOneEdit from '../DyObservationTwentyOne/Edit/Page';

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
        <Route path={`${match.url}/limitedMatrix`} exact component={LimitedMatrix} />
        <Route path={`${match.url}/limitedMatrix/add`} component={LimitedMatrixAdd} />
        <Route path={`${match.url}/limitedMatrix/edit/:id`} component={LimitedMatrixEdit} />
        <Route path={`${match.url}/difficultComunicate`} exact component={DifficultComunicate} />
        <Route path={`${match.url}/difficultComunicate/add`} component={DifficultComunicateAdd} />
        <Route path={`${match.url}/difficultComunicate/edit/:id`} component={DifficultComunicateEdit} />
        <Route path={`${match.url}/relationshipDifficult`} exact component={RelationshipDifficult} />
        <Route path={`${match.url}/relationshipDifficult/add`} component={RelationshipDifficultAdd} />
        <Route path={`${match.url}/relationshipDifficult/edit/:id`} component={RelationshipDifficultEdit} />
        <Route path={`${match.url}/fourLimited`} exact component={FourLimited} />
        <Route path={`${match.url}/fourLimited/add`} component={FourLimitedAdd} />
        <Route path={`${match.url}/fourLimited/edit/:id`} component={FourLimitedEdit} />
        <Route path={`${match.url}/limitedAttitude`} exact component={LimitedAttitude} />
        <Route path={`${match.url}/limitedAttitude/add`} component={LimitedAttitudeAdd} />
        <Route path={`${match.url}/limitedAttitude/edit/:id`} component={LimitedAttitudeEdit} />
        <Route path={`${match.url}/behavioralAddiction`} exact component={BehavioralAddiction} />
        <Route path={`${match.url}/behavioralAddiction/add`} component={BehavioralAddictionAdd} />
        <Route path={`${match.url}/behavioralAddiction/edit/:id`} component={BehavioralAddictionEdit} />
        <Route path={`${match.url}/emotionalAddiction`} exact component={EmotionalAddiction} />
        <Route path={`${match.url}/emotionalAddiction/add`} component={EmotionalAddictionAdd} />
        <Route path={`${match.url}/emotionalAddiction/edit/:id`} component={EmotionalAddictionEdit} />
        <Route path={`${match.url}/mentalAddiction`} exact component={MentalAddiction} />
        <Route path={`${match.url}/mentalAddiction/add`} component={MentalAddictionAdd} />
        <Route path={`${match.url}/mentalAddiction/edit/:id`} component={MentalAddictionEdit} />
        <Route path={`${match.url}/neuroticCompulsion`} exact component={NeuroticCompulsion} />
        <Route path={`${match.url}/neuroticCompulsion/add`} component={NeuroticCompulsionAdd} />
        <Route path={`${match.url}/neuroticCompulsion/edit/:id`} component={NeuroticCompulsionEdit} />
        <Route path={`${match.url}/defenseMecanism`} exact component={DefenseMecanism} />
        <Route path={`${match.url}/defenseMecanism/add`} component={DefenseMecanismAdd} />
        <Route path={`${match.url}/defenseMecanism/edit/:id`} component={DefenseMecanismEdit} />
        <Route path={`${match.url}/competentMode`} exact component={CompetentMode} />
        <Route path={`${match.url}/competentMode/add`} component={CompetentModeAdd} />
        <Route path={`${match.url}/competentMode/edit/:id`} component={CompetentModeEdit} />
        <Route path={`${match.url}/saboteurMode`} exact component={SaboteurMode} />
        <Route path={`${match.url}/saboteurMode/add`} component={SaboteurModeAdd} />
        <Route path={`${match.url}/saboteurMode/edit/:id`} component={SaboteurModeEdit} />
        <Route path={`${match.url}/nameProfile`} exact component={NameProfile} />
        <Route path={`${match.url}/nameProfile/add`} component={NameProfileAdd} />
        <Route path={`${match.url}/nameProfile/edit/:id`} component={NameProfileEdit} />
        <Route path={`${match.url}/limitedForcesOne`} exact component={LimitedForcesOne} />
        <Route path={`${match.url}/limitedForcesOne/add`} component={LimitedForcesOneAdd} />
        <Route path={`${match.url}/limitedForcesOne/edit/:id`} component={LimitedForcesOneEdit} />
        <Route path={`${match.url}/profileNameOne`} exact component={ProfileNameOne} />
        <Route path={`${match.url}/profileNameOne/add`} component={ProfileNameOneAdd} />
        <Route path={`${match.url}/profileNameOne/edit/:id`} component={ProfileNameOneEdit} />
        <Route path={`${match.url}/limitedForcesTwo`} exact component={LimitedForcesTwo} />
        <Route path={`${match.url}/limitedForcesTwo/add`} component={LimitedForcesTwoAdd} />
        <Route path={`${match.url}/limitedForcesTwo/edit/:id`} component={LimitedForcesTwoEdit} />
        <Route path={`${match.url}/saboteurNameOne`} exact component={SaboteurNameOne} />
        <Route path={`${match.url}/saboteurNameOne/add`} component={SaboteurNameOneAdd} />
        <Route path={`${match.url}/saboteurNameOne/edit/:id`} component={SaboteurNameOneEdit} />
        <Route path={`${match.url}/limitedForcesThree`} exact component={LimitedForcesThree} />
        <Route path={`${match.url}/limitedForcesThree/add`} component={LimitedForcesThreeAdd} />
        <Route path={`${match.url}/limitedForcesThree/edit/:id`} component={LimitedForcesThreeEdit} />
        <Route path={`${match.url}/saboteurNameTwo`} exact component={SaboteurNameTwo} />
        <Route path={`${match.url}/saboteurNameTwo/add`} component={SaboteurNameTwoAdd} />
        <Route path={`${match.url}/saboteurNameTwo/edit/:id`} component={SaboteurNameTwoEdit} />
        <Route path={`${match.url}/limitedForcesFour`} exact component={LimitedForcesFour} />
        <Route path={`${match.url}/limitedForcesFour/add`} component={LimitedForcesFourAdd} />
        <Route path={`${match.url}/limitedForcesFour/edit/:id`} component={LimitedForcesFourEdit} />
        <Route path={`${match.url}/conflictsIdentified`} exact component={ConflictsIdentified} />
        <Route path={`${match.url}/conflictsIdentified/add`} component={ConflictsIdentifiedAdd} />
        <Route path={`${match.url}/conflictsIdentified/edit/:id`} component={ConflictsIdentifiedEdit} />
        <Route path={`${match.url}/triadHeHo`} exact component={TriadHeHo} />
        <Route path={`${match.url}/triadHeHo/add`} component={TriadHeHoAdd} />
        <Route path={`${match.url}/triadHeHo/edit/:id`} component={TriadHeHoEdit} />
        <Route path={`${match.url}/specificsTriad`} exact component={SpecificsTriad} />
        <Route path={`${match.url}/specificsTriad/add`} component={SpecificsTriadAdd} />
        <Route path={`${match.url}/specificsTriad/edit/:id`} component={SpecificsTriadEdit} />
        <Route path={`${match.url}/fluxAnalyze`} exact component={FluxAnalyze} />
        <Route path={`${match.url}/fluxAnalyze/add`} component={FluxAnalyzeAdd} />
        <Route path={`${match.url}/fluxAnalyze/edit/:id`} component={FluxAnalyzeEdit} />
        <Route path={`${match.url}/domProfile`} exact component={DomProfile} />
        <Route path={`${match.url}/domProfile/add`} component={DomProfileAdd} />
        <Route path={`${match.url}/domProfile/edit/:id`} component={DomProfileEdit} />
        <Route path={`${match.url}/internalPartners`} exact component={InternalPartners} />
        <Route path={`${match.url}/internalPartners/add`} component={InternalPartnersAdd} />
        <Route path={`${match.url}/internalPartners/edit/:id`} component={InternalPartnersEdit} />
        <Route path={`${match.url}/internalPartOne`} exact component={InternalPartOne} />
        <Route path={`${match.url}/internalPartOne/add`} component={InternalPartOneAdd} />
        <Route path={`${match.url}/internalPartOne/edit/:id`} component={InternalPartOneEdit} />
        <Route path={`${match.url}/internalPartTwo`} exact component={InternalPartTwo} />
        <Route path={`${match.url}/internalPartTwo/add`} component={InternalPartTwoAdd} />
        <Route path={`${match.url}/internalPartTwo/edit/:id`} component={InternalPartTwoEdit} />
        <Route path={`${match.url}/archetypeDiscover`} exact component={ArchetypeDiscover} />
        <Route path={`${match.url}/archetypeDiscover/add`} component={ArchetypeDiscoverAdd} />
        <Route path={`${match.url}/archetypeDiscover/edit/:id`} component={ArchetypeDiscoverEdit} />
        <Route path={`${match.url}/essentialCharacter`} exact component={EssentialCharacter} />
        <Route path={`${match.url}/essentialCharacter/add`} component={EssentialCharacterAdd} />
        <Route path={`${match.url}/essentialCharacter/edit/:id`} component={EssentialCharacterEdit} />
        <Route path={`${match.url}/domProfileOne`} exact component={DomProfileOne} />
        <Route path={`${match.url}/domProfileOne/add`} component={DomProfileOneAdd} />
        <Route path={`${match.url}/domProfileOne/edit/:id`} component={DomProfileOneEdit} />
        <Route path={`${match.url}/bigChallenge`} exact component={BigChallenge} />
        <Route path={`${match.url}/bigChallenge/add`} component={BigChallengeAdd} />
        <Route path={`${match.url}/bigChallenge/edit/:id`} component={BigChallengeEdit} />
        <Route path={`${match.url}/keyWork`} exact component={KeyWork} />
        <Route path={`${match.url}/keyWork/add`} component={KeyWorkAdd} />
        <Route path={`${match.url}/keyWork/edit/:id`} component={KeyWorkEdit} />
        <Route path={`${match.url}/idealPart`} exact component={IdealPart} />
        <Route path={`${match.url}/idealPart/add`} component={IdealPartAdd} />
        <Route path={`${match.url}/idealPart/edit/:id`} component={IdealPartEdit} />
        <Route path={`${match.url}/yourMoment`} exact component={YourMoment} />
        <Route path={`${match.url}/yourMoment/add`} component={YourMomentAdd} />
        <Route path={`${match.url}/yourMoment/edit/:id`} component={YourMomentEdit} />
        <Route path={`${match.url}/existentialPain`} exact component={ExistentialPain} />
        <Route path={`${match.url}/existentialPain/add`} component={ExistentialPainAdd} />
        <Route path={`${match.url}/existentialPain/edit/:id`} component={ExistentialPainEdit} />
        <Route path={`${match.url}/cristallyzationProcess`} exact component={CristallyzationProcess} />
        <Route path={`${match.url}/cristallyzationProcess/add`} component={CristallyzationProcessAdd} />
        <Route path={`${match.url}/cristallyzationProcess/edit/:id`} component={CristallyzationProcessEdit} />
        <Route path={`${match.url}/bodyShape`} exact component={BodyShape} />
        <Route path={`${match.url}/bodyShape/add`} component={BodyShapeAdd} />
        <Route path={`${match.url}/bodyShape/edit/:id`} component={BodyShapeEdit} />
        <Route path={`${match.url}/yourDevelopment`} exact component={YourDevelopment} />
        <Route path={`${match.url}/yourDevelopment/add`} component={YourDevelopmentAdd} />
        <Route path={`${match.url}/yourDevelopment/edit/:id`} component={YourDevelopmentEdit} />
        <Route path={`${match.url}/benefitsContact`} exact component={BenefitsContact} />
        <Route path={`${match.url}/benefitsContact/add`} component={BenefitsContactAdd} />
        <Route path={`${match.url}/benefitsContact/edit/:id`} component={BenefitsContactEdit} />
        <Route path={`${match.url}/twelveForces`} exact component={TwelveForces} />
        <Route path={`${match.url}/twelveForces/add`} component={TwelveForcesAdd} />
        <Route path={`${match.url}/twelveForces/edit/:id`} component={TwelveForcesEdit} />
        <Route path={`${match.url}/dyObservationOne`} exact component={DyObservationOne} />
        <Route path={`${match.url}/dyObservationOne/add`} component={DyObservationOneAdd} />
        <Route path={`${match.url}/dyObservationOne/edit/:id`} component={DyObservationOneEdit} />
        <Route path={`${match.url}/dyObservationTwo`} exact component={DyObservationTwo} />
        <Route path={`${match.url}/dyObservationTwo/add`} component={DyObservationTwoAdd} />
        <Route path={`${match.url}/dyObservationTwo/edit/:id`} component={DyObservationTwoEdit} />
        <Route path={`${match.url}/dyObservationThree`} exact component={DyObservationThree} />
        <Route path={`${match.url}/dyObservationThree/add`} component={DyObservationThreeAdd} />
        <Route path={`${match.url}/dyObservationThree/edit/:id`} component={DyObservationThreeEdit} />
        <Route path={`${match.url}/dyObservationFour`} exact component={DyObservationFour} />
        <Route path={`${match.url}/dyObservationFour/add`} component={DyObservationFourAdd} />
        <Route path={`${match.url}/dyObservationFour/edit/:id`} component={DyObservationFourEdit} />
        <Route path={`${match.url}/dyObservationFive`} exact component={DyObservationFive} />
        <Route path={`${match.url}/dyObservationFive/add`} component={DyObservationFiveAdd} />
        <Route path={`${match.url}/dyObservationFive/edit/:id`} component={DyObservationFiveEdit} />
        <Route path={`${match.url}/dyObservationSix`} exact component={DyObservationSix} />
        <Route path={`${match.url}/dyObservationSix/add`} component={DyObservationSixAdd} />
        <Route path={`${match.url}/dyObservationSix/edit/:id`} component={DyObservationSixEdit} />
        <Route path={`${match.url}/dyObservationSeven`} exact component={DyObservationSeven} />
        <Route path={`${match.url}/dyObservationSeven/add`} component={DyObservationSevenAdd} />
        <Route path={`${match.url}/dyObservationSeven/edit/:id`} component={DyObservationSevenEdit} />
        <Route path={`${match.url}/dyObservationEight`} exact component={DyObservationEight} />
        <Route path={`${match.url}/dyObservationEight/add`} component={DyObservationEightAdd} />
        <Route path={`${match.url}/dyObservationEight/edit/:id`} component={DyObservationEightEdit} />
        <Route path={`${match.url}/dyObservationNine`} exact component={DyObservationNine} />
        <Route path={`${match.url}/dyObservationNine/add`} component={DyObservationNineAdd} />
        <Route path={`${match.url}/dyObservationNine/edit/:id`} component={DyObservationNineEdit} />
        <Route path={`${match.url}/dyObservationTen`} exact component={DyObservationTen} />
        <Route path={`${match.url}/dyObservationTen/add`} component={DyObservationTenAdd} />
        <Route path={`${match.url}/dyObservationTen/edit/:id`} component={DyObservationTenEdit} />
        <Route path={`${match.url}/dyObservationEleven`} exact component={DyObservationEleven} />
        <Route path={`${match.url}/dyObservationEleven/add`} component={DyObservationElevenAdd} />
        <Route path={`${match.url}/dyObservationEleven/edit/:id`} component={DyObservationElevenEdit} />
        <Route path={`${match.url}/dyObservationTwelve`} exact component={DyObservationTwelve} />
        <Route path={`${match.url}/dyObservationTwelve/add`} component={DyObservationTwelveAdd} />
        <Route path={`${match.url}/dyObservationTwelve/edit/:id`} component={DyObservationTwelveEdit} />
        <Route path={`${match.url}/dyObservationThirteen`} exact component={DyObservationThirteen} />
        <Route path={`${match.url}/dyObservationThirteen/add`} component={DyObservationThirteenAdd} />
        <Route path={`${match.url}/dyObservationThirteen/edit/:id`} component={DyObservationThirteenEdit} />
        <Route path={`${match.url}/dyObservationFourteen`} exact component={DyObservationFourteen} />
        <Route path={`${match.url}/dyObservationFourteen/add`} component={DyObservationFourteenAdd} />
        <Route path={`${match.url}/dyObservationFourteen/edit/:id`} component={DyObservationFourteenEdit} />

        {/* <Route path={`${match.url}/dyObservationFifteen`} exact component={DyObservationFifteen} />
        <Route path={`${match.url}/dyObservationFifteen/add`} component={DyObservationFifteenAdd} />
        <Route path={`${match.url}/dyObservationFifteen/edit/:id`} component={DyObservationFifteenEdit} /> */}

        {/* <Route path={`${match.url}/dyObservationSixteen`} exact component={DyObservationSixteen} />
        <Route path={`${match.url}/dyObservationSixteen/add`} component={DyObservationSixteenAdd} />
        <Route path={`${match.url}/dyObservationSixteen/edit/:id`} component={DyObservationSixteenEdit} /> */}

        {/* <Route path={`${match.url}/dyObservationSeventeen`} exact component={DyObservationSeventeen} />
        <Route path={`${match.url}/dyObservationSeventeen/add`} component={DyObservationSeventeenAdd} />
        <Route path={`${match.url}/dyObservationSeventeen/edit/:id`} component={DyObservationSeventeenEdit} /> */}

        {/* <Route path={`${match.url}/dyObservationEighteen`} exact component={DyObservationEighteen} />
        <Route path={`${match.url}/dyObservationEighteen/add`} component={DyObservationEighteenAdd} />
        <Route path={`${match.url}/dyObservationEighteen/edit/:id`} component={DyObservationEighteenEdit} /> */}

        {/* <Route path={`${match.url}/dyObservationNineteen`} exact component={DyObservationNineteen} />
        <Route path={`${match.url}/dyObservationNineteen/add`} component={DyObservationNineteenAdd} />
        <Route path={`${match.url}/dyObservationNineteen/edit/:id`} component={DyObservationNineteenEdit} /> */}

        {/* <Route path={`${match.url}/dyObservationTwenty`} exact component={DyObservationTwenty} />
        <Route path={`${match.url}/dyObservationTwenty/add`} component={DyObservationTwentyAdd} />
        <Route path={`${match.url}/dyObservationTwenty/edit/:id`} component={DyObservationTwentyEdit} /> */}

        {/* <Route path={`${match.url}/dyObservationTwentyOne`} exact component={DyObservationTwentyOne} />
        <Route path={`${match.url}/dyObservationTwentyOne/add`} component={DyObservationTwentyOneAdd} />
        <Route path={`${match.url}/dyObservationTwentyOne/edit/:id`} component={DyObservationTwentyOneEdit} /> */}
      </MyTemplate>
    );
  },
);
