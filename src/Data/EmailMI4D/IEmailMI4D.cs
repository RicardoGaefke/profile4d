using System.Collections.Generic;
using Profile4d.Domain;

namespace Profile4d.Data
{
  public interface IEmailMI4D
  {
    void SaveEmailData(string id, string to, int dequeue);
    IEnumerable<EmailReport> List();
  }
}