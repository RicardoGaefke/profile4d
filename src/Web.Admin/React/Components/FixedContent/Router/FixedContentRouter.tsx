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
import WorkKey from '../WorkKey/Page';
import IdealPartner from '../IdealPartner/Page';
import BehavioralDNA from '../BehavioralDNA/Page';
import ArchetypeEssence from '../ArchetypeEssence/Page';
import EssentialFeature from '../EssentialFeature/Page';
import CharacterFormation from '../CharacterFormation/Page';
import Moment from '../Moment/Page';
import ExistentialPain from '../ExistentialPain/Page';
import NoteExistentialPain from '../NoteExistentialPain/Page';
import CrystallizationPersonality from '../CrystallizationPersonality/Page';
import BodyStructureFixed from '../BodyStructureFixed/Page';
import BodyShape from '../BodyShape/Page';
import MainVirtueEssence from '../MainVirtueEssence/Page';
import BenefitsVirtueEssence from '../BenefitsVirtueEssence/Page';
import TwelveCharacterAdultStrengths from '../TwelveCharacterAdultStrengths/Page';
import TwelveCompetencesApresentation from '../TwelveCompetencesApresentation/Page';
import FourCompetentStages from '../FourCompetentStages/Page';
import Observation from '../Observation/Page';
import TwelveCompetences from '../TwelveCompetences/Page';
import ExcellentCompromise from '../ExcellentCompromise/Page';
// import ConflictsResolution from '../ConflictsResolution/Page';
// import Adaptability from '../Adaptability/Page';
// import Proactivity from '../Proactivity/Page';
// import InternationalRelationship from '../InternationalRelationship/Page';
// import ClientOrientation from '../ClientOrientation/Page';
// import PeoplesDevelopment from '../PeoplesDevelopment/Page';
// import NegotiationPersuation from '../NegotiationPersuation/Page';
// import InovationCriativity from '../InovationCriativity/Page';
// import EntrepreneurOrientation from '../EntrepreneurOrientation/Page';
// import StrategicalPlanning from '../StrategicalPlanning/Page';
// import SystemicalVision from '../SystemicalVision/Page';
// import EnergyByArea from '../EnergyByArea/Page';
// import LastPageResume from '../LastPageResume/Page';
// import DominantProfileName from '../DominantProfileName/Page';
// import InternalParnerOne from '../InternalParnerOne/Page';
// import InternalPartnerTwo from '../InternalParnerTwo/Page';
// import NameIdealPartner from '../NameIdealPartner/Page';
// import BehavioralResources from '../BehavioralResources/Page';
// import TwelveCompetencesTable from '../TwelveCompetencesTable/Page';

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
        <Route path={`${match.url}/workkey`} component={WorkKey} />
        <Route path={`${match.url}/idealpartner`} component={IdealPartner} />
        <Route path={`${match.url}/behavioraldna`} component={BehavioralDNA} />
        <Route path={`${match.url}/archetypeessence`} component={ArchetypeEssence} />
        <Route path={`${match.url}/essentialfeature`} component={EssentialFeature} />
        <Route path={`${match.url}/characterformation`} component={CharacterFormation} />
        <Route path={`${match.url}/moment`} component={Moment} />
        <Route path={`${match.url}/existentialpain`} component={ExistentialPain} />
        <Route path={`${match.url}/noteexistentialpain`} component={NoteExistentialPain} />
        <Route path={`${match.url}/crystallizationpersonality`} component={CrystallizationPersonality} />
        <Route path={`${match.url}/bodystructurefixed`} component={BodyStructureFixed} />
        <Route path={`${match.url}/bodyshape`} component={BodyShape} />
        <Route path={`${match.url}/mainvirtueessence`} component={MainVirtueEssence} />
        <Route path={`${match.url}/benefitsvirtueessence`} component={BenefitsVirtueEssence} />
        <Route path={`${match.url}/twelvecharacteradultstrengths`} component={TwelveCharacterAdultStrengths} />
        <Route path={`${match.url}/twelvecompetencesapresentation`} component={TwelveCompetencesApresentation} />
        <Route path={`${match.url}/fourcompetentstages`} component={FourCompetentStages} />
        <Route path={`${match.url}/Observation`} component={Observation} />
        <Route path={`${match.url}/twelvecompetences`} component={TwelveCompetences} />
        <Route path={`${match.url}/excellentcompromise`} component={ExcellentCompromise} />
        {/* <Route path={`${match.url}/conflictsresolution`} component={ConflictsResolution} />
        <Route path={`${match.url}/adaptability`} component={Adaptability} />
        <Route path={`${match.url}/proactivity`} component={Proactivity} />
        <Route path={`${match.url}/internationalrelationship`} component={InternationalRelationship} />
        <Route path={`${match.url}/clientorientation`} component={ClientOrientation} />
        <Route path={`${match.url}/peoplesdevelopment`} component={PeoplesDevelopment} />
        <Route path={`${match.url}/negotiationpersuation`} component={NegotiationPersuation} />
        <Route path={`${match.url}/inovationcriativity`} component={InovationCriativity} />
        <Route path={`${match.url}/entrepreneurorientation`} component={EntrepreneurOrientation} />
        <Route path={`${match.url}/strategicalplanning`} component={StrategicalPlanning} />
        <Route path={`${match.url}/systemicalvision`} component={SystemicalVision} />
        <Route path={`${match.url}/energybyarea`} component={EnergyByArea} />
        <Route path={`${match.url}/lastpageresume`} component={LastPageResume} />
        <Route path={`${match.url}/dominantprofilename`} component={DominantProfileName} />
        <Route path={`${match.url}/internalparnerone`} component={InternalParnerOne} />
        <Route path={`${match.url}/internalpartnertwo`} component={InternalPartnerTwo} />
        <Route path={`${match.url}/nameidealpartner`} component={NameIdealPartner} />
        <Route path={`${match.url}/behavioralresources`} component={BehavioralResources} />
        <Route path={`${match.url}/twelvecompetencestable`} component={TwelveCompetencesTable} /> */}
      </MyTemplate>
    );
  },
);
