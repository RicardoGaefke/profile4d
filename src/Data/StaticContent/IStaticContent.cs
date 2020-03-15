using Profile4d.Domain;

namespace Profile4d.Data
{
  public interface IStaticContent
  {
    public StaticFirstPage FirstPage();
    public BasicReturn FirstPageEdit(StaticFirstPage data);

    public StaticFirstPage CompetentMind();
    public BasicReturn CompetentMindEdit(StaticFirstPage data);

    public StaticFirstPage WhoIAm();
    public BasicReturn WhoIAmEdit(StaticFirstPage data);

    public StaticFirstPage DominantName();
    public BasicReturn DominantNameEdit(StaticFirstPage data);

    public StaticFirstPage DominantStructure();
    public BasicReturn DominantStructureEdit(StaticFirstPage data);

    public StaticFirstPage SabotageMode();
    public BasicReturn SabotageModeEdit(StaticFirstPage data);

    public StaticFirstPage SabotageWhoIAm();
    public BasicReturn SabotageWhoIAmEdit(StaticFirstPage data);

    public StaticFirstPage SabotageDominant();
    public BasicReturn SabotageDominantEdit(StaticFirstPage data);

    public StaticFirstPage SabotageName();
    public BasicReturn SabotageNameEdit(StaticFirstPage data);

    public StaticFirstPage CompetentXSabotage();
    public BasicReturn CompetentXSabotageEdit(StaticFirstPage data);

    public StaticFirstPage TrinityBehavioralCompetent();
    public BasicReturn TrinityBehavioralCompetentEdit(StaticFirstPage data);

    public StaticFirstPage InternalPartners();
    public BasicReturn InternalPartnersEdit(StaticFirstPage data);

    public StaticFirstPage IntNamePartnerOne();
    public BasicReturn IntNamePartnerOneEdit(StaticFirstPage data);

    public StaticFirstPage IntFourPowersOne();
    public BasicReturn IntFourPowersOneEdit(StaticFirstPage data);

    public StaticFirstPage IntNamePartnerTwo();
    public BasicReturn IntNamePartnerTwoEdit(StaticFirstPage data);

    public StaticFirstPage IntFourPowersTwo();
    public BasicReturn IntFourPowersTwoEdit(StaticFirstPage data);

    public StaticFirstPage TrinityBehaviourSabotage();
    public BasicReturn TrinityBehaviourSabotageEdit(StaticFirstPage data);

    public StaticFirstPage InternalEnemies();
    public BasicReturn InternalEnemiesEdit(StaticFirstPage data);

    public StaticFirstPage NameSaboteurOne();
    public BasicReturn NameSaboteurOneEdit(StaticFirstPage data);

    public StaticFirstPage SFourPowersOne();
    public BasicReturn SFourPowersOneEdit(StaticFirstPage data);

    public StaticFirstPage NameSaboteurTwo();
    public BasicReturn NameSaboteurTwoEdit(StaticFirstPage data);

    public StaticFirstPage SFourPowersTwo();
    public BasicReturn SFourPowersTwoEdit(StaticFirstPage data);

    public StaticFirstPage PDI();
    public BasicReturn PDIEdit(StaticFirstPage data);

    public StaticFirstPage Introduction();
    public BasicReturn IntroductionEdit(StaticFirstPage data);

    public StaticFirstPage PersonalAnalysis();
    public BasicReturn PersonalAnalysisEdit(StaticFirstPage data);
  }
}