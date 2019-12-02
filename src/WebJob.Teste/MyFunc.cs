using System;
using Microsoft.Extensions.Options;
using Profile4d.Domain;
using Profile4d.Email;

namespace Profile4d.WebJob.Teste
{
  public class MyFunc : IMyFunc
  {
    private readonly IOptions<Secrets.ConnectionStrings> _myConnStr;

    public MyFunc(IOptions<Secrets.ConnectionStrings> ConnectionString)
    {
      _myConnStr = ConnectionString;
      Console.WriteLine("myfunc const");
    }

    public string SGKey()
    {
      Console.WriteLine("SG injected: " + _myConnStr.Value.SendGrid);
      return _myConnStr.Value.SendGrid;
    }
  }
}