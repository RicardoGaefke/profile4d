import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  RouteComponentProps,
  Route,
  withRouter,
} from 'react-router-dom';
import MyTemplate from '../../Home/Template/Template';
import Page from '../Introduction/Page';
import PersonalAnalyze from '../PersonalAnalyze/Page';
import InferiorMind from '../InferiorMind/Page';
import DominantProfile from '../DominantProfile/Page';
import CompetentMode from '../CompetentMode/Page';
import DominantWhoIAm from '../DominantWhoIAm/Page';
import DominantStructure from '../DominantStructure/Page';
import DominantResources from '../DominantResources/Page';
import FourPersonalPowers from '../FourPersonalPowers/Page';
import YourMotivations from '../YourMotivations/Page';
import AttentionFocus from '../AttentionFocus/Page';
import LeaderDifferential from '../LeaderDifferential/Page';
import RelationedValuesDomProfile from '../RelationedValuesDomProfile/Page';
import CompetentEmotional from '../CompetentEmotional/Page';
import CommunicatesMode from '../CommunicatesMode/Page';
import InteractsRelationships from '../InteractsRelationships/Page';
import SabotageDominant from '../SabotageDominant/Page';
import SabotageMode from '../SabotageMode/Page';
import SabotageWhoIAm from '../SabotageWhoIAm/Page';
import SynthesisSaboteur from '../SynthesisSaboteur/Page';
import LimitingMatrix from '../LimitingMatrix/Page';
import CommunicationDifficulty from '../CommunicationDifficulty/Page';
import DifficultyRelationships from '../DifficultyRelationships/Page';
import FourLimitationPowers from '../FourLimitationPowers/Page';
import LimitingAttitudes from '../LimitingAttitudes/Page';
import BehavioralAddiction from '../BehavioralAddiction/Page';
import EmotionalAddiction from '../EmotionalAddiction/Page';
import MentalAddiction from '../MentalAddiction/Page';
import DefenseMecanisms from '../DefenseMecanisms/Page';
import NeuroticCompulsion from '../NeuroticCompulsion/Page';
import CompetentXSabotage from '../CompetentXSabotage/Page';
import TrinityBehavioralCompetent from '../TrinityBehavioralCompetent/Page';
import InternalPartners from '../InternalPartners/Page';
import DifficultyComunnication from '../DifficultyComunnication/Page';
import FourPersonalityPowers from '../FourPersonalityPowers/Page';
import TrinityBehavioralSabotage from '../TrinityBehavioralSabotage/Page';
import InternalEnemies from '../InternalEnemies/Page';
import FirstFourLimitateForces from '../FirstFourLimitateForces/Page';
import SecondFourLimitateForces from '../SecondFourLimitateForces/Page';
import PDI from '../PDI/Page';
import ThreeIntelligenceCenters from '../ThreeIntelligenceCenters/Page';
import BehavioralRespectiveEnergies from '../BehavioralRespectiveEnergies/Page';
import IdentifiedConflicts from '../IdentifiedConflicts/Page';
import EnergySpikes from '../EnergySpikes/Page';
import HomogeneousHeterogeneous from '../HomogeneousHeterogeneous/Page';
import TrinitySpecifics from '../TrinitySpecifics/Page';
import OriginalXAdapted from '../OriginalXAdapted/Page';
import ExerciseProfileMoviment from '../ExerciseProfileMoviment/Page';
import SuperiorMind from '../SuperiorMind/Page';
import HealthyAdult from '../HealthyAdult/Page';
import SynergeticMode from '../SynergeticMode/Page';
import DomProfile from '../DomProfile/Page';
import BigChallenge from '../BigChallenge/Page';

export default withRouter(
  (props: RouteComponentProps): React.ReactElement<RouteComponentProps> => {
    const { match } = props;

    return (
      <MyTemplate>
        <Route path={`${match.url}/introduction`} component={Page} />
        <Route path={`${match.url}/personalanalyze`} component={PersonalAnalyze} />
        <Route path={`${match.url}/inferiormind`} component={InferiorMind} />
        <Route path={`${match.url}/dominantprofile`} component={DominantProfile} />
        <Route path={`${match.url}/competentmode`} component={CompetentMode} />
        <Route path={`${match.url}/dominantwhoiam`} component={DominantWhoIAm} />
        <Route path={`${match.url}/dominantstructure`} component={DominantStructure} />
        <Route path={`${match.url}/dominantresources`} component={DominantResources} />
        <Route path={`${match.url}/fourpersonalpowers`} component={FourPersonalPowers} />
        <Route path={`${match.url}/yourmotivations`} component={YourMotivations} />
        <Route path={`${match.url}/attentionfocus`} component={AttentionFocus} />
        <Route path={`${match.url}/leaderdifferential`} component={LeaderDifferential} />
        <Route path={`${match.url}/relationedvaluesdomprofile`} component={RelationedValuesDomProfile} />
        <Route path={`${match.url}/competentemotional`} component={CompetentEmotional} />
        <Route path={`${match.url}/communicatesmode`} component={CommunicatesMode} />
        <Route path={`${match.url}/interactsrelationships`} component={InteractsRelationships} />
        <Route path={`${match.url}/sabotagedominant`} component={SabotageDominant} />
        <Route path={`${match.url}/sabotagemode`} component={SabotageMode} />
        <Route path={`${match.url}/sabotagewhoiam`} component={SabotageWhoIAm} />
        <Route path={`${match.url}/synthesissaboteur`} component={SynthesisSaboteur} />
        <Route path={`${match.url}/limitingmatrix`} component={LimitingMatrix} />
        <Route path={`${match.url}/communicationdifficulty`} component={CommunicationDifficulty} />
        <Route path={`${match.url}/difficultyrelationships`} component={DifficultyRelationships} />
        <Route path={`${match.url}/fourlimitationpowers`} component={FourLimitationPowers} />
        <Route path={`${match.url}/limitingattitudes`} component={LimitingAttitudes} />
        <Route path={`${match.url}/behavioraladdiction`} component={BehavioralAddiction} />
        <Route path={`${match.url}/emotionaladdiction`} component={EmotionalAddiction} />
        <Route path={`${match.url}/mentaladdiction`} component={MentalAddiction} />
        <Route path={`${match.url}/defensemecanisms`} component={DefenseMecanisms} />
        <Route path={`${match.url}/neuroticcompulsion`} component={NeuroticCompulsion} />
        <Route path={`${match.url}/competentxsabotage`} component={CompetentXSabotage} />
        <Route path={`${match.url}/trinitybehavioralcompetent`} component={TrinityBehavioralCompetent} />
        <Route path={`${match.url}/internalpartners`} component={InternalPartners} />
        <Route path={`${match.url}/difficultycomunnication`} component={DifficultyComunnication} />
        <Route path={`${match.url}/fourpersonalitypowers`} component={FourPersonalityPowers} />
        <Route path={`${match.url}/trinitybehavioralsabotage`} component={TrinityBehavioralSabotage} />
        <Route path={`${match.url}/internalenemies`} component={InternalEnemies} />
        <Route path={`${match.url}/firstfourlimitateforces`} component={FirstFourLimitateForces} />
        <Route path={`${match.url}/secondfourlimitateforces`} component={SecondFourLimitateForces} />
        <Route path={`${match.url}/pdi`} component={PDI} />
        <Route path={`${match.url}/threeintelligencecenters`} component={ThreeIntelligenceCenters} />
        <Route path={`${match.url}/behavioralrespectiveenergies`} component={BehavioralRespectiveEnergies} />
        <Route path={`${match.url}/identifiedconflicts`} component={IdentifiedConflicts} />
        <Route path={`${match.url}/energyspikes`} component={EnergySpikes} />
        <Route path={`${match.url}/homogeneousheterogeneous`} component={HomogeneousHeterogeneous} />
        <Route path={`${match.url}/trinityspecifics`} component={TrinitySpecifics} />
        <Route path={`${match.url}/originalxadapted`} component={OriginalXAdapted} />
        <Route path={`${match.url}/exerciseprofilemoviment`} component={ExerciseProfileMoviment} />
        <Route path={`${match.url}/superiormind`} component={SuperiorMind} />
        <Route path={`${match.url}/healthyadult`} component={HealthyAdult} />
        <Route path={`${match.url}/synergeticmode`} component={SynergeticMode} />
        <Route path={`${match.url}/domprofile`} component={DomProfile} />
        <Route path={`${match.url}/bigchallenge`} component={BigChallenge} />
      </MyTemplate>
    );
  },
);
