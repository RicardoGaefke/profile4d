using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System.Linq;
using System.Security.Claims;
using Profile4d.Data;
using Profile4d.Domain;

namespace Profile4d.Web.Api.Controllers
{
  [ApiController]
  [Route("[controller]")]
  [Authorize]
  public class SendKeyController : ControllerBase
  {
    private readonly ILogger<IdentityController> _logger;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private string _user;
    private readonly ISendKey _sendKey;
    private readonly IEmail _email;
    private readonly IConfiguration _configuration;

    public SendKeyController(
      ILogger<IdentityController> logger,
      IHttpContextAccessor httpContextAccessor,
      ISendKey Keys,
      IEmail Email,
      IConfiguration Configuration
    )
    {
      _logger = logger;
      _sendKey = Keys;
      _email = Email;
      _httpContextAccessor = httpContextAccessor;
      _configuration = Configuration;
      
      ClaimsPrincipal currentUser = this.User;
      _user = (from c in _httpContextAccessor.HttpContext.User.Claims
               where c.Type == "UserID"
               select c.Value).FirstOrDefault()
      ;
    }

    [Authorize(Roles = "Admin")]
    [HttpPost("Send")]
    public ActionResult<BasicReturn> Send(Key data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        Key key = new Key(data.Email, Convert.ToInt32(_user), Convert.ToInt32(_user));
        string guid = _sendKey.SendKey(key);
        EmailMessageModels.Content content = EmailMessageModels.SendKey(guid, _configuration.GetValue<string>("domain"));
        _email.CreateEmail("New User", data.Email, Convert.ToInt32(_user), content);
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

    [Authorize(Roles = "Admin,Consultant")]
    [HttpPost("Transfer")]
    public ActionResult<BasicReturn> Transfer(Key data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        Key key = new Key(data.Email, Convert.ToInt32(_user), Convert.ToInt32(data.Keys), DateTime.Now);
        string guid = _sendKey.TransferKeys(key);
        EmailMessageModels.Content content = EmailMessageModels.TransferKeys(guid, _configuration.GetValue<string>("domain"), Convert.ToInt32(data.Keys));
        _email.CreateEmail("New User", data.Email, Convert.ToInt32(_user), content);
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
  }
}