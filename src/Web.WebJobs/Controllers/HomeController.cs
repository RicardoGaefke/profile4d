using System.Diagnostics;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Logging;
using Profile4d.Web.WebJobs.Models;

namespace Profile4d.Web.WebJobs.Controllers
{
  public class HomeController : Controller
  {
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
      _logger = logger;
    }

    // [Authorize(Roles = "Admin")]
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
        Drawer = true,
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
