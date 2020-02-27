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
  public class ImageController : ControllerBase
  {
    private readonly ILogger<IdentityController> _logger;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly Images _myImages;
    private readonly Blob _blob;
    private string _user;

    public ImageController(
      ILogger<IdentityController> logger,
      IHttpContextAccessor httpContextAccessor,
      Images MyImages,
      Blob Blob
    )
    {
      _logger = logger;
      _myImages = MyImages;
      _blob = Blob;

      _httpContextAccessor = httpContextAccessor;
      ClaimsPrincipal currentUser = this.User;

      _user = (from c in _httpContextAccessor.HttpContext.User.Claims
               where c.Type == "UserID"
               select c.Value).FirstOrDefault()
      ;
    }

    [AllowAnonymous]
    [HttpGet("show/{file}")]
    public object Show(string file)
    {
      return File(_blob.ShowImage(file).Content, "image/png");
    }

    [Authorize(Roles = "Admin")]
    [HttpGet("Logo")]
    public ActionResult<Image> Logo()
    {
      Image _return = new Image();

      try
      {
        _return = _myImages.Logo();

        _return.Success = true;

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
    [HttpPost("LogoEdit")]
    public ActionResult<BasicReturn> LogoEdit(Image data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;
        _return = _myImages.LogoEdit(data);
        data.Name = _return.Code + ".png";
        _blob.SaveBase64(data);
        return _return;
      }
      catch (System.Exception ex)
      {
        _return.Success = false;
        _return.Message = ex.Message;
        _return.Code = data.Src;
        _return.Details = ex.StackTrace;

        return _return;
      }
    }

    [Authorize(Roles = "Admin")]
    [HttpGet("ImageTrinoBrain")]
    public ActionResult<Image> ImageTrinoBrain()
    {
      Image _return = new Image();

      try
      {
        _return = _myImages.TrinoBrain();

        _return.Success = true;

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
    [HttpPost("ImageTrinoBrainEdit")]
    public ActionResult<BasicReturn> ImageTrinoBrainEdit(Image data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;
        _return = _myImages.TrinoBrainEdit(data);
        data.Name = _return.Code + ".png";
        _blob.SaveBase64(data);
        return _return;
      }
      catch (System.Exception ex)
      {
        _return.Success = false;
        _return.Message = ex.Message;
        _return.Code = data.Src;
        _return.Details = ex.StackTrace;

        return _return;
      }
    }

    [Authorize(Roles = "Admin")]
    [HttpGet("ImageFourIntelligenceCenters")]
    public ActionResult<Image> ImageFourIntelligenceCenters()
    {
      Image _return = new Image();

      try
      {
        _return = _myImages.FourIntelligenceCenters();

        _return.Success = true;

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
    [HttpPost("ImageFourIntelligenceCentersEdit")]
    public ActionResult<BasicReturn> ImageFourIntelligenceCentersEdit(Image data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;
        _return = _myImages.FourIntelligenceCentersEdit(data);
        data.Name = _return.Code + ".png";
        _blob.SaveBase64(data);
        return _return;
      }
      catch (System.Exception ex)
      {
        _return.Success = false;
        _return.Message = ex.Message;
        _return.Code = data.Src;
        _return.Details = ex.StackTrace;

        return _return;
      }
    }

    [Authorize(Roles = "Admin")]
    [HttpGet("ImageThreeDimensions")]
    public ActionResult<Image> ImageThreeDimensions()
    {
      Image _return = new Image();

      try
      {
        _return = _myImages.ThreeDimension();

        _return.Success = true;

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
    [HttpPost("ImageThreeDimensionsEdit")]
    public ActionResult<BasicReturn> ImageThreeDimensionsEdit(Image data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        data.CreatedBy = _user;
        _return = _myImages.ThreeDimensionEdit(data);
        data.Name = _return.Code + ".png";
        _blob.SaveBase64(data);
        return _return;
      }
      catch (System.Exception ex)
      {
        _return.Success = false;
        _return.Message = ex.Message;
        _return.Code = data.Src;
        _return.Details = ex.StackTrace;

        return _return;
      }
    }
  }
}