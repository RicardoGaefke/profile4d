using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Profile4d.Web.Site.Models;

namespace Web.Teste.Controllers
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
      ViewData["Title"] = "Meu Perfil 4D";

      Request.HttpContext.Response.Headers.Add("Title", "Meu Perfil 4D");
      Request.HttpContext.Response.Headers.Add("Description", "Meu Perfil 4D description");

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
      
      return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
      return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
  }
}
