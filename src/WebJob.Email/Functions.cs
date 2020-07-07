using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Profile4d.Data;
using Profile4d.Domain;
using Profile4d.Email;
using Profile4d.WebJob.Filters;

namespace Profile4d.WebJob.Email
{
  [ErrorHandler]
  public class Functions
  {
    private readonly IOptions<Secrets.ConnectionStrings> _connStr;
    private readonly IMyEmail _email;
    private readonly IEmail _data;
    private readonly IEmailMI4D _emailMI4D;
    public Functions(
      IOptions<Secrets.ConnectionStrings> ConnectionStrings,
      IMyEmail MyEmail,
      IEmailMI4D MyEmailMI4D,
      IEmail Email
    )
    {
      _connStr = ConnectionStrings;
      _email = MyEmail;
      _emailMI4D = MyEmailMI4D;
      _data = Email;
    }

    public async Task EnviarEmailsMI4D(
      [QueueTrigger("%queueName_mi4d%")]
      string message,
      int DequeueCount,
      ILogger logger
    )
    {
      MyEmails email = JsonConvert.DeserializeObject<MyEmails>(message);

      string SgId = await _email.SendMI4DEmail(email);

      _emailMI4D.SaveEmailData(SgId, email.To.First().Address, DequeueCount);
    }

    public async Task EnviarEmails(
      [QueueTrigger("%queueName_email%")]
      string message,
      int DequeueCount,
      ILogger logger
    )
    {
      int messageId = Convert.ToInt32(message);
      
      EmailMessage.Message mailMessage = _data.Info(messageId);
      string sgKey = await _email.SendEmail(mailMessage);
      _data.UpdateSendGridInfo(messageId, sgKey);
    }

    public async Task EnviarEmailsPoison(
      [QueueTrigger("%queueName_email%-poison")]
      string message,
      int DequeueCount,
      ILogger logger
    )
    {
      await _email.SendEmailPoison(message);
    }
  }
}