using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SpaServices.Extensions;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Profile4d.DI;
using Profile4d.Domain;
using Profile4d.Email;

namespace Profile4d.Web.Site
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

      //  project's DI
      services.AddSingleton<MyEmail>();

      //  DI config
      Bootstrap.DataProtection(services, Configuration);
      Bootstrap.ConsentCookie(services, Configuration, HostingEnvironment.IsDevelopment());
      
      services.AddNodeServices(options =>
        {
          if (HostingEnvironment.IsDevelopment())
          {
            // options.ProjectPath = Path.Combine(Directory.GetCurrentDirectory(), "site/wwwroot");
            options.ProjectPath = Directory.GetCurrentDirectory();
          }
        }
      );

      services.AddRazorPages();

      Bootstrap.Compression(services);
    }

    public void Configure(IApplicationBuilder app, IHostEnvironment env)
    {
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

      app.UseResponseCompression();
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
