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
  }
}