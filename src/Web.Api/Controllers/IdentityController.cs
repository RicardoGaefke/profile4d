using System;
using System.Linq;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Profile4d.Data;
using Profile4d.Domain;
using Profile4d.Storage;

namespace Profile4d.Web.Api.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class IdentityController : ControllerBase
    {
    private readonly ILogger<IdentityController> _logger;
    private readonly IMyIdentity _myIdentity;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly IEmail _email;
    private readonly User _user;
    private readonly IQueue _queue;

    public IdentityController(
      ILogger<IdentityController> logger,
      IMyIdentity myIdentity,
      IHttpContextAccessor httpContextAccessor,
      IEmail emailService,
      IQueue queue
    )
    {
      _logger = logger;
      _myIdentity = myIdentity;
      _httpContextAccessor = httpContextAccessor;
      _email = emailService;
      _queue = queue;

      if (_httpContextAccessor.HttpContext.User.Identity.IsAuthenticated)
      {
        string id = (from c in _httpContextAccessor.HttpContext.User.Claims
                     where c.Type == "UserID"
                     select c.Value).FirstOrDefault()
      ;

        string name = (from c in _httpContextAccessor.HttpContext.User.Claims
                       where c.Type == ClaimTypes.Name
                       select c.Value).FirstOrDefault()
        ;

        string email = (from c in _httpContextAccessor.HttpContext.User.Claims
                        where c.Type == ClaimTypes.Email
                        select c.Value).FirstOrDefault()
        ;

        _user = new User(id, name, email);
      }
      else
      {
        _user = new User();
      }
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
          IsPersistent = user.KeepConnected,
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
      catch (SqlException ex)
      {
        _return.Success = false;
        _return.Code = "SQL";
        _return.Message = ex.Message;
        _return.Email = "Error";
        _return.Name = ex.Message;
        _return.Password = ex.StackTrace;

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

    [HttpGet("IsAdmin")]
    public ActionResult<Boolean> IsAdmin()
    {
      return HttpContext.User.IsInRole("Admin");
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
        EmailMessageModels.Content content = EmailMessageModels.ChangeName(_user.Name);
        int messageId = _email.CreateEmail(_user.Name, _user.Email, _user.Id, content);
        _queue.SaveMessage("email", messageId.ToString());
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
        EmailMessageModels.Content content = EmailMessageModels.ChangeEmail(_user.Name);
        int messageId = _email.CreateEmail(_user.Name, user.Email, _user.Id, content);
        _queue.SaveMessage("email", messageId.ToString());
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
        EmailMessageModels.Content content = EmailMessageModels.ChangePassword(_user.Name);
        int messageId = _email.CreateEmail(_user.Name, _user.Email, _user.Id, content);
        _queue.SaveMessage("email", messageId.ToString());
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

    [HttpPost("ForgotPassword")]
    public ActionResult<BasicReturn> ForgotPassword(User user)
    {
      BasicReturn _return = new BasicReturn();

      User data = new User(user.Email);

      try
      {
        User myUser = _myIdentity.ForgotPassword(data.Email);
        EmailMessageModels.Content content = EmailMessageModels.ForgotPassword(myUser);
        int messageId = _email.CreateEmail(myUser.Name, data.Email, myUser.Id, content);
        _queue.SaveMessage("email", messageId.ToString());
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

    [HttpPost("CreateUser")]
    public ActionResult<BasicReturn> CreateUser(User user)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        int id = _myIdentity.CreateUser(user);
        EmailMessageModels.Content content = EmailMessageModels.CreateUser(user.Name);
        int messageId = _email.CreateEmail(user.Name, user.Email, id, content);
        _queue.SaveMessage("email", messageId.ToString());
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

    [Authorize(Roles = "Admin")]
    [HttpGet("UsersForAdminView/{page}/{pageSize}")]
    public ActionResult<BasicReturn<Pagination<IEnumerable<User>>>> UsersForAdminView(int page = 1, int pageSize = 50)
    {
      try
      {
        Pagination pagination = new Pagination(page, pageSize);
        return new BasicReturn<Pagination<IEnumerable<User>>>(true, _myIdentity.GetUsersForAdminView(pagination));
      }
      catch (SqlException ex)
      {
        return new BasicReturn<Pagination<IEnumerable<User>>>(false, ex.Message, "SQL");
      }
      catch (System.Exception ex)
      {
        return new BasicReturn<Pagination<IEnumerable<User>>>(false, ex.Message, ex.StackTrace);
      }
    }
  }
}