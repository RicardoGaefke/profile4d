using System;
using Profile4d.Domain;
namespace Profile4d.Data
{
  public interface IMyIdentity
  {
    public User SignIn(string email, string password);
    public BasicReturn ValidateLastChanged(string user, string lastChanged, string url);

    public void SignOut(int UserID);
  }
}