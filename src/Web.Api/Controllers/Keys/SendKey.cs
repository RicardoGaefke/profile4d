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
using Profile4d.Storage;

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
    private readonly IQueue _queue;

    public SendKeyController(
      ILogger<IdentityController> logger,
      IHttpContextAccessor httpContextAccessor,
      ISendKey keys,
      IEmail email,
      IConfiguration configuration,
      IQueue queue
    )
    {
      _logger = logger;
      _sendKey = keys;
      _email = email;
      _httpContextAccessor = httpContextAccessor;
      _configuration = configuration;
      _queue = queue;
      
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
        int messageId = _email.CreateEmail("New User", data.Email, Convert.ToInt32(_user), content);
        _queue.SaveMessage("email", messageId.ToString());
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
        int messageId = _email.CreateEmail("New User", data.Email, Convert.ToInt32(_user), content);
        _queue.SaveMessage("email", messageId.ToString());
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