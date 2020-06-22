using System.Collections.Generic;

namespace Profile4d.Domain
{
  public class MyEmails
  {
    public string Subject;
    public IEnumerable<MyAddress> To;
    public string Body;
  }

  public class MyAddress
  {
    public string DisplayName;
    public string Address;
  }
}