using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
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

      services.Configure<ApiBehaviorOptions>(a =>{
        a.InvalidModelStateResponseFactory = context => {
          var problemDetails = new CustomBadRequest(context);

          return new BadRequestObjectResult(problemDetails)
          {
            ContentTypes = { "application/problem+json", "application/problem+xml" }
          };
        };
      });

      //  data
      #region DataServices
      services.AddSingleton<IDataReport, DataReport>();
      services.AddSingleton<ISendKey, Keys>();
      services.AddSingleton<IQueue, Queue>();
      services.AddSingleton<IEmail, Email>();
      services.AddSingleton<IEmailMI4D, EmailMI4D>();
      services.AddSingleton<MyIdentity>();
      services.AddSingleton<StaticContent>();
      services.AddSingleton<IImages, Images>();
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
      services.AddSingleton<NameProfile>();
      services.AddSingleton<LimitedForcesOne>();
      services.AddSingleton<ProfileNameOne>();
      services.AddSingleton<LimitedForcesTwo>();
      services.AddSingleton<SaboteurNameOne>();
      services.AddSingleton<LimitedForcesThree>();
      services.AddSingleton<SaboteurNameTwo>();
      services.AddSingleton<LimitedForcesFour>();
      services.AddSingleton<ConflictsIdentified>();
      services.AddSingleton<TriadHeHo>();
      services.AddSingleton<SpecificsTriad>();
      services.AddSingleton<NewObservation>();
      services.AddSingleton<observationTriad>();
      services.AddSingleton<FluxAnalyze>();
      services.AddSingleton<DomProfile>();
      services.AddSingleton<InternalPartners>();
      services.AddSingleton<InternalPartOne>();
      services.AddSingleton<InternalPartTwo>();
      services.AddSingleton<ArchetypeDiscover>();
      services.AddSingleton<EssentialCharacter>();
      services.AddSingleton<DomProfileOne>();
      services.AddSingleton<BigChallenge>();
      services.AddSingleton<KeyWork>();
      services.AddSingleton<IdealPart>();
      services.AddSingleton<YourMoment>();
      services.AddSingleton<ExistentialPain>();
      services.AddSingleton<CristallyzationProcess>();
      services.AddSingleton<BodyShape>();
      services.AddSingleton<YourDevelopment>();
      services.AddSingleton<BenefitsContact>();
      services.AddSingleton<TwelveForces>();
      services.AddSingleton<DyObservationOne>();
      services.AddSingleton<DyObservationTwo>();
      services.AddSingleton<DyObservationThree>();
      services.AddSingleton<DyObservationFour>();
      services.AddSingleton<DyObservationFive>();
      services.AddSingleton<DyObservationSix>();
      services.AddSingleton<DyObservationSeven>();
      services.AddSingleton<DyObservationEight>();
      services.AddSingleton<DyObservationNine>();
      services.AddSingleton<DyObservationTen>();
      services.AddSingleton<DyObservationEleven>();
      services.AddSingleton<DyObservationTwelve>();
      services.AddSingleton<DyObservationThirteen>();
      services.AddSingleton<DyObservationFourteen>();
      services.AddSingleton<DyObservationFifteen>();
      services.AddSingleton<DyObservationSixteen>();
      services.AddSingleton<DyObservationSeventeen>();
      services.AddSingleton<DyObservationEighteen>();
      services.AddSingleton<DyObservationNineteen>();
      services.AddSingleton<DyObservationTwenty>();
      services.AddSingleton<DyObservationTwentyOne>();
      services.AddSingleton<DyObservationTwentyTwo>();
      services.AddSingleton<DyObservationTwentyThree>();
      services.AddSingleton<DyObservationTwentyFour>();
      services.AddSingleton<DomProfileTwo>();
      services.AddSingleton<PartnerOne>();
      services.AddSingleton<PartnerTwo>();
      services.AddSingleton<IdealPartner>();
      services.AddSingleton<BehavioralResources>();
      #endregion
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
        .AddNewtonsoftJson(options =>
        {
          options.SerializerSettings.NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore;
          options.SerializerSettings.DefaultValueHandling = Newtonsoft.Json.DefaultValueHandling.Ignore;
          options.SerializerSettings.ContractResolver = new DefaultContractResolver();
        })
      ;

      services.AddSwaggerDocument(options =>
      {
        options.Title = "API for Profile4d";
        options.Version = "1.21";
        options.Description = "Made by www.ricardogaefke.com";
      });
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

      Bootstrap.Headers(app);

      app.UseCookiePolicy();

      // app.UseHttpsRedirection();

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
