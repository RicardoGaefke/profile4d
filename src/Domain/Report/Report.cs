using System.Collections.Generic;

namespace Profile4d.Domain
{
  public class Report : BasicReturn
  {
    public List<Profiles> Profiles;
    public List<StaticFirstPage> StaticContent;
    public List<StaticFirstPage> DynamicContent;
    public List<Image> Images;

    public Report()
    {}
  }
}
