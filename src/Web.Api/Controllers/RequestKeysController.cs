using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
  public class RequestKeysController : ControllerBase
  {
    private readonly ILogger<RequestKeysController> _logger;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly IEmail _dataEmail;
    private string _user;
    private string _name;
    private string _email;
    private readonly IQueue _queue;

    public RequestKeysController(
      ILogger<RequestKeysController> logger,
      IHttpContextAccessor httpContextAccessor,
      IEmail emailService,
      IQueue queue
    )
    {
      _logger = logger;

      _dataEmail = emailService;

      _httpContextAccessor = httpContextAccessor;
      ClaimsPrincipal currentUser = this.User;

      _user = (from c in _httpContextAccessor.HttpContext.User.Claims
               where c.Type == "UserID"
               select c.Value).FirstOrDefault()
      ;

      _name = (from c in _httpContextAccessor.HttpContext.User.Claims
               where c.Type == ClaimTypes.Name
               select c.Value).FirstOrDefault()
      ;

      _email = (from c in _httpContextAccessor.HttpContext.User.Claims
               where c.Type == ClaimTypes.Email
               select c.Value).FirstOrDefault()
      ;

      _queue = queue;
    }

    [Authorize]
    [HttpGet("{phone}")]
    public ActionResult<BasicReturn> PhoneNumber(string phone)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        EmailMessageModels.Content content = EmailMessageModels.RequestKeys(phone, _name, _email);
        int messageId = _dataEmail.CreateEmail("Carlos", "coachcarlosdesouza@gmail.com", Convert.ToInt32(_user), content);
        _queue.SaveMessage("email", messageId.ToString());
        _return.Success = true;
        return _return;
      }
      catch (System.Exception ex)
      {
        _return.Success = false;
        _return.Message = ex.Message;
        _return.Details = ex.StackTrace;

        return _return;
      }
    }
  }
}