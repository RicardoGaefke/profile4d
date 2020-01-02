using System;

namespace Profile4d.Data
{
  public interface IMyIdentity
  {
    public bool Login(string email, string password);
    // public bool ValidateLastChanged(DateTime LastChanged);
  }
}