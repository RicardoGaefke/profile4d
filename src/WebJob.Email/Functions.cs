using System.Net.WebSockets;
using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR.Client;
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
    private readonly IOptions<Secrets.Config> _config;
    private readonly IMyEmail _email;
    private readonly IEmail _data;
    private readonly IEmailMI4D _emailMI4D;
    private HubConnection _connection;
    private string _host;
    public Functions(
      IOptions<Secrets.ConnectionStrings> ConnectionStrings,
      IOptions<Secrets.Config> config,
      IMyEmail MyEmail,
      IEmailMI4D MyEmailMI4D,
      IEmail Email
    )
    {
      _connStr = ConnectionStrings;
      _config = config;
      _email = MyEmail;
      _emailMI4D = MyEmailMI4D;
      _data = Email;

      if (_config.Value.domain == "localhost")
      {
        _host = "https://localhost:5075";
      } else
      {
        _host = "http://web_api:5000";
      }

      _connection = new HubConnectionBuilder()
        .WithUrl($"{_host}/hubs/webjobs")
        .WithAutomaticReconnect()
        .Build()
      ;

      Task.Run(() => _connection.StartAsync()).Wait();
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

      await _connection.InvokeAsync("MI4D", SgId);
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
      _data.UpdateSendGridInfo(messageId, sgKey, DequeueCount);
      await _connection.InvokeAsync("Profile4D", sgKey);
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