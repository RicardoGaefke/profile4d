using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Profile4d.Data;
using Profile4d.Domain;

namespace Profile4d.Web.Api.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class IdentityController : ControllerBase
    {
    private readonly ILogger<WeatherForecastController> _logger;
    private readonly MyIdentity _myIdentity;

    public IdentityController(ILogger<WeatherForecastController> logger, MyIdentity myIdentity)
    {
      _logger = logger;
      _myIdentity = myIdentity;
    }

    [HttpGet("SignIn")]
    public async Task<ActionResult<bool>> SingIn(User user)
    {
      try
      {
        User _myUser = _myIdentity.Login(user.Email, user.Password);

        var claims = new List<Claim>
        {
          new Claim(ClaimTypes.Name, _myUser.Name),
          new Claim(ClaimTypes.Email, _myUser.Email),
          new Claim("LastChanged", _myUser.LastChanged),
          new Claim("userID", _myUser.Id.ToString())
        };

        for (int i = 0; i < _myUser.Roles.Count; i++)
        {
          claims.Add(new Claim(ClaimTypes.Role, _myUser.Roles[i]));
        }

        var claimsIdentity = new ClaimsIdentity(
          claims,
          CookieAuthenticationDefaults.AuthenticationScheme
        );

        var principal = new ClaimsPrincipal(claimsIdentity);

        var authProperties = new AuthenticationProperties
        {
          AllowRefresh = true,
          // Refreshing the authentication session should be allowed.

          //ExpiresUtc = DateTimeOffset.UtcNow.AddMinutes(10),
          // The time at which the authentication ticket expires. A 
          // value set here overrides the ExpireTimeSpan option of 
          // CookieAuthenticationOptions set with AddCookie.

          IsPersistent = user.KeepConnected,
          // Whether the authentication session is persisted across 
          // multiple requests. When used with cookies, controls
          // whether the cookie's lifetime is absolute (matching the
          // lifetime of the authentication ticket) or session-based.

          //IssuedUtc = <DateTimeOffset>,
          // The time at which the authentication ticket was issued.

          //RedirectUri = <string>
          // The full path or absolute URI to be used as an http 
          // redirect response value.
        };

        await HttpContext.SignInAsync(
          CookieAuthenticationDefaults.AuthenticationScheme,
          principal,
          authProperties
        );

        return true;
      }
      catch (System.Exception)
      {
        return false;
      }
    }
  }
}