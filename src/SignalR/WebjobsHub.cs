using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Profile4d.Domain;

namespace Profile4d.SignalR
{
  public class WebJobsHub : Hub<IWebJobsClient>
  {
    public async Task MI4D(string id)
    {
      await Clients.All.MI4D(id);
    }

    public async Task Profile4D(string id)
    {
      await Clients.All.Profile4D(id);
    }
  }
}