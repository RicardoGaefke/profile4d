using System.Threading.Tasks;
using Profile4d.Domain;

namespace Profile4d.Email
{
  public interface IMyEmail
  {
    Task<string> SendTestEmail();
    Task<string> SendMI4DEmail(MyEmails email);
  }
}