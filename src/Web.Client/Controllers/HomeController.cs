using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Logging;
using Profile4d.Web.Client.Models;

namespace Profile4d.Web.Client
{
  public class HomeController : Controller
  {
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
      _logger = logger;
    }

    [Authorize]
    public IActionResult Index()
    {
      ViewData["Title"] = "Profile4D";

      Request.HttpContext.Response.Headers.Add("Title", "Profile 4D");
      Request.HttpContext.Response.Headers.Add("Description", "Profile 4D description");

      ViewBag.Page = JsonSerializer.Serialize(new
      {
        Title = "Profile4D",
        Description = "Profile4d description",
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

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
      return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
  }
}
