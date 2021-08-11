using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Security.Claims;
using Profile4d.Data;
using Profile4d.Domain;

namespace Profile4d.Web.Api.Controllers
{
  [ApiController]
  [Route("[controller]")]
  [Authorize]
  public class EmailsController : ControllerBase
  {
    private readonly ILogger<EmailsController> _logger;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly IEmailMI4D _emailMI4D;
    private readonly IEmail _email;

    public EmailsController(
      ILogger<EmailsController> logger,
      IHttpContextAccessor httpContextAccessor,
      IEmailMI4D emailMI4D,
      IEmail email
    )
    {
      _logger = logger;
      _httpContextAccessor = httpContextAccessor;
      _emailMI4D = emailMI4D;
      _email = email;
    }

    [Authorize(Roles = "Admin")]
    [HttpGet("MI4D")]
    public IEnumerable<EmailReport> MI4D()
    {
      return _emailMI4D.List();
    }

    [Authorize(Roles = "Admin")]
    [HttpGet("Profile4D")]
    public IEnumerable<EmailReport> Profile4D()
    {
      return _email.List();
    }
  }
}
