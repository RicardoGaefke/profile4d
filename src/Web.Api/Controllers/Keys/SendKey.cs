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
using System.Threading.Tasks;
using Profile4d.Data;
using Profile4d.Domain;
using Profile4d.Storage;

namespace Profile4d.Web.Api.Controllers
{
  [ApiController]
  [Route("[controller]")]
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
    public async Task<ActionResult<BasicReturn>> Transfer(Key data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        Key key = new Key(data.Email, Convert.ToInt32(_user), Convert.ToInt32(data.Keys), DateTime.Now);
        string guid = _sendKey.TransferKeys(key);
        EmailMessageModels.Content content = EmailMessageModels.TransferKeys(guid, _configuration.GetValue<string>("domain"), Convert.ToInt32(data.Keys));
        int messageId = _email.CreateEmail("New User", data.Email, Convert.ToInt32(_user), content);
        // int chave = await _sendKey.TransfereChaveAsync(key);
        // _queue.SaveMessage("email-chave", chave.ToString());
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

    [HttpGet("Report/{guid}")]
    public ActionResult<Report> Report(string guid)
    {
      Report _return = new Report();

      try
      {
        _return = _report.GetReport(guid);
        _return.Success = true;
        _return.Code = "success";

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

    [HttpGet("ReportSete/{guid}")]
    public ActionResult<Report> ReportSete(string guid)
    {
      Report _return = new Report();

      try
      {
        _return = _report.GetReportSete(guid);
        _return.Success = true;
        _return.Code = "success";

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

    [Authorize]
    [HttpGet("CancelarChave/{chave}")]
    public ActionResult<BasicReturn> CancelarChave(string chave)
    {
      try
      {
        _sendKey.CancelarChave(chave, Convert.ToInt32(_user));
        return new BasicReturn(true);
      }
      catch (System.Exception ex)
      {
        return new BasicReturn(false, ex.Message, ex.StackTrace);
      }
    }

    [Authorize]
    [HttpPost("SendConsultor")]
    public async Task<ActionResult<BasicReturn>> SendConsultor(Key data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        Key key = new Key(data.Email, Convert.ToInt32(_user), Convert.ToInt32(_user), data.BlockResult, data.Type);
        // string guid = _sendKey.SendKeyConsultor(key);
        // EmailMessageModels.Content content = EmailMessageModels.SendKey(guid, _configuration.GetValue<string>("domain"));
        // int messageId = _email.CreateEmail("New User", data.Email, Convert.ToInt32(_user), content);
        // _queue.SaveMessage("email", messageId.ToString());
        int chave = await _sendKey.TransfereChaveAsync(key);
        _queue.SaveMessage("email-chave", chave.ToString());
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
    [HttpGet("GetActivesByUserGuid/{userGuid}")]
    public ActionResult<BasicReturn<List<Key>>> GetActivesByUserGuid(string userGuid)
    {
      try
      {
        User user = new User(0, userGuid);

        return new BasicReturn<List<Key>>(true, _sendKey.ActiveKeysByUserGuid(user));
      }
      catch (SqlException ex)
      {
        return new BasicReturn<List<Key>>(false, ex.Message, "SQL");
      }
      catch (Exception ex)
      {
        return new BasicReturn<List<Key>>(false, ex.Message, "Erro");
      }
    }

    [Authorize]
    [HttpGet("GetActivesByConsultantGuid/{userGuid}")]
    public ActionResult<BasicReturn<List<Key>>> GetActivesByConsultantGuid(string userGuid)
    {
      try
      {
        User user = new User(0, userGuid);

        return new BasicReturn<List<Key>>(true, _sendKey.ActiveKeysByConsultantGuid(user));
      }
      catch (SqlException ex)
      {
        return new BasicReturn<List<Key>>(false, ex.Message, "SQL");
      }
      catch (Exception ex)
      {
        return new BasicReturn<List<Key>>(false, ex.Message, "Erro");
      }
    }

    [Authorize]
    [HttpGet("ChavesNaoRecebidasPorConsultor")]
    public ActionResult<BasicReturn<List<Key>>> ChavesNaoRecebidasPorConsultor()
    {
      try
      {
        User user = new User(Convert.ToInt32(_user));

        return new BasicReturn<List<Key>>(true, _sendKey.ChavesNaoRecebidasPorConsultor(user));
      }
      catch (SqlException ex)
      {
        return new BasicReturn<List<Key>>(false, ex.Message, $"SQL: {ex.StackTrace}");
      }
      catch (Exception ex)
      {
        return new BasicReturn<List<Key>>(false, ex.Message, "Erro");
      }
    }

    [Authorize]
    [HttpPost("AlterarTipoDeLicenca")]
    public ActionResult<BasicReturn> AlterarTipoDeLicenca(Key data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        Key key = new Key(data.Guid, data.Type);
        _sendKey.AlteraTipoDeChave(key);
        
        return new BasicReturn(true);
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