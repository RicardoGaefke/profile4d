using System;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Profile4d.Domain;

namespace Profile4d.WebJob.Teste
{
  class Program
  {
    static void Main(string[] args)
    {
      var builder = new HostBuilder();
      
      builder.ConfigureWebJobs(b =>
      {
        b.AddAzureStorageCoreServices();
        b.AddAzureStorage();
      });
      
      builder.ConfigureLogging((context, b) => {
        b.AddConsole();
      });

      builder.ConfigureServices((context, services) => {
        // Inject config
        services.Configure<Secrets.ConnectionStrings>(context.Configuration.GetSection("ConnectionStrings"));

        Console.WriteLine("config serv");
      });

      var host = builder.Build();
      
      using (host)
      {
        host.Run();
      }
    }
  }
}
