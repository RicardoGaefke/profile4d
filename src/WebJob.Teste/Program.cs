using System;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Azure.WebJobs.Host;
using Profile4d.Domain;
using Profile4d.Email;

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
        services.AddSingleton<Functions>();
        services.AddSingleton<MyEmail>();
        services.AddSingleton<IMyFunc, MyFunc>();

        services.BuildServiceProvider();
      });

      var host = builder.Build();
      
      using (host)
      {
        host.Run();
      }
    }
  }
}
