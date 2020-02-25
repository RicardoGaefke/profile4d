using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Profile4d.Data;
using Profile4d.Domain;

namespace Profile4d.Web.Api.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class IdentityController : ControllerBase
    {
    private readonly ILogger<IdentityController> _logger;
    private readonly MyIdentity _myIdentity;
    private readonly IHttpContextAccessor _httpContextAccessor;

    public IdentityController(ILogger<IdentityController> logger, MyIdentity MyIdentity, IHttpContextAccessor httpContextAccessor)
    {
      _logger = logger;
      _myIdentity = MyIdentity;
      _httpContextAccessor = httpContextAccessor;
    }

    [HttpPost("SignIn")]
    public async Task<ActionResult<User>> SignIn(User user)
    {
      User _return = new User();

      try
      {
        User _myUser = _myIdentity.SignIn(user.Email, user.Password);

        if (!_myUser.Success)
        {
          _return.Success = false;
          _return.Message = "failed";

          return _return;
        }

        var claims = new List<Claim>
        {
          new Claim(ClaimTypes.Name, _myUser.Name),
          new Claim(ClaimTypes.Email, _myUser.Email),
          new Claim("LastChanged", _myUser.LastChanged),
          new Claim("UserID", _myUser.Id.ToString())
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

        _return.Name = _myUser.Name;
        _return.Email = _myUser.Email;
        _return.IsAuthenticated = HttpContext.User.Identity.IsAuthenticated;
        _return.Success = true;
        _return.Message = "SignIn ok";

        return _return;
      }
      catch (System.Exception ex)
      {
        _return.Success = false;
        _return.Code = "Error";
        _return.Message = ex.Message;
        _return.Email = "Error";
        _return.Name = ex.Message;
        _return.Password = ex.StackTrace;

        return _return;
      }
    }

    [HttpGet("IsAuthenticated")]
    public ActionResult<Boolean> IsAutenticated()
    {
      return HttpContext.User.Identity.IsAuthenticated;
    }

    [HttpGet("SignOut")]
    public async Task<ActionResult<BasicReturn>> SignOut()
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        int _userID = Convert.ToInt32(User.FindFirst(claim => claim.Type == "UserID")?.Value);
        await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
        _myIdentity.SignOut(_userID);

        _return.Success = true;

        return _return;
      }
      catch (System.Exception ex)
      {
        _return.Success = false;
        _return.Message = ex.Message;

        return _return;
      }
    }

    [HttpPost("ChangeName")]
    public ActionResult<BasicReturn> ChangeName(User user)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        int _userID = Convert.ToInt32(User.FindFirst(claim => claim.Type == "UserID")?.Value);
        string _url = _httpContextAccessor.HttpContext.Request.Host + _httpContextAccessor.HttpContext.Request.Path;
        _myIdentity.ChangeName(_userID, user.Name, user.Password, _url);

        _return.Success = true;
      }
      catch (SqlException ex)
      {
        _return.Success = false;
        _return.Message = ex.Message;
        _return.Code = ex.Number.ToString();

        return _return;
      }
      catch (System.Exception ex)
      {
        _return.Success = false;
        _return.Message = ex.Message;

        return _return;
      }

      return _return;
    }

    [HttpPost("ChangeEmail")]
    public ActionResult<BasicReturn> ChangeEmail(User user)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        int _userID = Convert.ToInt32(User.FindFirst(claim => claim.Type == "UserID")?.Value);
        string _url = _httpContextAccessor.HttpContext.Request.Host + _httpContextAccessor.HttpContext.Request.Path;
        _myIdentity.ChangeEmail(_userID, user.Email, user.Password, _url);

        _return.Success = true;
      }
      catch (SqlException ex)
      {
        _return.Success = false;
        _return.Message = ex.Message;
        _return.Code = ex.Number.ToString();

        return _return;
      }
      catch (Exception ex)
      {
        _return.Success = false;
        _return.Message = ex.Message;

        return _return;
      }

      return _return;
    }

    [HttpPost("ChangePassword")]
    public ActionResult<BasicReturn> ChangePassword(User user)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        int _userID = Convert.ToInt32(User.FindFirst(claim => claim.Type == "UserID")?.Value);
        string _url = _httpContextAccessor.HttpContext.Request.Host + _httpContextAccessor.HttpContext.Request.Path;
        _myIdentity.ChangePassword(_userID, user.NewPassword, user.Password, _url);

        _return.Success = true;
      }
      catch (SqlException ex)
      {
        _return.Success = false;
        _return.Message = ex.Message;
        _return.Code = ex.Number.ToString();

        return _return;
      }
      catch (Exception ex)
      {
        _return.Success = false;
        _return.Message = ex.Message;

        return _return;
      }

      return _return;
    }
  }
}