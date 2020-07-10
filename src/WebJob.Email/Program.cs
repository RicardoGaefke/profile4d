using System.IO;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Profile4d.Data;
using Profile4d.Domain;
using Profile4d.Email;

namespace Profile4d.WebJob.Email
{
  class Program
  {
    static async Task Main(string[] args)
    {
      var builder = new HostBuilder()
        .ConfigureWebJobs(b =>
        {
          b
            .AddAzureStorageCoreServices()
            .AddAzureStorage()
          ;
        })
        .ConfigureAppConfiguration(b =>
        {
          b.AddCommandLine(args);
        })
        .ConfigureLogging((context, b) =>
        {
          b.AddConsole();
          b.SetMinimumLevel(LogLevel.Information);
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
          services.Configure<Secrets.Config>((IConfigurationRoot)Configuration);
          services.AddSingleton<IMyEmail, MyEmail>();
          services.AddSingleton<IEmailMI4D, EmailMI4D>();
          services.AddSingleton<IEmail, Profile4d.Data.Email>();
        })
        .UseConsoleLifetime()
      ;

      var host = builder.Build();

      using (host)
      {
        await host.RunAsync();
      }
    }
  }
}
