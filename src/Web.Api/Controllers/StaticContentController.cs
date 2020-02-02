using System.Security.AccessControl;
using System.Linq;
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
    private string _user;

    public StaticContentController(ILogger<IdentityController> logger, StaticContent MyStaticContent)
    {
      _logger = logger;
      _myContent = MyStaticContent;
      _user = "1";
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
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);
        
        _myContent.FirstPageEdit(_firstPage);

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

    [HttpGet("CompetentMind")]
    public ActionResult<StaticFirstPage> CompetentMind()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.CompetentMind();

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

    [HttpPost("CompetentMindEdit")]
    public ActionResult<BasicReturn> CompetentMindEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.CompetentMindEdit(_firstPage);

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

    [HttpGet("WhoIAm")]
    public ActionResult<StaticFirstPage> WhoIAm()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.WhoIAm();

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

    [HttpPost("WhoIAmEdit")]
    public ActionResult<BasicReturn> WhoIAmEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.WhoIAmEdit(_firstPage);

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

    [HttpGet("DominantName")]
    public ActionResult<StaticFirstPage> DominantName()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.DominantName();

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

    [HttpPost("DominantNameEdit")]
    public ActionResult<BasicReturn> DominantNameEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.DominantNameEdit(_firstPage);

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

    [HttpGet("DominantStructure")]
    public ActionResult<StaticFirstPage> DominantStructure()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.DominantStructure();

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

    [HttpPost("DominantStructureEdit")]
    public ActionResult<BasicReturn> DominantStructureEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.DominantStructureEdit(_firstPage);

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

    [HttpGet("SabotageMode")]
    public ActionResult<StaticFirstPage> SabotageMode()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.SabotageMode();

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

    [HttpPost("SabotageModeEdit")]
    public ActionResult<BasicReturn> SabotageModeEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.SabotageModeEdit(_firstPage);

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

    [HttpGet("SabotageWhoIAm")]
    public ActionResult<StaticFirstPage> SabotageWhoIAm()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.SabotageWhoIAm();

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

    [HttpPost("SabotageWhoIAmEdit")]
    public ActionResult<BasicReturn> SabotageWhoIAmEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.SabotageWhoIAmEdit(_firstPage);

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

    [HttpGet("SabotageDominant")]
    public ActionResult<StaticFirstPage> SabotageDominant()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.SabotageDominant();

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

    [HttpPost("SabotageDominantEdit")]
    public ActionResult<BasicReturn> SabotageDominantEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.SabotageDominantEdit(_firstPage);

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

    [HttpGet("SabotageName")]
    public ActionResult<StaticFirstPage> SabotageName()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.SabotageName();

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

    [HttpPost("SabotageNameEdit")]
    public ActionResult<BasicReturn> SabotageNameEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.SabotageNameEdit(_firstPage);

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

    [HttpGet("CompetentXSabotage")]
    public ActionResult<StaticFirstPage> CompetentXSabotage()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.CompetentXSabotage();

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

    [HttpPost("CompetentXSabotageEdit")]
    public ActionResult<BasicReturn> CompetentXSabotageEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.CompetentXSabotageEdit(_firstPage);

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

    [HttpGet("TrinityBehavioralCompetent")]
    public ActionResult<StaticFirstPage> TrinityBehavioralCompetent()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.TrinityBehavioralCompetent();

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

    [HttpPost("TrinityBehavioralCompetentEdit")]
    public ActionResult<BasicReturn> TrinityBehavioralCompetentEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.TrinityBehavioralCompetentEdit(_firstPage);

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