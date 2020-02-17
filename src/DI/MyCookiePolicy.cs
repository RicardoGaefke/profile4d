using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Profile4d.Data;

public class CustomCookieAuthenticationEvents : CookieAuthenticationEvents
{
  private readonly MyIdentity _myIdentity;

  public CustomCookieAuthenticationEvents(MyIdentity MyIdentity)
  {
    _myIdentity = MyIdentity;
  }

  public override Task SignedIn(CookieSignedInContext context)
  {

    return Task.CompletedTask;
  }
  
  public override Task RedirectToLogin(RedirectContext<CookieAuthenticationOptions> context)
  {
    string _host = context.Request.Host.ToString();
    string _identity = "identity.profile4d.com";

    if (_host.Contains("localhost"))
    {
      _identity = "localhost:5055";
    }

    if (_host.Contains("staging"))
    {
      _identity = "identity.staging.profile4d.com";
    }

    string _url = context.Request.Host.Value;

    if (context.Request.Path != "/")
    {
      _url += context.Request.Path;
    }

    context.HttpContext.Response.Redirect($"https://{_identity}?ReturnUrl=https://" + _url);

    return Task.CompletedTask;
  }

  public override async Task ValidatePrincipal(CookieValidatePrincipalContext context)
  {
    var userPrincipal = context.Principal;

    // Look for the LastChanged claim.
    var lastChanged = (from c in userPrincipal.Claims
                       where c.Type == "LastChanged"
                       select c.Value).FirstOrDefault()
    ;

    // Look for the userID claim.
    var userID = (from c in userPrincipal.Claims
                       where c.Type == "UserID"
                       select c.Value).FirstOrDefault()
    ;

    string _url = context.Request.Host + context.Request.Path;

    if (string.IsNullOrEmpty(lastChanged) || !_myIdentity.ValidateLastChanged(userID, lastChanged, _url).Success)
    {
      context.RejectPrincipal();

      await context.HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
    }
  }
}
