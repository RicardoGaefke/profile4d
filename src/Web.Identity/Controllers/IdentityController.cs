using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Profile4d.Data;
using Profile4d.Domain;

namespace Profile4d.Web.Identity
{
  [Route("/")]
  [ApiController]
  public class IdentityController : ControllerBase
  {
    private readonly ILogger<IdentityController> _logger;
    private readonly MyIdentity _identity;

    public IdentityController(
      ILogger<IdentityController> logger,
      MyIdentity identity
    )
    {
      _logger = logger;
      _identity = identity;
    }

    [HttpGet("rememberPassword/{guid}/{id}")]
    public RedirectResult Remember(string guid, string id)
    {
      try
      {
        User data = new User(Convert.ToInt32(id), guid);
        _identity.ForgotActivate(data);
      }
      catch (System.Exception)
      {
        _logger.LogWarning("Password not found");
      }
      return Redirect("/");
    }
  }
}