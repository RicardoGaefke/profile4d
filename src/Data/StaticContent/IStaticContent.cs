using Profile4d.Domain;

namespace Profile4d.Data
{
  public interface IStaticContent
  {
    public StaticFirstPage FirstPage();
    public BasicReturn FirstPageEdit(StaticFirstPage data);
  }
}