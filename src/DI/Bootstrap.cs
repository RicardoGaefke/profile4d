using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Profile4d.Domain;
using Profile4d.Data;

namespace Profile4d.DI
{
  public class Bootstrap
  {
    public static void DataProtection(IServiceCollection Services, IConfiguration Configuration)
    {
      Secrets.Login MyLogin = new Secrets.Login();
      Configuration.GetSection("ConnectionStrings").Bind(MyLogin);

      Services
        .AddDataProtection()
        .SetApplicationName("Profile4d")
        .PersistKeysToAzureBlobStorage(new Uri(MyLogin.Blob))
        .ProtectKeysWithAzureKeyVault(
          MyLogin.KeyVault,
          MyLogin.ClientID,
          MyLogin.ClientSecret
        )
      ;
    }

    public static void ConfigData(IServiceCollection Services, IConfiguration Configuration)
    {
      Services.AddSingleton<MyIdentity>();
    }

    public static void ConsentCookie(IServiceCollection Services, IConfiguration Configuration, bool IsDev)
    {
      Services.Configure<CookiePolicyOptions>(options =>
      {
        options.CheckConsentNeeded = context => true;
        if (IsDev)
        {
          options.ConsentCookie.Domain = "localhost";
        }
        else
        {
          options.ConsentCookie.Domain = $".{Configuration.GetValue<string>("domain")}";
        }
      });
    }

    public static void ConfigCors(IServiceCollection Services, IConfiguration Configuration, bool IsDev)
    {
      Services.AddCors(options =>
        {
          options.AddDefaultPolicy(builder =>
          {
            if(IsDev)
            {
              builder
                .WithOrigins(
                  "https://localhost:5050",
                  "https://localhost:5055",
                  "https://localhost:5060",
                  "https://localhost:5065"
                )
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials()
              ;
            }
            else
            {
              builder
                .WithOrigins(
                  $"https://*.{Configuration.GetValue<string>("domain")}"
                ).SetIsOriginAllowedToAllowWildcardSubdomains()
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials()
              ;
            }
          });
        });
    }

    public static void Compression(IServiceCollection Services)
    {
      Services.AddResponseCompression(options =>
      {
        options.MimeTypes = new[]
        {
              // Default
              "text/plain",
              // "image/png",
              "image/jpg",
              "image/png",
              "image/jpeg",
              "image/jp2",
              "text/css",
              "application/javascript",
              "text/html",
              "application/xml",
              "text/xml",
              "application/json",
              "text/json",
              "font",
              "font/woff2",
              "font/woff",
              "image/x-icon",
              // Custom
              "image/svg+xml",
              "script"
          };
        options.EnableForHttps = true;
      });
    }

    public static void CookiesAuth(IServiceCollection services, IConfiguration Configuration, bool IsDev)
    {
      services
        .AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
        .AddCookie(options =>
        {
          options.Cookie.Name = "profile4d";
          options.Cookie.IsEssential = true;
          options.Cookie.HttpOnly = true;
          options.Cookie.SameSite = SameSiteMode.None;

          if (IsDev)
          {
            options.Cookie.Domain = "localhost";
            options.Events = new CookieAuthenticationEvents()
            {
              OnRedirectToLogin = (context) =>
              {
                context.HttpContext.Response.Redirect("https://localhost:5055?ReturnUrl=https://" + context.Request.Host.Value);
                // context.HttpContext.Response.StatusCode = 401;
                return Task.CompletedTask;
              },
              OnSignedIn = (context) =>
              {
                // context.HttpContext.Response.Redirect("https://localhost:5060/");
                return Task.CompletedTask;
              }
            };
          }
          else
          {
            options.Cookie.Domain = $".{Configuration.GetValue<string>("domain")}";
            options.Events = new CookieAuthenticationEvents()
            {
              OnRedirectToLogin = (context) =>
              {
                context.HttpContext.Response.Redirect($"https://identity.{Configuration.GetValue<string>("domain")}?ReturnUrl=https://" + context.Request.Host.Value);
                // context.HttpContext.Response.StatusCode = 401;
                return Task.CompletedTask;
              },
              OnSignedIn = (context) =>
              {
                // context.HttpContext.Response.Redirect("https://ci.ricardogaefke.com");
                return Task.CompletedTask;
              }
            };
          }
        })
      ;

    services.AddScoped<CustomCookieAuthenticationEvents>();

    services.Configure<CookiePolicyOptions>(options =>
    {
      // This lambda determines whether user consent for non-essential cookies is needed for a given request.
      options.CheckConsentNeeded = context => true;

      if (IsDev)
      {
        options.ConsentCookie.Domain = "localhost";
      }
      else
      {
        options.ConsentCookie.Domain = $".{Configuration.GetValue<string>("domain")}";
      }
    });
    }
  }
}