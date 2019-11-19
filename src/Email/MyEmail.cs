using Microsoft.Extensions.Options;
using Profile4d.Domain;

namespace Profile4d.Email
{
  public class MyEmail : IMyEmail
  {
    private readonly IOptions<Secrets.ConnectionStrings> _connectionStrings;

    public MyEmail(IOptions<Secrets.ConnectionStrings> ConnectionStrings)
    {
      _connectionStrings = ConnectionStrings;
    }

    public string SendGridKey()
    {
      return _connectionStrings.Value.SendGrid;
    }
  }
}