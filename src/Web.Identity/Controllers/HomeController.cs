using System.Security.Claims;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Profile4d.Web.Identity.Models;

namespace Profile4d.Web.Identity.Controllers
{
  public class HomeController : Controller
  {
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
      _logger = logger;
    }

    public IActionResult Index()
    {
      ViewData["Title"] = "Profile4D";

      Request.HttpContext.Response.Headers.Add("Title", "Profile 4D");
      Request.HttpContext.Response.Headers.Add("Description", "Profile 4D description");

      string _name = "";
      string _email = "";

      if (Request.HttpContext.User.Identity.IsAuthenticated)
      {
        _name = Request.HttpContext.User.Identity.Name;
        _email = (from c in Request.HttpContext.User.Claims
                  where c.Type == ClaimTypes.Email
                  select c.Value).FirstOrDefault()
        ;
      }

      ViewBag.Page = JsonSerializer.Serialize(new
      {
        Title = "Profile4D",
        Description = "Profile4d description",
        IsAuthenticated = Request.HttpContext.User.Identity.IsAuthenticated,
        Name = _name,
        Email = _email,
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
