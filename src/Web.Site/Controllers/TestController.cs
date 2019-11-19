using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Profile4d.Domain;
using Profile4d.Email;

namespace Profile4d.Web.Site.Controllers
{
  [Route("api/test")]
  [ApiController]
  public class TestController : ControllerBase
  {
    private readonly IOptions<Secrets.ConnectionStrings> _myConnStr;
    private readonly MyEmail _myEmail;

    public TestController(IOptions<Secrets.ConnectionStrings> ConnectionString, MyEmail MyEmail)
    {
      _myConnStr = ConnectionString;
      _myEmail = MyEmail;
    }

    [HttpGet("blob")]
    public string GetBlob()
    {
      return _myEmail.SendGridKey();
    }
  }
}