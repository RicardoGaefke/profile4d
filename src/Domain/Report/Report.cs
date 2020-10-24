using System.Collections.Generic;

namespace Profile4d.Domain
{
  public class Report : BasicReturn
  {
    public List<Profiles> Profiles;
    public List<StaticFirstPage> StaticContent;
    public List<Image> Images;

    public Report()
    {}
  }
}
