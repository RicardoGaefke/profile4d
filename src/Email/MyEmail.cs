using System;
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

    public string SendGridKey()
    {
      return _connectionStrings.Value.SendGrid;
    }

    public async Task<string> SendTestEmail()
    {
      SendGridClient client = new SendGridClient(_connectionStrings.Value.SendGrid);

      var msg = new SendGridMessage()
      {
        From = new EmailAddress("atendimento@profile4d.com", "Atendimento Profile4D"),
        Subject = "Suporte Profile4D",
        HtmlContent = "<strong>Enviado pelo sistema with C# and DI</strong>"
      };

      msg.AddTo(new EmailAddress("ricardogaefke@gmail.com", "Ricardo Gaefke"));
      msg.AddTo(new EmailAddress("lucasneves.dev@gmail.com", "Lucas Neves"));

      Response response = await client.SendEmailAsync(msg);

      return response.Headers.GetValues("x-message-id").FirstOrDefault();
    }
  }
}