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

    if (string.IsNullOrEmpty(lastChanged) || !_myIdentity.ValidateLastChanged(userID, lastChanged, context.Request.Host.ToString()).Success)
    {
      context.RejectPrincipal();

      await context.HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
    }
  }
}
