using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Data.SqlClient;
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
    private readonly IDataReport _report;

    public SendKeyController(
      ILogger<IdentityController> logger,
      IHttpContextAccessor httpContextAccessor,
      ISendKey keys,
      IEmail email,
      IConfiguration configuration,
      IQueue queue,
      IDataReport report
    )
    {
      _logger = logger;
      _sendKey = keys;
      _email = email;
      _httpContextAccessor = httpContextAccessor;
      _configuration = configuration;
      _queue = queue;
      _report = report;
      
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
        Key key = new Key(data.Email, Convert.ToInt32(_user), Convert.ToInt32(_user), data.BlockResult);
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

    [Authorize]
    [HttpGet("GetActives")]
    public ActionResult<List<Key>> GetActives()
    {
      return _sendKey.ActiveKeys(Convert.ToInt32(_user));
    }

    [Authorize]
    [HttpGet("Intro")]
    public ActionResult<Intro> Intro()
    {
      Intro _return = new Intro();
      
      try
      {
        _return = _sendKey.Intro();
        _return.Success = true;
        
        return _return;
      }
      catch (SqlException ex)
      {
        _return.Success = false;
        _return.Message = ex.Message;
        _return.Details = ex.StackTrace;
        _return.Code = "SQL";

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

    [Authorize]
    [HttpGet("Question/{guid}")]
    public ActionResult<Question> Question(string guid)
    {
      Question _return = new Question();

      try
      {
        _return = _sendKey.Question(guid);
        _return.Success = true;

        return _return;
      }
      catch (SqlException ex)
      {
        _return.Success = false;
        _return.Message = ex.Message;
        _return.Details = ex.StackTrace;
        _return.Code = ex.ErrorCode.ToString();

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

    [Authorize]
    [HttpPost("Answer")]
    public ActionResult<BasicReturn> Answer(Question data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        _sendKey.Answer(data);
        _return.Success = true;

        return _return;
      }
      catch (SqlException ex)
      {
        _return.Success = false;
        _return.Message = ex.Message;
        _return.Details = ex.StackTrace;
        _return.Code = ex.ErrorCode.ToString();

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

    [Authorize]
    [HttpGet("Report/{guid}")]
    public ActionResult<Report> Report(string guid)
    {
      Report _return = new Report();

      try
      {
        _return = _report.GetReport(guid);
        _return.Success = true;

        return _return;
      }
      catch (SqlException ex)
      {
        _return.Success = false;
        _return.Message = ex.Message;
        _return.Details = ex.StackTrace;
        _return.Code = ex.ErrorCode.ToString();

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

    [Authorize]
    [HttpGet("GetLicensesByConsultant")]
    public ActionResult<KeysPreview> GetLicensesByConsultant()
    {
      try
      {
        KeysPreview preview = _sendKey.GetKeysByConsuntant(Convert.ToInt32(_user));
        preview.Success = true;

        return preview;
      }
      catch (SqlException ex)
      {
        return new KeysPreview()
        {
          Code = "SQL",
          Success = false,
          Message = ex.Message
        };
      }
      catch (System.Exception ex)
      {
        return new KeysPreview()
        {
          Code = "SQL",
          Success = false,
          Message = ex.Message
        };
      }
    }

    [Authorize]
    [HttpGet("DesbloquearChave/{chave}")]
    public ActionResult<BasicReturn> DesbloquearChave(string chave)
    {
      try
      {
        _sendKey.DesbloquearChave(chave);
        return new BasicReturn(true);
      }
      catch (System.Exception ex)
      {
        return new BasicReturn(false, ex.Message, ex.StackTrace);
      }
    }
  }
}