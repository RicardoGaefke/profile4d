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
    private readonly IEmailMI4D _emailMI4D;
    public Functions(
      IOptions<Secrets.ConnectionStrings> ConnectionStrings,
      IMyEmail MyEmail,
      IEmailMI4D MyEmailMI4D
    )
    {
      _connStr = ConnectionStrings;
      _email = MyEmail;
      _emailMI4D = MyEmailMI4D;
    }

    public async Task EnviarEmailsMI4D(
      [QueueTrigger("%queueName-mi4d%")]
      string message,
      int DequeueCount,
      ILogger logger)
    {
      MyEmails email = JsonConvert.DeserializeObject<MyEmails>(message);

      string SgId = await _email.SendMI4DEmail(email);

      _emailMI4D.SaveEmailData(SgId, email.To.First().Address, DequeueCount);
    }
  }
}