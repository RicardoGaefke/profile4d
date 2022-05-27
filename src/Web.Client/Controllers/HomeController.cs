using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.NodeServices;
using Profile4d.Web.Client.Models;
using Profile4d.Domain;

namespace Profile4d.Web.Client
{
  public class HomeController : Controller
  {
    private readonly ILogger<HomeController> _logger;
    private readonly IConfiguration _configuration;

    public HomeController(ILogger<HomeController> logger, IConfiguration configuration)
    {
      _logger = logger;
      _configuration = configuration;
    }

    [Authorize]
    public IActionResult Index()
    {
      ViewData["Title"] = "Performance 9x";

      Request.HttpContext.Response.Headers.Add("Title", "Performance 9x");
      Request.HttpContext.Response.Headers.Add("Description", "Performance 9x description");

      ViewBag.Page = JsonSerializer.Serialize(new
      {
        Title = "Performance 9x",
        Description = "Performance 9x description",
        IsAuthenticated = false,
        Name = "",
        Email = "",
        Language = "PT",
        Theme = "light",
        Drawer = false,
        Config = false
      });
      
      return View();
    }

    [HttpGet("answer/report/{guid}/{pdf}")]
    public IActionResult Report()
    {
      ViewData["Title"] = "Performance 9x";

      Request.HttpContext.Response.Headers.Add("Title", "Performance 9x");
      Request.HttpContext.Response.Headers.Add("Description", "Performance 9x description");

      ViewBag.Page = JsonSerializer.Serialize(new
      {
        Title = "Meu Perfil 4D",
        Description = "Meu Perfil 4D description",
        IsAuthenticated = false,
        Name = "",
        Email = "",
        Language = "PT",
        Theme = "light",
        Drawer = false,
        Config = false
      });

      return View("Index");
    }

    [AllowAnonymous]
    [HttpGet("GetPdfFromReport/{url}")]
    [ResponseCache(Duration = 31536000)]
    public async Task<ActionResult<object>> GetPdfFromReport([FromServices]INodeServices nodeServices, string url)
    {
      try
      {
        string server = _configuration["domain"] == "localhost" ? "localhost:5080" : _configuration["domain"];
        string report = $"https://{server}/answer/report/{url}";
        string result = await nodeServices.InvokeAsync<string>("./React/Components/Report/Pdf/pdfReport", report);
        byte[] bytes = Convert.FromBase64String(result);
        return File(bytes, "application/pdf");
      }
      catch (System.Exception ex)
      {
        return StatusCode(500, ex.Message);
      }
    }

    [AllowAnonymous]
    [HttpGet("GetSimpleSum")]
    public async Task<ActionResult<object>> GetSimpleSum([FromServices] INodeServices nodeServices)
    {
      var result = await nodeServices.InvokeAsync<object>("./React/Components/Report/Pdf/simpleSum", 5, 4);
      return result;
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
      return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
  }
}
