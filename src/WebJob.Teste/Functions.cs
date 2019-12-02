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
    private static IOptions<Secrets.ConnectionStrings> _myConnStr;
    private static MyEmail _myEmail;
    private static IMyFunc _myFunc;

    public Functions(IOptions<Secrets.ConnectionStrings> ConnectionString, MyEmail MyEmail, MyFunc MyFunc)
    {
      _myConnStr = ConnectionString;
      _myEmail = MyEmail;
      _myFunc = MyFunc;

      Console.WriteLine("Functions constructor");
    }


    public void ProcessQueueMessage
    (
      [QueueTrigger("teste")]
      string message,
      ILogger logger
    )
    {
      var configuration = new ConfigurationBuilder()
        .SetBasePath(Directory.GetCurrentDirectory())
        .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
        .AddEnvironmentVariables()
        .Build()
      ;
      
      Secrets.ConnectionStrings myConnStr = new Secrets.ConnectionStrings();
      configuration.GetSection("ConnectionStrings").Bind(myConnStr);

      logger.LogInformation(myConnStr.SendGrid);
    }
  }
}