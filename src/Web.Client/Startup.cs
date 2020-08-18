using System;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Profile4d.DI;
using Profile4d.Domain;
using Profile4d.Data;

namespace Profile4d.Web.Client
{
  public class Startup
  {
    public Startup(IConfiguration configuration, IHostEnvironment environment)
    {
        Configuration = configuration;
        HostingEnvironment = environment;
    }

    public IConfiguration Configuration { get; }
    public IHostEnvironment HostingEnvironment { get; }

    public void ConfigureServices(IServiceCollection services)
    {
      // Add your AppInsights ID here to make it globally available //
      // services.AddApplicationInsightsTelemetry("465f47b3-8d7a-46ee-a81e-e51182c12296");

      // Inject config
      services.Configure<Secrets.ConnectionStrings>(Configuration.GetSection("ConnectionStrings"));
      services.Configure<Secrets.Login>(Configuration.GetSection("ConnectionStrings"));
      // Config data before config cookies so logged users can be checked on SqlServer
      services.AddSingleton<MyIdentity>();

      //  add cors
      Bootstrap.ConfigCors(services, Configuration, HostingEnvironment.IsDevelopment());

      //  DI config
      Bootstrap.DataProtection(services, Configuration);
      Bootstrap.ConsentCookie(services, Configuration, HostingEnvironment.IsDevelopment());
      Bootstrap.CookiesAuth(services, Configuration, HostingEnvironment.IsDevelopment());

      Console.WriteLine(RuntimeInformation.OSDescription);
      
      services.AddNodeServices(options =>
        {
          if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
          {
            options.ProjectPath = Path.GetFullPath("/app");
          }
        }
      );

      services.AddRazorPages();
    }

    public void Configure(IApplicationBuilder app, IHostEnvironment env)
    {
      Bootstrap.Headers(app);

      // var configuration = app.ApplicationServices.GetService<Microsoft.ApplicationInsights.Extensibility.TelemetryConfiguration>();
      var cachePeriod = env.IsDevelopment() ? "600" : "31557600";

      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
        // configuration.DisableTelemetry = true;
        // configuration.InstrumentationKey = "";
      }
      else
      {
        app.UseExceptionHandler("/Error");
        app.UseHsts();
      }

      app.UseHttpsRedirection();
      app.UseCookiePolicy();

      app.UseStaticFiles(new StaticFileOptions
      {
        OnPrepareResponse = ctx =>
        {
          ctx.Context.Response.Headers.Append("Cache-Control", $"public, max-age={cachePeriod}");
        }
      });

      app.UseRouting();

      app.Use((context, next) =>
      {
        context.Response.Headers["Author"] = "Ricardo Gaefke";
        context.Response.Headers["Author_email"] = "ricardogaefke@gmail.com";
        context.Response.Headers["Author_URL"] = "www.ricardogaefke.com";
        return next.Invoke();
      });

      app.UseAuthorization();
      app.UseAuthorization();

      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllerRoute(
          name: "default",
          pattern: "{controller=Home}/{action=Index}/{id?}"
        );
        endpoints.MapFallbackToController("Index", "Home");
      });
    }
  }
}
