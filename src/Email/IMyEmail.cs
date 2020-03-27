using System.Threading.Tasks;

namespace Profile4d.Email
{
  public interface IMyEmail
  {
    string SendGridKey();
    Task<string> SendTestEmail();
  }
}