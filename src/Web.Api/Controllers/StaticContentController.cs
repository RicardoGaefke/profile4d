using System.Linq;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Profile4d.Data;
using Profile4d.Domain;

namespace Profile4d.Web.Api.Controllers
{
  [ApiController]
  [Route("[controller]")]
  [Authorize(Roles = "Admin")]
  public class StaticContentController : ControllerBase
  {
    private readonly ILogger<StaticContentController> _logger;
    private readonly StaticContent _myContent;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private string _user;

    public StaticContentController(
      ILogger<StaticContentController> logger,
      IHttpContextAccessor httpContextAccessor,
      StaticContent MyStaticContent
    )
    {
      _logger = logger;
      _myContent = MyStaticContent;
      
      _httpContextAccessor = httpContextAccessor;
      ClaimsPrincipal currentUser = this.User;

      _user = (from c in _httpContextAccessor.HttpContext.User.Claims
               where c.Type == "UserID"
               select c.Value).FirstOrDefault()
      ;
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

    [HttpGet("InternalPartners")]
    public ActionResult<StaticFirstPage> InternalPartners()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.InternalPartners();

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

    [HttpPost("InternalPartnersEdit")]
    public ActionResult<BasicReturn> InternalPartnersEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.InternalPartnersEdit(_firstPage);

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

    [HttpGet("IntNamePartnerOne")]
    public ActionResult<StaticFirstPage> IntNamePartnerOne()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.IntNamePartnerOne();

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

    [HttpPost("IntNamePartnerOneEdit")]
    public ActionResult<BasicReturn> IntNamePartnerOneEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.IntNamePartnerOneEdit(_firstPage);

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

    [HttpGet("IntFourPowersOne")]
    public ActionResult<StaticFirstPage> IntFourPowersOne()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.IntFourPowersOne();

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

    [HttpPost("IntFourPowersOneEdit")]
    public ActionResult<BasicReturn> IntFourPowersOneEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.IntFourPowersOneEdit(_firstPage);

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

    [HttpGet("IntNamePartnerTwo")]
    public ActionResult<StaticFirstPage> IntNamePartnerTwo()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.IntNamePartnerTwo();

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

    [HttpPost("IntNamePartnerTwoEdit")]
    public ActionResult<BasicReturn> IntNamePartnerTwoEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.IntNamePartnerTwoEdit(_firstPage);

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

    [HttpGet("IntFourPowersTwo")]
    public ActionResult<StaticFirstPage> IntFourPowersTwo()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.IntFourPowersTwo();

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

    [HttpPost("IntFourPowersTwoEdit")]
    public ActionResult<BasicReturn> IntFourPowersTwoEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.IntFourPowersTwoEdit(_firstPage);

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

    [HttpGet("TrinityBehavioralSabotage")]
    public ActionResult<StaticFirstPage> TrinityBehavioralSabotage()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.TrinityBehaviourSabotage();

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

    [HttpPost("TrinityBehavioralSabotageEdit")]
    public ActionResult<BasicReturn> TrinityBehavioralSabotageEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.TrinityBehaviourSabotageEdit(_firstPage);

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

    [HttpGet("InternalEnemies")]
    public ActionResult<StaticFirstPage> InternalEnemies()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.InternalEnemies();

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

    [HttpPost("InternalEnemiesEdit")]
    public ActionResult<BasicReturn> InternalEnemiesEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.InternalEnemiesEdit(_firstPage);

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

    [HttpGet("NameSaboteurOne")]
    public ActionResult<StaticFirstPage> NameSaboteurOne()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.NameSaboteurOne();

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

    [HttpPost("NameSaboteurOneEdit")]
    public ActionResult<BasicReturn> NameSaboteurOneEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.NameSaboteurOneEdit(_firstPage);

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

    [HttpGet("SFourPowersOne")]
    public ActionResult<StaticFirstPage> SFourPowersOne()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.SFourPowersOne();

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

    [HttpPost("SFourPowersOneEdit")]
    public ActionResult<BasicReturn> SFourPowersOneEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.SFourPowersOneEdit(_firstPage);

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

    [HttpGet("NameSaboteurTwo")]
    public ActionResult<StaticFirstPage> NameSaboteurTwo()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.NameSaboteurTwo();

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

    [HttpPost("NameSaboteurTwoEdit")]
    public ActionResult<BasicReturn> NameSaboteurTwoEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.NameSaboteurTwoEdit(_firstPage);

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

    [HttpGet("SFourPowersTwo")]
    public ActionResult<StaticFirstPage> SFourPowersTwo()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.SFourPowersTwo();

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

    [HttpPost("SFourPowersTwoEdit")]
    public ActionResult<BasicReturn> SFourPowersTwoEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.SFourPowersTwoEdit(_firstPage);

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

    [HttpGet("PDI")]
    public ActionResult<StaticFirstPage> PDI()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.PDI();

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

    [HttpPost("PDIEdit")]
    public ActionResult<BasicReturn> PDIEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.PDIEdit(_firstPage);

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

    [HttpGet("Introduction")]
    public ActionResult<StaticFirstPage> Introduction()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.Introduction();

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

    [HttpPost("IntroductionEdit")]
    public ActionResult<BasicReturn> IntroductionEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.IntroductionEdit(_firstPage);

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

    [HttpGet("PersonalAnalysis")]
    public ActionResult<StaticFirstPage> PersonalAnalysis()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.PersonalAnalysis();

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

    [HttpPost("PersonalAnalysisEdit")]
    public ActionResult<BasicReturn> PersonalAnalysisEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.PersonalAnalysisEdit(_firstPage);

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

    [HttpGet("InferiorMind")]
    public ActionResult<StaticFirstPage> InferiorMind()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.InferiorMind();

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

    [HttpPost("InferiorMindEdit")]
    public ActionResult<BasicReturn> InferiorMindEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.InferiorMindEdit(_firstPage);

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

    [HttpGet("TwoMindWays")]
    public ActionResult<StaticFirstPage> TwoMindWays()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.TwoMindWays();

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

    [HttpPost("TwoMindWaysEdit")]
    public ActionResult<BasicReturn> TwoMindWaysEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.TwoMindWaysEdit(_firstPage);

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

    [HttpGet("DominantProfile")]
    public ActionResult<StaticFirstPage> DominantProfile()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.DominantProfile();

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

    [HttpPost("DominantProfileEdit")]
    public ActionResult<BasicReturn> DominantProfileEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.DominantProfileEdit(_firstPage);

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

    [HttpGet("CompetentMode")]
    public ActionResult<StaticFirstPage> CompetentMode()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.CompetentMode();

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

    [HttpPost("CompetentModeEdit")]
    public ActionResult<BasicReturn> CompetentModeEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.CompetentModeEdit(_firstPage);

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

    [HttpGet("DominantWhoIAm")]
    public ActionResult<StaticFirstPage> DominantWhoIAm()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.DominantWhoIAm();

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

    [HttpPost("DominantWhoIAmEdit")]
    public ActionResult<BasicReturn> DominantWhoIAmEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.DominantWhoIAmEdit(_firstPage);

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

    [HttpGet("NameProfileOne")]
    public ActionResult<StaticFirstPage> NameProfileOne()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.NameProfileOne();

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

    [HttpPost("NameProfileOneEdit")]
    public ActionResult<BasicReturn> NameProfileOneEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.NameProfileOneEdit(_firstPage);

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

    [HttpGet("DominantResources")]
    public ActionResult<StaticFirstPage> DominantResources()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.DominantResources();

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

    [HttpPost("DominantResourcesEdit")]
    public ActionResult<BasicReturn> DominantResourcesEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.DominantResourcesEdit(_firstPage);

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

    [HttpGet("FourPersonalPowers")]
    public ActionResult<StaticFirstPage> FourPersonalPowers()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.FourPersonalPowers();

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

    [HttpPost("FourPersonalPowersEdit")]
    public ActionResult<BasicReturn> FourPersonalPowersEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.FourPersonalPowersEdit(_firstPage);

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

    [HttpGet("YourMotivations")]
    public ActionResult<StaticFirstPage> YourMotivations()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.YourMotivations();

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

    [HttpPost("YourMotivationsEdit")]
    public ActionResult<BasicReturn> YourMotivationsEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.YourMotivationsEdit(_firstPage);

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

    [HttpGet("AttentionFocus")]
    public ActionResult<StaticFirstPage> AttentionFocus()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.AttentionFocus();

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

    [HttpPost("AttentionFocusEdit")]
    public ActionResult<BasicReturn> AttentionFocusEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.AttentionFocusEdit(_firstPage);

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

    [HttpGet("LeaderDifferential")]
    public ActionResult<StaticFirstPage> LeaderDifferential()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.LeaderDifferential();

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

    [HttpPost("LeaderDifferentialEdit")]
    public ActionResult<BasicReturn> LeaderDifferentialEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.LeaderDifferentialEdit(_firstPage);

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

    [HttpGet("RelationedValuesDomProfile")]
    public ActionResult<StaticFirstPage> RelationedValuesDomProfile()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.RelationedValuesDomProfile();

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

    [HttpPost("RelationedValuesDomProfileEdit")]
    public ActionResult<BasicReturn> RelationedValuesDomProfileEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.RelationedValuesDomProfileEdit(_firstPage);

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

    [HttpGet("CompetentEmotional")]
    public ActionResult<StaticFirstPage> CompetentEmotional()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.CompetentEmotional();

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

    [HttpPost("CompetentEmotionalEdit")]
    public ActionResult<BasicReturn> CompetentEmotionalEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.CompetentEmotionalEdit(_firstPage);

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

    [HttpGet("CommunicatesMode")]
    public ActionResult<StaticFirstPage> CommunicatesMode()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.CommunicatesMode();

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

    [HttpPost("CommunicatesModeEdit")]
    public ActionResult<BasicReturn> CommunicatesModeEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.CommunicatesModeEdit(_firstPage);

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

    [HttpGet("InteractsRelationships")]
    public ActionResult<StaticFirstPage> InteractsRelationships()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.InteractsRelationships();

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

    [HttpPost("InteractsRelationshipsEdit")]
    public ActionResult<BasicReturn> InteractsRelationshipsEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.InteractsRelationshipsEdit(_firstPage);

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

    [HttpGet("NameProfileTwo")]
    public ActionResult<StaticFirstPage> NameProfileTwo()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.NameProfileTwo();

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

    [HttpPost("NameProfileTwoEdit")]
    public ActionResult<BasicReturn> NameProfileTwoEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.NameProfileTwoEdit(_firstPage);

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

    [HttpGet("SynthesisSaboteur")]
    public ActionResult<StaticFirstPage> SynthesisSaboteur()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.SynthesisSaboteur();

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

    [HttpPost("SynthesisSaboteurEdit")]
    public ActionResult<BasicReturn> SynthesisSaboteurEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.SynthesisSaboteurEdit(_firstPage);

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

    [HttpGet("LimitingMatrix")]
    public ActionResult<StaticFirstPage> LimitingMatrix()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.LimitingMatrix();

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

    [HttpPost("LimitingMatrixEdit")]
    public ActionResult<BasicReturn> LimitingMatrixEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.LimitingMatrixEdit(_firstPage);

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

    [HttpGet("CommunicationDifficulty")]
    public ActionResult<StaticFirstPage> CommunicationDifficulty()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.CommunicationDifficulty();

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

    [HttpPost("CommunicationDifficultyEdit")]
    public ActionResult<BasicReturn> CommunicationDifficultyEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.CommunicationDifficultyEdit(_firstPage);

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

    [HttpGet("DifficultyRelationships")]
    public ActionResult<StaticFirstPage> DifficultyRelationships()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.DifficultyRelationships();

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

    [HttpPost("DifficultyRelationshipsEdit")]
    public ActionResult<BasicReturn> DifficultyRelationshipsEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.DifficultyRelationshipsEdit(_firstPage);

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

    [HttpGet("FourLimitationPowers")]
    public ActionResult<StaticFirstPage> FourLimitationPowers()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.FourLimitationPowers();

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

    [HttpPost("FourLimitationPowersEdit")]
    public ActionResult<BasicReturn> FourLimitationPowersEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.FourLimitationPowersEdit(_firstPage);

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

    [HttpGet("LimitingAttitudes")]
    public ActionResult<StaticFirstPage> LimitingAttitudes()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.LimitingAttitudes();

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

    [HttpPost("LimitingAttitudesEdit")]
    public ActionResult<BasicReturn> LimitingAttitudesEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.LimitingAttitudesEdit(_firstPage);

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

    [HttpGet("BehavioralAddiction")]
    public ActionResult<StaticFirstPage> BehavioralAddiction()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.BehavioralAddiction();

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

    [HttpPost("BehavioralAddictionEdit")]
    public ActionResult<BasicReturn> BehavioralAddictionEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.BehavioralAddictionEdit(_firstPage);

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

    [HttpGet("EmotionalAddiction")]
    public ActionResult<StaticFirstPage> EmotionalAddiction()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.EmotionalAddiction();

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

    [HttpPost("EmotionalAddictionEdit")]
    public ActionResult<BasicReturn> EmotionalAddictionEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.EmotionalAddictionEdit(_firstPage);

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

    [HttpGet("MentalAddiction")]
    public ActionResult<StaticFirstPage> MentalAddiction()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.MentalAddiction();

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

    [HttpPost("MentalAddictionEdit")]
    public ActionResult<BasicReturn> MentalAddictionEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.MentalAddictionEdit(_firstPage);

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

    [HttpGet("DefenseMecanisms")]
    public ActionResult<StaticFirstPage> DefenseMecanisms()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.DefenseMecanisms();

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

    [HttpPost("DefenseMecanismsEdit")]
    public ActionResult<BasicReturn> DefenseMecanismsEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.DefenseMecanismsEdit(_firstPage);

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

    [HttpGet("NeuroticCompulsion")]
    public ActionResult<StaticFirstPage> NeuroticCompulsion()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.NeuroticCompulsion();

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

    [HttpPost("NeuroticCompulsionEdit")]
    public ActionResult<BasicReturn> NeuroticCompulsionEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.NeuroticCompulsionEdit(_firstPage);

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

    [HttpGet("CompetentModeOne")]
    public ActionResult<StaticFirstPage> CompetentModeOne()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.CompetentModeOne();

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

    [HttpPost("CompetentModeOneEdit")]
    public ActionResult<BasicReturn> CompetentModeOneEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.CompetentModeOneEdit(_firstPage);

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

    [HttpGet("SaboteurModeOne")]
    public ActionResult<StaticFirstPage> SaboteurModeOne()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.SaboteurModeOne();

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

    [HttpPost("SaboteurModeOneEdit")]
    public ActionResult<BasicReturn> SaboteurModeOneEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.SaboteurModeOneEdit(_firstPage);

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

    [HttpGet("DoYouSee")]
    public ActionResult<StaticFirstPage> DoYouSee()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.DoYouSee();

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

    [HttpPost("DoYouSeeEdit")]
    public ActionResult<BasicReturn> DoYouSeeEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.DoYouSeeEdit(_firstPage);

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

    [HttpGet("DifficultyComunnication")]
    public ActionResult<StaticFirstPage> DifficultyComunnication()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.DifficultyComunnication();

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

    [HttpPost("DifficultyComunnicationEdit")]
    public ActionResult<BasicReturn> DifficultyComunnicationEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.DifficultyComunnicationEdit(_firstPage);

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

    [HttpGet("NameProfileThree")]
    public ActionResult<StaticFirstPage> NameProfileThree()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.NameProfileThree();

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

    [HttpPost("NameProfileThreeEdit")]
    public ActionResult<BasicReturn> NameProfileThreeEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.NameProfileThreeEdit(_firstPage);

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

    [HttpGet("FourPersonalityPowers")]
    public ActionResult<StaticFirstPage> FourPersonalityPowers()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.FourPersonalityPowers();

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

    [HttpPost("FourPersonalityPowersEdit")]
    public ActionResult<BasicReturn> FourPersonalityPowersEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.FourPersonalityPowersEdit(_firstPage);

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

    [HttpGet("NameProfileFour")]
    public ActionResult<StaticFirstPage> NameProfileFour()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.NameProfileFour();

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

    [HttpPost("NameProfileFourEdit")]
    public ActionResult<BasicReturn> NameProfileFourEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.NameProfileFourEdit(_firstPage);

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

    [HttpGet("FirstFourLimitateForces")]
    public ActionResult<StaticFirstPage> FirstFourLimitateForces()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.FirstFourLimitateForces();

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

    [HttpPost("FirstFourLimitateForcesEdit")]
    public ActionResult<BasicReturn> FirstFourLimitateForcesEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.FirstFourLimitateForcesEdit(_firstPage);

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

    [HttpGet("InternalEnemyOne")]
    public ActionResult<StaticFirstPage> InternalEnemyOne()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.InternalEnemyOne();

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

    [HttpPost("InternalEnemyOneEdit")]
    public ActionResult<BasicReturn> InternalEnemyOneEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.InternalEnemyOneEdit(_firstPage);

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

    [HttpGet("SaboteurNameOne")]
    public ActionResult<StaticFirstPage> SaboteurNameOne()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.SaboteurNameOne();

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

    [HttpPost("SaboteurNameOneEdit")]
    public ActionResult<BasicReturn> SaboteurNameOneEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.SaboteurNameOneEdit(_firstPage);

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

    [HttpGet("SecondFourLimitateForces")]
    public ActionResult<StaticFirstPage> SecondFourLimitateForces()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.SecondFourLimitateForces();

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

    [HttpPost("SecondFourLimitateForcesEdit")]
    public ActionResult<BasicReturn> SecondFourLimitateForcesEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.SecondFourLimitateForcesEdit(_firstPage);

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

    [HttpGet("InternalEnemyTwo")]
    public ActionResult<StaticFirstPage> InternalEnemyTwo()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.InternalEnemyTwo();

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

    [HttpPost("InternalEnemyTwoEdit")]
    public ActionResult<BasicReturn> InternalEnemyTwoEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.InternalEnemyTwoEdit(_firstPage);

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

    [HttpGet("SaboteurNameTwo")]
    public ActionResult<StaticFirstPage> SaboteurNameTwo()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.SaboteurNameTwo();

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

    [HttpPost("SaboteurNameTwoEdit")]
    public ActionResult<BasicReturn> SaboteurNameTwoEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.SaboteurNameTwoEdit(_firstPage);

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

    [HttpGet("LimitationFourPowers")]
    public ActionResult<StaticFirstPage> LimitationFourPowers()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.LimitationFourPowers();

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

    [HttpPost("LimitationFourPowersEdit")]
    public ActionResult<BasicReturn> LimitationFourPowersEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.LimitationFourPowersEdit(_firstPage);

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

    [HttpGet("ThreeIntelligenceCenters")]
    public ActionResult<StaticFirstPage> ThreeIntelligenceCenters()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ThreeIntelligenceCenters();

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

    [HttpPost("ThreeIntelligenceCentersEdit")]
    public ActionResult<BasicReturn> ThreeIntelligenceCentersEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ThreeIntelligenceCentersEdit(_firstPage);

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

    [HttpGet("ThreeCentersLegend")]
    public ActionResult<StaticFirstPage> ThreeCentersLegend()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ThreeCentersLegend();

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

    [HttpPost("ThreeCentersLegendEdit")]
    public ActionResult<BasicReturn> ThreeCentersLegendEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ThreeCentersLegendEdit(_firstPage);

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

    [HttpGet("BehavioralRespectiveEnergies")]
    public ActionResult<StaticFirstPage> BehavioralRespectiveEnergies()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.BehavioralRespectiveEnergies();

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

    [HttpPost("BehavioralRespectiveEnergiesEdit")]
    public ActionResult<BasicReturn> BehavioralRespectiveEnergiesEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.BehavioralRespectiveEnergiesEdit(_firstPage);

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

    [HttpGet("AttentionPoints")]
    public ActionResult<StaticFirstPage> AttentionPoints()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.AttentionPoints();

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

    [HttpPost("AttentionPointsEdit")]
    public ActionResult<BasicReturn> AttentionPointsEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.AttentionPointsEdit(_firstPage);

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

    [HttpGet("IdentifiedConflicts")]
    public ActionResult<StaticFirstPage> IdentifiedConflicts()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.IdentifiedConflicts();

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

    [HttpPost("IdentifiedConflictsEdit")]
    public ActionResult<BasicReturn> IdentifiedConflictsEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.IdentifiedConflictsEdit(_firstPage);

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

    [HttpGet("EnergySpikes")]
    public ActionResult<StaticFirstPage> EnergySpikes()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.EnergySpikes();

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

    [HttpPost("EnergySpikesEdit")]
    public ActionResult<BasicReturn> EnergySpikesEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.EnergySpikesEdit(_firstPage);

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

    [HttpGet("NewWhoAmI")]
    public ActionResult<StaticFirstPage> NewWhoAmI()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.NewWhoAmI();

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

    [HttpPost("NewWhoAmIEdit")]
    public ActionResult<BasicReturn> NewWhoAmIEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.NewWhoAmIEdit(_firstPage);

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

    [HttpGet("TriadBehavioralLegend")]
    public ActionResult<StaticFirstPage> TriadBehavioralLegend()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.TriadBehavioralLegend();

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

    [HttpPost("TriadBehavioralLegendEdit")]
    public ActionResult<BasicReturn> TriadBehavioralLegendEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.TriadBehavioralLegendEdit(_firstPage);

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

    [HttpGet("HomogeneousHeterogeneous")]
    public ActionResult<StaticFirstPage> HomogeneousHeterogeneous()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.HomogeneousHeterogeneous();

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

    [HttpPost("HomogeneousHeterogeneousEdit")]
    public ActionResult<BasicReturn> HomogeneousHeterogeneousEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.HomogeneousHeterogeneousEdit(_firstPage);

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

    [HttpGet("ObservationAttention")]
    public ActionResult<StaticFirstPage> ObservationAttention()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ObservationAttention();

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

    [HttpPost("ObservationAttentionEdit")]
    public ActionResult<BasicReturn> ObservationAttentionEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ObservationAttentionEdit(_firstPage);

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

    [HttpGet("TriadSpecificsOne")]
    public ActionResult<StaticFirstPage> TriadSpecificsOne()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.TriadSpecificsOne();

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

    [HttpPost("TriadSpecificsOneEdit")]
    public ActionResult<BasicReturn> TriadSpecificsOneEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.TriadSpecificsOneEdit(_firstPage);

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

    [HttpGet("OriginalXAdapted")]
    public ActionResult<StaticFirstPage> OriginalXAdapted()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.OriginalXAdapted();

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

    [HttpPost("OriginalXAdaptedEdit")]
    public ActionResult<BasicReturn> OriginalXAdaptedEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.OriginalXAdaptedEdit(_firstPage);

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

    [HttpGet("TriadLegends")]
    public ActionResult<StaticFirstPage> TriadLegends()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.TriadLegends();

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

    [HttpPost("TriadLegendsEdit")]
    public ActionResult<BasicReturn> TriadLegendsEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.TriadLegendsEdit(_firstPage);

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

    [HttpGet("ObservationTriad")]
    public ActionResult<StaticFirstPage> ObservationTriad()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ObservationTriad();

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

    [HttpPost("ObservationTriadEdit")]
    public ActionResult<BasicReturn> ObservationTriadEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ObservationTriadEdit(_firstPage);

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

    [HttpGet("CorrectFlux")]
    public ActionResult<StaticFirstPage> CorrectFlux()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.CorrectFlux();

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

    [HttpPost("CorrectFluxEdit")]
    public ActionResult<BasicReturn> CorrectFluxEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.CorrectFluxEdit(_firstPage);

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

    [HttpGet("EmotionalFluxResult")]
    public ActionResult<StaticFirstPage> EmotionalFluxResult()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.EmotionalFluxResult();

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

    [HttpPost("EmotionalFluxResultEdit")]
    public ActionResult<BasicReturn> EmotionalFluxResultEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.EmotionalFluxResultEdit(_firstPage);

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

    [HttpGet("DominantProfileOne")]
    public ActionResult<StaticFirstPage> DominantProfileOne()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.DominantProfileOne();

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

    [HttpPost("DominantProfileOneEdit")]
    public ActionResult<BasicReturn> DominantProfileOneEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.DominantProfileOneEdit(_firstPage);

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

    [HttpGet("InternalPartOne")]
    public ActionResult<StaticFirstPage> InternalPartOne()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.InternalPartOne();

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

    [HttpPost("InternalPartOneEdit")]
    public ActionResult<BasicReturn> InternalPartOneEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.InternalPartOneEdit(_firstPage);

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

    [HttpGet("InternalPartTwo")]
    public ActionResult<StaticFirstPage> InternalPartTwo()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.InternalPartTwo();

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

    [HttpPost("InternalPartTwoEdit")]
    public ActionResult<BasicReturn> InternalPartTwoEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.InternalPartTwoEdit(_firstPage);

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

    [HttpGet("IdealGrowthPart")]
    public ActionResult<StaticFirstPage> IdealGrowthPart()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.IdealGrowthPart();

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

    [HttpPost("IdealGrowthPartEdit")]
    public ActionResult<BasicReturn> IdealGrowthPartEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.IdealGrowthPartEdit(_firstPage);

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

    [HttpGet("ExerciseProfileMoviment")]
    public ActionResult<StaticFirstPage> ExerciseProfileMoviment()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ExerciseProfileMoviment();

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

    [HttpPost("ExerciseProfileMovimentEdit")]
    public ActionResult<BasicReturn> ExerciseProfileMovimentEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ExerciseProfileMovimentEdit(_firstPage);

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

    [HttpGet("YourBehavioralDNA")]
    public ActionResult<StaticFirstPage> YourBehavioralDNA()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.YourBehavioralDNA();

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

    [HttpPost("YourBehavioralDNAEdit")]
    public ActionResult<BasicReturn> YourBehavioralDNAEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.YourBehavioralDNAEdit(_firstPage);

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

    [HttpGet("SuperiorMind")]
    public ActionResult<StaticFirstPage> SuperiorMind()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.SuperiorMind();

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

    [HttpPost("SuperiorMindEdit")]
    public ActionResult<BasicReturn> SuperiorMindEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.SuperiorMindEdit(_firstPage);

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

    [HttpGet("HealthyAdult")]
    public ActionResult<StaticFirstPage> HealthyAdult()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.HealthyAdult();

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

    [HttpPost("HealthyAdultEdit")]
    public ActionResult<BasicReturn> HealthyAdultEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.HealthyAdultEdit(_firstPage);

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

    [HttpGet("SynergeticMode")]
    public ActionResult<StaticFirstPage> SynergeticMode()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.SynergeticMode();

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

    [HttpPost("SynergeticModeEdit")]
    public ActionResult<BasicReturn> SynergeticModeEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.SynergeticModeEdit(_firstPage);

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

    [HttpGet("ArchetypeEssence")]
    public ActionResult<StaticFirstPage> ArchetypeEssence()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ArchetypeEssence();

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

    [HttpPost("ArchetypeEssenceEdit")]
    public ActionResult<BasicReturn> ArchetypeEssenceEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ArchetypeEssenceEdit(_firstPage);

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

    [HttpGet("EssentialFeature")]
    public ActionResult<StaticFirstPage> EssentialFeature()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.EssentialFeature();

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

    [HttpPost("EssentialFeatureEdit")]
    public ActionResult<BasicReturn> EssentialFeatureEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.EssentialFeatureEdit(_firstPage);

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

    [HttpGet("DomProfile")]
    public ActionResult<StaticFirstPage> DomProfile()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.DomProfile();

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

    [HttpPost("DomProfileEdit")]
    public ActionResult<BasicReturn> DomProfileEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.DomProfileEdit(_firstPage);

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

    [HttpGet("BigChallenge")]
    public ActionResult<StaticFirstPage> BigChallenge()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.BigChallenge();

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

    [HttpPost("BigChallengeEdit")]
    public ActionResult<BasicReturn> BigChallengeEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.BigChallengeEdit(_firstPage);

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

    [HttpGet("WorkKey")]
    public ActionResult<StaticFirstPage> WorkKey()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.WorkKey();

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

    [HttpPost("WorkKeyEdit")]
    public ActionResult<BasicReturn> WorkKeyEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.WorkKeyEdit(_firstPage);

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

    [HttpGet("IdealPartner")]
    public ActionResult<StaticFirstPage> IdealPartner()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.IdealPartner();

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

    [HttpPost("IdealPartnerEdit")]
    public ActionResult<BasicReturn> IdealPartnerEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.IdealPartnerEdit(_firstPage);

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

    [HttpGet("CharacterFormation")]
    public ActionResult<StaticFirstPage> CharacterFormation()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.CharacterFormation();

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

    [HttpPost("CharacterFormationEdit")]
    public ActionResult<BasicReturn> CharacterFormationEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.CharacterFormationEdit(_firstPage);

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

    [HttpGet("Moment")]
    public ActionResult<StaticFirstPage> Moment()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.Moment();

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

    [HttpPost("MomentEdit")]
    public ActionResult<BasicReturn> MomentEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.MomentEdit(_firstPage);

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

    [HttpGet("ExistentialPain")]
    public ActionResult<StaticFirstPage> ExistentialPain()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ExistentialPain();

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

    [HttpPost("ExistentialPainEdit")]
    public ActionResult<BasicReturn> ExistentialPainEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ExistentialPainEdit(_firstPage);

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

    [HttpGet("NoteExistentialPain")]
    public ActionResult<StaticFirstPage> NoteExistentialPain()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.NoteExistentialPain();

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

    [HttpPost("NoteExistentialPainEdit")]
    public ActionResult<BasicReturn> NoteExistentialPainEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.NoteExistentialPainEdit(_firstPage);

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

    [HttpGet("CrystallizationPersonality")]
    public ActionResult<StaticFirstPage> CrystallizationPersonality()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.CrystallizationPersonality();

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

    [HttpPost("CrystallizationPersonalityEdit")]
    public ActionResult<BasicReturn> CrystallizationPersonalityEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.CrystallizationPersonalityEdit(_firstPage);

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

    [HttpGet("BodyStructureFixed")]
    public ActionResult<StaticFirstPage> BodyStructureFixed()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.BodyStructureFixed();

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

    [HttpPost("BodyStructureFixedEdit")]
    public ActionResult<BasicReturn> BodyStructureFixedEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.BodyStructureFixedEdit(_firstPage);

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

    [HttpGet("BodyShape")]
    public ActionResult<StaticFirstPage> BodyShape()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.BodyShape();

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

    [HttpPost("BodyShapeEdit")]
    public ActionResult<BasicReturn> BodyShapeEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.BodyShapeEdit(_firstPage);

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

    [HttpGet("BodyCharacters")]
    public ActionResult<StaticFirstPage> BodyCharacters()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.BodyCharacters();

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

    [HttpPost("BodyCharactersEdit")]
    public ActionResult<BasicReturn> BodyCharactersEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.BodyCharactersEdit(_firstPage);

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

    [HttpGet("MainVirtueEssence")]
    public ActionResult<StaticFirstPage> MainVirtueEssence()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.MainVirtueEssence();

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

    [HttpPost("MainVirtueEssenceEdit")]
    public ActionResult<BasicReturn> MainVirtueEssenceEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.MainVirtueEssenceEdit(_firstPage);

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

    [HttpGet("BenefitsVirtueEssence")]
    public ActionResult<StaticFirstPage> BenefitsVirtueEssence()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.BenefitsVirtueEssence();

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

    [HttpPost("BenefitsVirtueEssenceEdit")]
    public ActionResult<BasicReturn> BenefitsVirtueEssenceEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.BenefitsVirtueEssenceEdit(_firstPage);

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

    [HttpGet("TwelveCharacterAdultStrengths")]
    public ActionResult<StaticFirstPage> TwelveCharacterAdultStrengths()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.TwelveCharacterAdultStrengths();

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

    [HttpPost("TwelveCharacterAdultStrengthsEdit")]
    public ActionResult<BasicReturn> TwelveCharacterAdultStrengthsEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.TwelveCharacterAdultStrengthsEdit(_firstPage);

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

    [HttpGet("ProfessionalAnalyze")]
    public ActionResult<StaticFirstPage> ProfessionalAnalyze()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ProfessionalAnalyze();

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

    [HttpPost("ProfessionalAnalyzeEdit")]
    public ActionResult<BasicReturn> ProfessionalAnalyzeEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ProfessionalAnalyzeEdit(_firstPage);

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

    [HttpGet("TwelveCompetencesApresentation")]
    public ActionResult<StaticFirstPage> TwelveCompetencesApresentation()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.TwelveCompetencesApresentation();

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

    [HttpPost("TwelveCompetencesApresentationEdit")]
    public ActionResult<BasicReturn> TwelveCompetencesApresentationEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.TwelveCompetencesApresentationEdit(_firstPage);

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

    [HttpGet("ThreeDimensions")]
    public ActionResult<StaticFirstPage> ThreeDimensions()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ThreeDimensions();

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

    [HttpPost("ThreeDimensionsEdit")]
    public ActionResult<BasicReturn> ThreeDimensionsEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ThreeDimensionsEdit(_firstPage);

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

    [HttpGet("FourCompetentStages")]
    public ActionResult<StaticFirstPage> FourCompetentStages()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.FourCompetentStages();

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

    [HttpPost("FourCompetentStagesEdit")]
    public ActionResult<BasicReturn> FourCompetentStagesEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.FourCompetentStagesEdit(_firstPage);

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

    [HttpGet("Observation")]
    public ActionResult<StaticFirstPage> Observation()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.Observation();

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

    [HttpPost("ObservationEdit")]
    public ActionResult<BasicReturn> ObservationEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ObservationEdit(_firstPage);

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

    [HttpGet("TwelveCompetences")]
    public ActionResult<StaticFirstPage> TwelveCompetences()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.TwelveCompetences();

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

    [HttpPost("TwelveCompetencesEdit")]
    public ActionResult<BasicReturn> TwelveCompetencesEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.TwelveCompetencesEdit(_firstPage);

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

    [HttpGet("ExcellentCompromise")]
    public ActionResult<StaticFirstPage> ExcellentCompromise()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ExcellentCompromise();

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

    [HttpPost("ExcellentCompromiseEdit")]
    public ActionResult<BasicReturn> ExcellentCompromiseEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ExcellentCompromiseEdit(_firstPage);

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

    [HttpGet("ObservationOne")]
    public ActionResult<StaticFirstPage> ObservationOne()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ObservationOne();

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

    [HttpPost("ObservationOneEdit")]
    public ActionResult<BasicReturn> ObservationOneEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ObservationOneEdit(_firstPage);

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

    [HttpGet("ObservationTwo")]
    public ActionResult<StaticFirstPage> ObservationTwo()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ObservationTwo();

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

    [HttpPost("ObservationTwoEdit")]
    public ActionResult<BasicReturn> ObservationTwoEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ObservationTwoEdit(_firstPage);

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

    [HttpGet("ConflictsResolution")]
    public ActionResult<StaticFirstPage> ConflictsResolution()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ConflictsResolution();

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

    [HttpPost("ConflictsResolutionEdit")]
    public ActionResult<BasicReturn> ConflictsResolutionEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ConflictsResolutionEdit(_firstPage);

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

    [HttpGet("ObservationThree")]
    public ActionResult<StaticFirstPage> ObservationThree()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ObservationThree();

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

    [HttpPost("ObservationThreeEdit")]
    public ActionResult<BasicReturn> ObservationThreeEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ObservationThreeEdit(_firstPage);

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

    [HttpGet("ObservationFour")]
    public ActionResult<StaticFirstPage> ObservationFour()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ObservationFour();

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

    [HttpPost("ObservationFourEdit")]
    public ActionResult<BasicReturn> ObservationFourEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ObservationFourEdit(_firstPage);

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

    [HttpGet("Adaptability")]
    public ActionResult<StaticFirstPage> Adaptability()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.Adaptability();

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

    [HttpPost("AdaptabilityEdit")]
    public ActionResult<BasicReturn> AdaptabilityEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.AdaptabilityEdit(_firstPage);

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

    [HttpGet("ObservationFive")]
    public ActionResult<StaticFirstPage> ObservationFive()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ObservationFive();

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

    [HttpPost("ObservationFiveEdit")]
    public ActionResult<BasicReturn> ObservationFiveEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ObservationFiveEdit(_firstPage);

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

    [HttpGet("ObservationSix")]
    public ActionResult<StaticFirstPage> ObservationSix()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ObservationSix();

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

    [HttpPost("ObservationSixEdit")]
    public ActionResult<BasicReturn> ObservationSixEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ObservationSixEdit(_firstPage);

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

    [HttpGet("Proactivity")]
    public ActionResult<StaticFirstPage> Proactivity()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.Proactivity();

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

    [HttpPost("ProactivityEdit")]
    public ActionResult<BasicReturn> ProactivityEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ProactivityEdit(_firstPage);

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

    [HttpGet("ObservationSeven")]
    public ActionResult<StaticFirstPage> ObservationSeven()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ObservationSeven();

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

    [HttpPost("ObservationSevenEdit")]
    public ActionResult<BasicReturn> ObservationSevenEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ObservationSevenEdit(_firstPage);

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

    [HttpGet("ObservationEight")]
    public ActionResult<StaticFirstPage> ObservationEight()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ObservationEight();

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

    [HttpPost("ObservationEightEdit")]
    public ActionResult<BasicReturn> ObservationEightEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ObservationEightEdit(_firstPage);

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

    [HttpGet("ObservationNine")]
    public ActionResult<StaticFirstPage> ObservationNine()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ObservationNine();

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

    [HttpPost("ObservationNineEdit")]
    public ActionResult<BasicReturn> ObservationNineEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ObservationNineEdit(_firstPage);

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

    [HttpGet("ObservationTen")]
    public ActionResult<StaticFirstPage> ObservationTen()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ObservationTen();

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

    [HttpPost("ObservationTenEdit")]
    public ActionResult<BasicReturn> ObservationTenEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ObservationTenEdit(_firstPage);

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

    [HttpGet("ObservationEleven")]
    public ActionResult<StaticFirstPage> ObservationEleven()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ObservationEleven();

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

    [HttpPost("ObservationElevenEdit")]
    public ActionResult<BasicReturn> ObservationElevenEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ObservationElevenEdit(_firstPage);

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

    [HttpGet("ObservationTwelve")]
    public ActionResult<StaticFirstPage> ObservationTwelve()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ObservationTwelve();

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

    [HttpPost("ObservationTwelveEdit")]
    public ActionResult<BasicReturn> ObservationTwelveEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ObservationTwelveEdit(_firstPage);

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

    [HttpGet("ObservationThirteen")]
    public ActionResult<StaticFirstPage> ObservationThirteen()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ObservationThirteen();

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

    [HttpPost("ObservationThirteenEdit")]
    public ActionResult<BasicReturn> ObservationThirteenEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ObservationThirteenEdit(_firstPage);

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

    [HttpGet("ObservationFourteen")]
    public ActionResult<StaticFirstPage> ObservationFourteen()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ObservationFourteen();

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

    [HttpPost("ObservationFourteenEdit")]
    public ActionResult<BasicReturn> ObservationFourteenEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ObservationFourteenEdit(_firstPage);

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

    [HttpGet("ObservationFifteen")]
    public ActionResult<StaticFirstPage> ObservationFifteen()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ObservationFifteen();

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

    [HttpPost("ObservationFifteenEdit")]
    public ActionResult<BasicReturn> ObservationFifteenEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ObservationFifteenEdit(_firstPage);

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

    [HttpGet("ObservationSixteen")]
    public ActionResult<StaticFirstPage> ObservationSixteen()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ObservationSixteen();

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

    [HttpPost("ObservationSixteenEdit")]
    public ActionResult<BasicReturn> ObservationSixteenEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ObservationSixteenEdit(_firstPage);

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

    [HttpGet("ObservationSeventeen")]
    public ActionResult<StaticFirstPage> ObservationSeventeen()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ObservationSeventeen();

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

    [HttpPost("ObservationSeventeenEdit")]
    public ActionResult<BasicReturn> ObservationSeventeenEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ObservationSeventeenEdit(_firstPage);

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

    [HttpGet("ObservationEighteen")]
    public ActionResult<StaticFirstPage> ObservationEighteen()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ObservationEighteen();

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

    [HttpPost("ObservationEighteenEdit")]
    public ActionResult<BasicReturn> ObservationEighteenEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ObservationEighteenEdit(_firstPage);

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

    [HttpGet("ObservationNineteen")]
    public ActionResult<StaticFirstPage> ObservationNineteen()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ObservationNineteen();

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

    [HttpPost("ObservationNineteenEdit")]
    public ActionResult<BasicReturn> ObservationNineteenEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ObservationNineteenEdit(_firstPage);

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

    [HttpGet("ObservationTwenty")]
    public ActionResult<StaticFirstPage> ObservationTwenty()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ObservationTwenty();

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

    [HttpPost("ObservationTwentyEdit")]
    public ActionResult<BasicReturn> ObservationTwentyEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ObservationTwentyEdit(_firstPage);

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

    [HttpGet("ObservationTwentyOne")]
    public ActionResult<StaticFirstPage> ObservationTwentyOne()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ObservationTwentyOne();

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

    [HttpPost("ObservationTwentyOneEdit")]
    public ActionResult<BasicReturn> ObservationTwentyOneEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ObservationTwentyOneEdit(_firstPage);

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

    [HttpGet("ObservationTwentyTwo")]
    public ActionResult<StaticFirstPage> ObservationTwentyTwo()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ObservationTwentyTwo();

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

    [HttpPost("ObservationTwentyTwoEdit")]
    public ActionResult<BasicReturn> ObservationTwentyTwoEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ObservationTwentyTwoEdit(_firstPage);

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

    [HttpGet("ObservationTwentyThree")]
    public ActionResult<StaticFirstPage> ObservationTwentyThree()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ObservationTwentyThree();

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

    [HttpPost("ObservationTwentyThreeEdit")]
    public ActionResult<BasicReturn> ObservationTwentyThreeEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ObservationTwentyThreeEdit(_firstPage);

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

    [HttpGet("ObservationTwentyFour")]
    public ActionResult<StaticFirstPage> ObservationTwentyFour()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ObservationTwentyFour();

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

    [HttpPost("ObservationTwentyFourEdit")]
    public ActionResult<BasicReturn> ObservationTwentyFourEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ObservationTwentyFourEdit(_firstPage);

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

    [HttpGet("InternationalRelationship")]
    public ActionResult<StaticFirstPage> InternationalRelationship()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.InternationalRelationship();

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

    [HttpPost("InternationalRelationshipEdit")]
    public ActionResult<BasicReturn> InternationalRelationshipEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.InternationalRelationshipEdit(_firstPage);

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

    [HttpGet("ClientOrientation")]
    public ActionResult<StaticFirstPage> ClientOrientation()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ClientOrientation();

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

    [HttpPost("ClientOrientationEdit")]
    public ActionResult<BasicReturn> ClientOrientationEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ClientOrientationEdit(_firstPage);

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

    [HttpGet("PeoplesDevelopment")]
    public ActionResult<StaticFirstPage> PeoplesDevelopment()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.PeoplesDevelopment();

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

    [HttpPost("PeoplesDevelopmentEdit")]
    public ActionResult<BasicReturn> PeoplesDevelopmentEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.PeoplesDevelopmentEdit(_firstPage);

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

    [HttpGet("NegotiationPersuation")]
    public ActionResult<StaticFirstPage> NegotiationPersuation()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.NegotiationPersuation();

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

    [HttpPost("NegotiationPersuationEdit")]
    public ActionResult<BasicReturn> NegotiationPersuationEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.NegotiationPersuationEdit(_firstPage);

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

    [HttpGet("InovationCriativity")]
    public ActionResult<StaticFirstPage> InovationCriativity()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.InovationCriativity();

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

    [HttpPost("InovationCriativityEdit")]
    public ActionResult<BasicReturn> InovationCriativityEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.InovationCriativityEdit(_firstPage);

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

    [HttpGet("EntrepreneurOrientation")]
    public ActionResult<StaticFirstPage> EntrepreneurOrientation()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.EntrepreneurOrientation();

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

    [HttpPost("EntrepreneurOrientationEdit")]
    public ActionResult<BasicReturn> EntrepreneurOrientationEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.EntrepreneurOrientationEdit(_firstPage);

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

    [HttpGet("StrategicalPlanning")]
    public ActionResult<StaticFirstPage> StrategicalPlanning()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.StrategicalPlanning();

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

    [HttpPost("StrategicalPlanningEdit")]
    public ActionResult<BasicReturn> StrategicalPlanningEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.StrategicalPlanningEdit(_firstPage);

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

    [HttpGet("SystemicalVision")]
    public ActionResult<StaticFirstPage> SystemicalVision()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.SystemicalVision();

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

    [HttpPost("SystemicalVisionEdit")]
    public ActionResult<BasicReturn> SystemicalVisionEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.SystemicalVisionEdit(_firstPage);

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

    [HttpGet("EnergyByArea")]
    public ActionResult<StaticFirstPage> EnergyByArea()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.EnergyByArea();

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

    [HttpPost("EnergyByAreaEdit")]
    public ActionResult<BasicReturn> EnergyByAreaEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.EnergyByAreaEdit(_firstPage);

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

    [HttpGet("GraphicLegends")]
    public ActionResult<StaticFirstPage> GraphicLegends()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.GraphicLegends();

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

    [HttpPost("GraphicLegendsEdit")]
    public ActionResult<BasicReturn> GraphicLegendsEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.GraphicLegendsEdit(_firstPage);

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

    [HttpGet("InovationCriativityOne")]
    public ActionResult<StaticFirstPage> InovationCriativityOne()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.InovationCriativityOne();

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

    [HttpPost("InovationCriativityOneEdit")]
    public ActionResult<BasicReturn> InovationCriativityOneEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.InovationCriativityOneEdit(_firstPage);

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

    [HttpGet("Managment")]
    public ActionResult<StaticFirstPage> Managment()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.Managment();

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

    [HttpPost("ManagmentEdit")]
    public ActionResult<BasicReturn> ManagmentEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ManagmentEdit(_firstPage);

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

    [HttpGet("RelationshipOne")]
    public ActionResult<StaticFirstPage> RelationshipOne()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.RelationshipOne();

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

    [HttpPost("RelationshipOneEdit")]
    public ActionResult<BasicReturn> RelationshipOneEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.RelationshipOneEdit(_firstPage);

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

    [HttpGet("ControlExec")]
    public ActionResult<StaticFirstPage> ControlExec()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.ControlExec();

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

    [HttpPost("ControlExecEdit")]
    public ActionResult<BasicReturn> ControlExecEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.ControlExecEdit(_firstPage);

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

    [HttpGet("LastPageResume")]
    public ActionResult<StaticFirstPage> LastPageResume()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.LastPageResume();

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

    [HttpPost("LastPageResumeEdit")]
    public ActionResult<BasicReturn> LastPageResumeEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.LastPageResumeEdit(_firstPage);

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

    [HttpGet("DominantProfileName")]
    public ActionResult<StaticFirstPage> DominantProfileName()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.DominantProfileName();

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

    [HttpPost("DominantProfileNameEdit")]
    public ActionResult<BasicReturn> DominantProfileNameEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.DominantProfileNameEdit(_firstPage);

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

    [HttpGet("InternalPartThree")]
    public ActionResult<StaticFirstPage> InternalPartThree()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.InternalPartThree();

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

    [HttpPost("InternalPartThreeEdit")]
    public ActionResult<BasicReturn> InternalPartThreeEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.InternalPartThreeEdit(_firstPage);

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

    [HttpGet("InternalPartnerOne")]
    public ActionResult<StaticFirstPage> InternalPartnerOne()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.InternalPartnerOne();

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

    [HttpPost("InternalPartnerOneEdit")]
    public ActionResult<BasicReturn> InternalPartnerOneEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.InternalPartnerOneEdit(_firstPage);

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

    [HttpGet("InternalPartnerTwo")]
    public ActionResult<StaticFirstPage> InternalPartnerTwo()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.InternalPartnerTwo();

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

    [HttpPost("InternalPartnerTwoEdit")]
    public ActionResult<BasicReturn> InternalPartnerTwoEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.InternalPartnerTwoEdit(_firstPage);

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

    [HttpGet("NameIdealPartner")]
    public ActionResult<StaticFirstPage> NameIdealPartner()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.NameIdealPartner();

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

    [HttpPost("NameIdealPartnerEdit")]
    public ActionResult<BasicReturn> NameIdealPartnerEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.NameIdealPartnerEdit(_firstPage);

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

    [HttpGet("BehavioralResources")]
    public ActionResult<StaticFirstPage> BehavioralResources()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.BehavioralResources();

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

    [HttpPost("BehavioralResourcesEdit")]
    public ActionResult<BasicReturn> BehavioralResourcesEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.BehavioralResourcesEdit(_firstPage);

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

    [HttpGet("CompetentResume")]
    public ActionResult<StaticFirstPage> CompetentResume()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.CompetentResume();

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

    [HttpPost("CompetentResumeEdit")]
    public ActionResult<BasicReturn> CompetentResumeEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.CompetentResumeEdit(_firstPage);

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

    [HttpGet("CompetentLegends")]
    public ActionResult<StaticFirstPage> CompetentLegends()
    {
      StaticFirstPage _return = new StaticFirstPage();

      try
      {
        _return = _myContent.CompetentLegends();

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

    [HttpPost("CompetentLegendsEdit")]
    public ActionResult<BasicReturn> CompetentLegendsEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;

        StaticFirstPage _firstPage = new StaticFirstPage(data.CreatedBy, data.Title_PT, data.Text_PT, data.Title_ENG, data.Text_ENG);

        _myContent.CompetentLegendsEdit(_firstPage);

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