using System;
using System.IO;
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
      CreateHostBuilder(args).Build().Run();

      // var builder = new HostBuilder();
      
      // builder.ConfigureWebJobs(b =>
      // {
      //   b.AddAzureStorageCoreServices();
      //   b.AddAzureStorage();
      // });
      
      // builder.ConfigureLogging((context, b) => {
      //   b.AddConsole();
      // });

      // builder.ConfigureServices((context, services) => {
      //   // Inject config
      //   services.Configure<Secrets.ConnectionStrings>(context.Configuration.GetSection("ConnectionStrings"));
      //   services.AddHostedService<Functions>();
      //   services.AddHostedService<MyEmail>();
      //   services.AddHostedService<IMyFunc, MyFunc>();

      //   services.BuildServiceProvider();
      // });

      // var host = builder.Build();
      
      // using (host)
      // {
      //   host.Run();
      // }
    }

    public static IHostBuilder CreateHostBuilder(string[] args) =>
      Host.CreateDefaultBuilder(args)
        .ConfigureHostConfiguration(configHost =>
        {
          configHost.SetBasePath(Directory.GetCurrentDirectory());
          configHost.AddJsonFile("appsettings.json", optional: true);
          configHost.AddCommandLine(args);
        })
        .ConfigureServices((context, services) =>
        {
          var Configuration = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
            .AddEnvironmentVariables()
            .Build()
          ;
          
          services.Configure<Secrets.ConnectionStrings>(Configuration.GetSection("ConnectionStrings"));
          services.AddSingleton<MyEmail>();
        })
        .ConfigureLogging((context, b) => {
          b.AddConsole();
        })
        .ConfigureWebJobs(b => {
          b.AddAzureStorageCoreServices();
          b.AddAzureStorage();
        })
      ;
  }
}
