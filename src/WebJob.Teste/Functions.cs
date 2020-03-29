using System;
using System.IO;
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Profile4d.Domain;
using Profile4d.Email;

namespace Profile4d.WebJob.Teste
{
  public class Functions
  {
    private readonly IOptions<Secrets.ConnectionStrings> _connStr;
    private static MyEmail _myEmail;

    public Functions(
      IOptions<Secrets.ConnectionStrings> ConnectionStrings,
      MyEmail MyEmail
    )
    {
      _connStr = ConnectionStrings;
      _myEmail = MyEmail;
    }


    public async void ProcessQueueMessage
    (
      [QueueTrigger("teste")]
      string message,
      ILogger logger
    )
    {
      logger.LogInformation(await _myEmail.SendTestEmail());
    }
  }
}