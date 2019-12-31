using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Profile4d.DI;
// using Profile4d.Email;

namespace Profile4d.Web.Api
{
  public class Startup
  {
    public Startup(IConfiguration configuration, Microsoft.Extensions.Hosting.IHostEnvironment hostEnvironment)
    {
        Configuration = configuration;
        HostEnvironment = hostEnvironment;
    }

    // readonly string RicardoGaefkeCors = "_ricardoGaefkeCors";
    public IConfiguration Configuration { get; }
    public Microsoft.Extensions.Hosting.IHostEnvironment HostEnvironment { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      // Add your AppInsights ID here to make it globally available //
      // services.AddApplicationInsightsTelemetry("9e5cc6db-d8d8-49c5-aa18-d60b4d06196b");

      //  project's DI
      // services.AddSingleton<MyEmail>();

      // add cors
      Bootstrap.ConfigCors(services, Configuration, HostEnvironment.IsDevelopment());

      //  DI config
      Bootstrap.DataProtection(services, Configuration);
      Bootstrap.ConsentCookie(services, Configuration, HostEnvironment.IsDevelopment());
      Bootstrap.CookiesAuth(services, Configuration, HostEnvironment.IsDevelopment());
      
      services.AddControllers();

      services.AddSwaggerDocument();
    }

      // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostEnvironment env)
    {
      if (env.IsDevelopment())
      {
          app.UseDeveloperExceptionPage();
      }

      app.UseHttpsRedirection();

      app.UseRouting();

      app.UseCors();
      app.UseStaticFiles();

      app.UseOpenApi();
      app.UseSwaggerUi3();

      app.UseAuthentication();
      app.UseAuthorization();

      app.UseEndpoints(endpoints =>
      {
        // endpoints.MapControllers().RequireCors(RicardoGaefkeCors);
        endpoints.MapControllers();
      });
    }
  }
}
