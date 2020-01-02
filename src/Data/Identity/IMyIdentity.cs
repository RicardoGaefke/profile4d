using System;
using Profile4d.Domain;
namespace Profile4d.Data
{
  public interface IMyIdentity
  {
    public User Login(string email, string password);
    public bool ValidateLastChanged(string user, string lastChanged);
  }
}