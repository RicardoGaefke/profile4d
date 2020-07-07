using System.Threading.Tasks;
using Profile4d.Domain;

namespace Profile4d.Email
{
  public interface IMyEmail
  {
    Task<string> SendEmail(EmailMessage.Message message);
    Task<string> SendEmailPoison(string message);
    Task<string> SendMI4DEmail(MyEmails email);
  }
}