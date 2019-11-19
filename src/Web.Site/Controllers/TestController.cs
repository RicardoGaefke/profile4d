using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Profile4d.Domain;

namespace Profile4d.Web.Site.Controllers
{
  [Route("api/test")]
  [ApiController]
  public class TestController : ControllerBase
  {
    private readonly IOptions<Secrets.ConnectionStrings> _myConnStr;

    public TestController(IOptions<Secrets.ConnectionStrings> ConnectionString)
    {
      _myConnStr = ConnectionString;
    }

    [HttpGet("blob")]
    public string GetBlob()
    {
      return _myConnStr.Value.Storage;
    }
  }
}