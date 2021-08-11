using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
  public class YourMotivationsController : ControllerBase
  {
    private readonly ILogger<YourMotivationsController> _logger;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly YourMotivation _questions;
    private string _user;

    public YourMotivationsController(
      ILogger<YourMotivationsController> logger,
      IHttpContextAccessor httpContextAccessor,
      YourMotivation MyYourMotivation
    )
    {
      _logger = logger;
      _questions = MyYourMotivation;

      _httpContextAccessor = httpContextAccessor;
      ClaimsPrincipal currentUser = this.User;

      _user = (from c in _httpContextAccessor.HttpContext.User.Claims
               where c.Type == "UserID"
               select c.Value).FirstOrDefault()
      ;
    }

    [Authorize(Roles = "Admin")]
    [HttpGet("")]
    public ActionResult<Question.List> List()
    {
      try
      {
        return _questions.List();
      }
      catch (System.Exception ex)
      {
        Question.List _return = new Question.List();
        _return.Success = false;
        _return.Message = ex.Message;
        return _return;
      }
    }

    [Authorize(Roles = "Admin")]
    [HttpPost("ChangeActive")]
    public ActionResult<BasicReturn> ChangeActive(Question data)
    {
      BasicReturn _return = new BasicReturn();

      Question _question = new Question(
        data.Guid,
        _user,
        data.Active
      );

      try
      {
        _return = _questions.ChangeActive(_question);
        return _return;
      }
      catch (System.Exception ex)
      {
        _return.Success = false;
        _return.Message = ex.Message;
        return _return;
      }
    }

    [Authorize(Roles = "Admin")]
    [HttpPost("Add")]
    public ActionResult<BasicReturn> Add(Question data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;
        _return = _questions.Add(data);
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

    [Authorize(Roles = "Admin")]
    [HttpGet("Question/{id}")]
    public ActionResult<Question> Question(string id)
    {
      Question _return = new Question();
      
      try
      {
        _return = _questions.Question(id);
        return _return;
      }
      catch (System.Exception ex)
      {
        _return.Success = false;
        _return.Message = ex.Message;
        return _return;
      }
    }

    [Authorize(Roles = "Admin")]
    [HttpPost("Edit")]
    public ActionResult<BasicReturn> Edit(Question data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;
        _return = _questions.Edit(data);
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