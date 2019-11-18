using System;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.DataProtection;
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
  }
}