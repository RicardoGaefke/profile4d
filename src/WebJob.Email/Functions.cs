using System.Collections.Generic;
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
using Profile4d.Storage;
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
    private readonly IQueue _queue;
    private readonly ISendKey _sendKey;
    private HubConnection _connection;
    private string _host;
    public Functions(
      IOptions<Secrets.ConnectionStrings> ConnectionStrings,
      IOptions<Secrets.Config> config,
      IMyEmail MyEmail,
      IEmailMI4D MyEmailMI4D,
      IEmail Email,
      ISendKey sendKey,
      IQueue queue
    )
    {
      _connStr = ConnectionStrings;
      _config = config;
      _email = MyEmail;
      _emailMI4D = MyEmailMI4D;
      _data = Email;
      _sendKey = sendKey;
      _queue = queue;

      if (_config.Value.domain == "localhost")
      {
        _host = "https://localhost:5075";
      } else
      {
        _host = "http://web_api:5000";
      }

      // _connection = new HubConnectionBuilder()
      //   .WithUrl($"{_host}/hubs/webjobs")
      //   .WithAutomaticReconnect()
      //   .Build()
      // ;

      // Task.Run(() => _connection.StartAsync()).Wait();
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

    public async Task ColocaEmailsDeConsultorNaFilaDeEnvioAsync(
      [QueueTrigger("email-chaves-consultor")]
      string message,
      int DequeueCount,
      ILogger logger
    )
    {
      List<int> emails = await _data.EmailsDeChavesPorConsultorAsync(890);

      for (int i = 0; i < emails.Count; i++)
      {
        _queue.SaveMessage("email", emails[i].ToString());
      }
    }

    public async Task EnviaChavePorEmailAsync(
      [QueueTrigger("email-chave")]
      string message,
      int DequeueCount,
      ILogger logger
    )
    {
      Key chave = await _sendKey.EnvioDeChaveInfoParaEmailAsync(Convert.ToInt32(message));
      User user = new User(chave.Email);
      string url = $"https://localhost:5080/confirmKey/{chave.Guid}";
      string sg = await _email.EnviarChaveAsync(user, url);
      logger.LogInformation(sg);
      // salva info envio
    }
  }
}