using System.IO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Profile4d.Data;
using Profile4d.Storage;
using Profile4d.Domain;

namespace Profile4d.Web.Api.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class ImageController : ControllerBase
  {
    private readonly ILogger<IdentityController> _logger;
    private readonly Images _myImages;
    private readonly Blob _blob;
    private string _user;

    public ImageController(ILogger<IdentityController> logger, Images MyImages, Blob Blob)
    {
      _logger = logger;
      _myImages = MyImages;
      _blob = Blob;
      _user = "1";
    }

    [HttpGet("show/{id}")]
    [Produces("image/png")]
    public object Show(string id)
    {
      return _blob.ShowImage(id);
    }

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
  }
}