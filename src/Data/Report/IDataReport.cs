using Profile4d.Domain;

namespace Profile4d.Data
{
  public interface IDataReport
  {
    Report GetReport(string guid);
  }
}
