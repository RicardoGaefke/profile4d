using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Profile4d.Domain;

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
  }
}