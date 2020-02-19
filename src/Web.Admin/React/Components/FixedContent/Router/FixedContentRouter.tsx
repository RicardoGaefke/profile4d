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
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
import CompetentXSabotage from '../CompetentXSabotage/Page';
import TrinityBehavioralCompetent from '../TrinityBehavioralCompetent/Page';
import InternalPartners from '../InternalPartners/Page';
import TrinityBehavioralSabotage from '../TrinityBehavioralSabotage/Page';
import InternalEnemies from '../InternalEnemies/Page';
import NameSaboteurOne from '../NameSaboteurOne/Page';
import SFourPowersOne from '../SFourPowersOne/Page';
import NameSaboteurTwo from '../NameSaboteurTwo/Page';
import SFourPowersTwo from '../SFourPowersTwo/Page';
import PDI from '../PDI/Page';
import ThreeIntelligenceCenters from '../ThreeIntelligenceCenters/Page';
import EnergySpikes from '../EnergySpikes/Page';
import TrinitySpecifics from '../TrinitySpecifics/Page';
import OriginalXAdapted from '../OriginalXAdapted/Page';

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
        {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
        <Route path={`${match.url}/competentxsabotage`} component={CompetentXSabotage} />
        <Route path={`${match.url}/trinitybehavioralcompetent`} component={TrinityBehavioralCompetent} />
        <Route path={`${match.url}/internalpartners`} component={InternalPartners} />
        {/* <Route path={`${match.url}/inamepartnerone`} component={INamePartnerOne} />
        <Route path={`${match.url}/ifourpowersone`} component={IFourPowersOne} />
        <Route path={`${match.url}/inamepartnertwo`} component={INamePartnerTwo} />
        <Route path={`${match.url}/ifourpowerstwo`} component={IFourPowersTwo} /> */}
        <Route path={`${match.url}/trinitybehavioralsabotage`} component={TrinityBehavioralSabotage} />
        <Route path={`${match.url}/internalenemies`} component={InternalEnemies} />
        <Route path={`${match.url}/namesaboteurone`} component={NameSaboteurOne} />
        <Route path={`${match.url}/sfourpowersone`} component={SFourPowersOne} />
        <Route path={`${match.url}/namesaboteurtwo`} component={NameSaboteurTwo} />
        <Route path={`${match.url}/sfourpowerstwo`} component={SFourPowersTwo} />
        <Route path={`${match.url}/pdi`} component={PDI} />
        <Route path={`${match.url}/threeintelligencecenters`} component={ThreeIntelligenceCenters} />
        {/* <Route path={`${match.url}/behavioursprofiles`} component={BehavioursProfiles} />
        <Route path={`${match.url}/identifiedconflicts`} component={IdentifiedConflicts} /> */}
        <Route path={`${match.url}/energyspikes`} component={EnergySpikes} />
        {/* <Route path={`${match.url}/columncharthreeprofiles`} component={ColumnChartThreeProfiles} />
        <Route path={`${match.url}/trinitypersonified`} component={TrinityPersonified} /> */}
        <Route path={`${match.url}/trinityspecifics`} component={TrinitySpecifics} />
        <Route path={`${match.url}/originalxadapted`} component={OriginalXAdapted} />
        {/* <Route path={`${match.url}/graphicimage`} component={GraphicImage} />
        <Route path={`${match.url}/personalizedtext`} component={PersonalizedText} />
        <Route path={`${match.url}/explainedtext`} component={ExplainedText} />
        <Route path={`${match.url}/personalizedtable`} component={PersonalizedTable} /> */}
        {/* <Route path={`${match.url}/defaulttext`} component={DefaultText} /> */}
      </MyTemplate>
    );
  },
);
