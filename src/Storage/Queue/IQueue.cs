using Microsoft.Azure.Storage.Queue;

namespace Profile4d.Storage
{
  public interface IQueue
  {
    void SaveMessage(string queue, string message);
  }
}