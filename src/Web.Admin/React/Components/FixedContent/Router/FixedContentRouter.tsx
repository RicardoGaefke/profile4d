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
import CompetentXSabotage from '../CompetentXSabotage/Page';
import TrinityBehavioralCompetent from '../TrinityBehavioralCompetent/Page';
import InternalPartners from '../InternalPartners/Page';
import INamePartnerOne from '../INamePartnerOne/Page';
import IFourPowersOne from '../IFourPowersOne/Page';
import INamePartnerTwo from '../INamePartnerTwo/Page';
import IFourPowersTwo from '../IFourPowersTwo/Page';
import TrinityBehavioralSabotage from '../TrinityBehavioralSabotage/Page';
import InternalEnemies from '../InternalEnemies/Page';
import NameSaboteurOne from '../NameSaboteurOne/Page';
import SFourPowersOne from '../SFourPowersOne/Page';
import NameSaboteurTwo from '../NameSaboteurTwo/Page';
import SFourPowersTwo from '../SFourPowersTwo/Page';
import PDI from '../PDI/Page';
import ThreeIntelligenceCenters from '../ThreeIntelligenceCenters/Page';
import BehavioursProfiles from '../BehavioursProfiles/Page';
import IdentifiedConflicts from '../IdentifiedConflicts/Page';
import EnergySpikes from '../EnergySpikes/Page';
import ColumnChartThreeProfiles from '../ColumnChartThreeProfiles/Page';
import TrinityPersonified from '../TrinityPersonified/Page';
import TrinitySpecifics from '../TrinitySpecifics/Page';
import OriginalXAdapted from '../OriginalXAdapted/Page';

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
        <Route path={`${match.url}/competentxsabotage`} component={CompetentXSabotage} />
        <Route path={`${match.url}/trinitybehavioralcompetent`} component={TrinityBehavioralCompetent} />
        <Route path={`${match.url}/internalpartners`} component={InternalPartners} />
        <Route path={`${match.url}/inamepartnerone`} component={INamePartnerOne} />
        <Route path={`${match.url}/ifourpowersone`} component={IFourPowersOne} />
        <Route path={`${match.url}/inamepartnertwo`} component={INamePartnerTwo} />
        <Route path={`${match.url}/ifourpowerstwo`} component={IFourPowersTwo} />
        <Route path={`${match.url}/trinitybehavioralsabotage`} component={TrinityBehavioralSabotage} />
        <Route path={`${match.url}/internalenemies`} component={InternalEnemies} />
        <Route path={`${match.url}/namesaboteurone`} component={NameSaboteurOne} />
        <Route path={`${match.url}/sfourpowersone`} component={SFourPowersOne} />
        <Route path={`${match.url}/namesaboteurtwo`} component={NameSaboteurTwo} />
        <Route path={`${match.url}/sfourpowerstwo`} component={SFourPowersTwo} />
        <Route path={`${match.url}/pdi`} component={PDI} />
        <Route path={`${match.url}/threeintelligencecenters`} component={ThreeIntelligenceCenters} />
        <Route path={`${match.url}/behavioursprofiles`} component={BehavioursProfiles} />
        <Route path={`${match.url}/identifiedconflicts`} component={IdentifiedConflicts} />
        <Route path={`${match.url}/energyspikes`} component={EnergySpikes} />
        <Route path={`${match.url}/columncharthreeprofiles`} component={ColumnChartThreeProfiles} />
        <Route path={`${match.url}/trinitypersonified`} component={TrinityPersonified} />
        <Route path={`${match.url}/trinityspecifics`} component={TrinitySpecifics} />
        <Route path={`${match.url}/originalxadapted`} component={OriginalXAdapted} />
      </MyTemplate>
    );
  },
);
