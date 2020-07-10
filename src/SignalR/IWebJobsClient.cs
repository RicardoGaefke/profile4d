using System.Threading.Tasks;
using Profile4d.Domain;

namespace Profile4d.SignalR
{
  public interface IWebJobsClient
  {
    Task MI4D(string id);
    Task Profile4D(string id);
  }
}