using Microsoft.AspNetCore.DataProtection;
using Microsoft.Extensions.DependencyInjection;
using Profile4d.Domain;

namespace Profile4d.DI
{
  public static void DataProtection(IServiceCollection Services, IConfiguration Configuration)
  {
    Secrets.Login MyLogin = new Secrets.Login();
    Configuration.GetSection("ConnectionStrings").bind(MyLogin);

    Services
      .AddDataProtection()
      .SetApplicationName("Profile4d")
      .PersistKeysToAzureBlobStorage(new Uri(MyLogin.Blob))
      .ProtectKeysWithAzureKeyVault(
        myLogin.KeyVault,
        myLogin.ClientID,
        myLogin.ClientSecret
      )
    ;
  }
}