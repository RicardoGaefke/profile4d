using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json.Serialization;
using Profile4d.DI;
using Profile4d.Data;
using Profile4d.Storage;
using Profile4d.Domain;

namespace Profile4d.Web.Api
{
  public class Startup
  {
    public Startup(IConfiguration configuration, IHostEnvironment hostEnvironment)
    {
        Configuration = configuration;
        HostEnvironment = hostEnvironment;
    }

    // readonly string RicardoGaefkeCors = "_ricardoGaefkeCors";
    public IConfiguration Configuration { get; }
    public IHostEnvironment HostEnvironment { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      // Add your AppInsights ID here to make it globally available //
      // services.AddApplicationInsightsTelemetry("9e5cc6db-d8d8-49c5-aa18-d60b4d06196b");

      // Config data before config cookies so logged users can be checked on SqlServer
      services.Configure<Secrets.ConnectionStrings>(Configuration.GetSection("ConnectionStrings"));
      //  data
      services.AddSingleton<MyIdentity>();
      services.AddSingleton<StaticContent>();
      services.AddSingleton<Images>();
      services.AddSingleton<Questions>();
      services.AddSingleton<ProfileName>();
      services.AddSingleton<FeaturesDominant>();
      services.AddSingleton<PersonalityForces>();
      services.AddSingleton<YourMotivation>();
      services.AddSingleton<FocusAttention>();
      services.AddSingleton<LeaderDifferent>();
      services.AddSingleton<ValuesDom>();
      services.AddSingleton<EmotionalCompetent>();
      services.AddSingleton<ComunicateMode>();
      services.AddSingleton<InteractMode>();
      services.AddSingleton<ProfileNames>();
      services.AddSingleton<SaboteurSynteshis>();
      services.AddSingleton<LimitedMatrix>();
      services.AddSingleton<DifficultComunicate>();
      services.AddSingleton<RelationshipDifficult>();
      services.AddSingleton<FourLimited>();
      services.AddSingleton<LimitedAttitude>();
      services.AddSingleton<BehavioralAddiction>();
      services.AddSingleton<EmotionalAddiction>();
      services.AddSingleton<MentalAddiction>();
      services.AddSingleton<DefenseMecanism>();
      services.AddSingleton<NeuroticCompulsion>();
      services.AddSingleton<CompetentMode>();
      services.AddSingleton<SaboteurMode>();
      //  storage
      services.AddSingleton<Blob>();

      // add cors
      Bootstrap.ConfigCors(services, Configuration, HostEnvironment.IsDevelopment());

      //  DI config
      Bootstrap.DataProtection(services, Configuration);
      Bootstrap.ConsentCookie(services, Configuration, HostEnvironment.IsDevelopment());
      Bootstrap.CookiesAuth(services, Configuration, HostEnvironment.IsDevelopment());

      services
        .AddControllers()
        .AddNewtonsoftJson(options => {
          options.SerializerSettings.NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore;
          options.SerializerSettings.DefaultValueHandling = Newtonsoft.Json.DefaultValueHandling.Ignore;
          options.SerializerSettings.ContractResolver = new DefaultContractResolver();
        })
      ;

      services.AddSwaggerDocument(options => {
        options.Title = "API for Profile4d";
        options.Version = "1.14";
      });
    }

      // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostEnvironment env)
    {
      if (env.IsDevelopment())
      {
          app.UseDeveloperExceptionPage();
      }

      app.UseCookiePolicy();

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
        endpoints.MapControllers();
      });
    }
  }
}
