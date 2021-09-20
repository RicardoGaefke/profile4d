using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using SendGrid;
using SendGrid.Helpers.Mail;
using Profile4d.Domain;

namespace Profile4d.Email
{
  public class MyEmail : IMyEmail
  {
    private readonly IOptions<Secrets.ConnectionStrings> _connectionStrings;

    public MyEmail(IOptions<Secrets.ConnectionStrings> ConnectionStrings)
    {
      _connectionStrings = ConnectionStrings;
    }

    public async Task<string> SendEmail(EmailMessage.Message message)
    {
      SendGridClient client = new SendGridClient(_connectionStrings.Value.SendGrid);

      var msg = new SendGridMessage()
      {
        From = new EmailAddress("naoresponda@meuperfil4d.com.br", "Atendimento MeuPerfil4D"),
        Subject = message.Content.Subject,
        HtmlContent = message.Content.Body
      };

      if (!string.IsNullOrEmpty(message.Name) && message.Name != "New User")
      {
        msg.AddTo(new EmailAddress(message.Email, message.Name));
      }
      else
      {
        msg.AddTo(new EmailAddress(message.Email));
      }

      Response response = await client.SendEmailAsync(msg);

      return response.Headers.GetValues("x-message-id").FirstOrDefault();
    }

     public async Task<string> SendEmailPoison(string message)
    {
      SendGridClient client = new SendGridClient(_connectionStrings.Value.SendGrid);

      var msg = new SendGridMessage()
      {
        From = new EmailAddress("naoresponda@meuperfil4d.com.br", "Atendimento MeuPerfil4D"),
        Subject = "Email Poison",
        HtmlContent = $"<strong>Email poison: {message}</strong>"
      };

      msg.AddTo(new EmailAddress("ricardogaefke@gmail.com", "Ricardo Gaefke"));

      Response response = await client.SendEmailAsync(msg);

      return response.Headers.GetValues("x-message-id").FirstOrDefault();
    }

    public async Task<string> SendMI4DEmail(MyEmails email)
    {
      SendGridClient client = new SendGridClient(_connectionStrings.Value.SendGrid);

      var msg = new SendGridMessage();
      msg.SetFrom(new EmailAddress("suporte@mi3dplus.com", "Atendimento MeuPerfil4D"));
      msg.SetSubject(email.Subject);
      msg.AddContent(MimeType.Html, email.Body);
      msg.AddTo(new EmailAddress(email.To.First().Address, email.To.First().DisplayName));
      
      if (email.To.First().Address != "coachcarlosdesouza@hotmail.com")
      {
        msg.AddCc(new EmailAddress("coachcarlosdesouza@hotmail.com", "Carlos de Souza"));
      }

      if (email.To.First().Address != "ricardogaefke@gmail.com")
      {
        msg.AddCc(new EmailAddress("ricardogaefke@gmail.com", "Ricardo Gaefke"));
      }

      var response = await client.SendEmailAsync(msg);

      return response.Headers.GetValues("x-message-id").FirstOrDefault();
    }
  }
}