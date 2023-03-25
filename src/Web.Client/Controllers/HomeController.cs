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
      ViewData["Title"] = "Hextriade";

      Request.HttpContext.Response.Headers.Add("Title", "Hextriade");
      Request.HttpContext.Response.Headers.Add("Description", "Hextriade");

      ViewBag.Page = JsonSerializer.Serialize(new
      {
        Title = "Hextriade",
        Description = "Hextriade",
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

    [AllowAnonymous]
    [HttpGet("answer/reportSete/{guid}")]
    public IActionResult ReportSete()
    {
      ViewData["Title"] = "Hextriade";

      Request.HttpContext.Response.Headers.Add("Title", "Hextriade");
      Request.HttpContext.Response.Headers.Add("Description", "Hextriade description");

      ViewBag.Page = JsonSerializer.Serialize(new
      {
        Title = "Hextriade",
        Description = "Hextriade description",
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
    [HttpGet("answer/report/{guid}/{pdf}")]
    public IActionResult ReportPDF()
    {
      ViewData["Title"] = "Hextriade";

      Request.HttpContext.Response.Headers.Add("Title", "Hextriade");
      Request.HttpContext.Response.Headers.Add("Description", "Hextriade description");

      ViewBag.Page = JsonSerializer.Serialize(new
      {
        Title = "Hextriade",
        Description = "Hextriade description",
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
    [HttpGet("answer/reportSete/{guid}/{pdf}")]
    public IActionResult ReportPDFSete()
    {
      ViewData["Title"] = "Hextriade";

      Request.HttpContext.Response.Headers.Add("Title", "Hextriade");
      Request.HttpContext.Response.Headers.Add("Description", "Hextriade description");

      ViewBag.Page = JsonSerializer.Serialize(new
      {
        Title = "Hextriade",
        Description = "Hextriade description",
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
    [HttpGet("GetPdfFromReportSete/{url}")]
    [ResponseCache(Duration = 31536000)]
    public async Task<ActionResult<object>> GetPdfFromReportSete([FromServices] INodeServices nodeServices, string url)
    {
      try
      {
        string server = _configuration["domain"] == "localhost" ? "localhost:5080" : _configuration["domain"];
        string report = $"https://{server}/answer/reportSete/{url}";
        string result = await nodeServices.InvokeAsync<string>("./React/Components/ReportSete/Pdf/pdfReportSete", report);
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
