using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Profile4d.Data;
using Profile4d.Domain;

namespace Profile4d.Web.Api.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class StaticContentController : ControllerBase
  {
    private readonly ILogger<IdentityController> _logger;
    private readonly StaticContent _myContent;

    public StaticContentController(ILogger<IdentityController> logger, StaticContent MyStaticContent)
    {
      _logger = logger;
      _myContent = MyStaticContent;
    }

    [HttpGet("FirstPage")]
    public ActionResult<StaticFirstPage> FirstPage()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.FirstPage();
        
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

    [HttpPost("FirstPageEdit")]
    public ActionResult<BasicReturn> FirstPageEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = "1";
        
        _myContent.FirstPageEdit(data);

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