using System;
using System.Collections.Generic;
using System.Linq;

namespace Profile4d.Domain
{
  public class User : BasicReturn
  {
    public int Id {get; set;}
    public string Guid {get; set;}
    public string Name {get; set;}
    public string Email {get; set;}
    public string Password {get; set;}
    public string NewPassword { get; set; }
    public bool Active {get; set;}
    public bool Admin { get; set; }
    public bool KeepConnected { get; set; }
    public bool IsAuthenticated {get; set;}
    public string LastChanged {get; set;}
    public List<string> Roles {get; set;}
    public int CreatedBy { get; set; }

    private static Random random = new Random();
    public static string CreatePassword()
    {
      const string chars = "ABCDEFGHIJKLMNPQRSTUVWXYZ123456789";
      return new string(Enumerable.Repeat(chars, 6)
      .Select(s => s[random.Next(s.Length)]).ToArray());
    }

    public User(string email, string password, bool keepConnected)
    {
      DomainException.When(!string.IsNullOrEmpty(email), "Email is required!");
      DomainException.When(!string.IsNullOrEmpty(password), "Password is required!");

      this.Email = email;
      this.Password = password;
      this.KeepConnected = keepConnected;
    }

    public User(int id, string guid = "")
    {
      this.Id = id;
      this.Guid = guid;
    }

    public User(string email)
    {
      DomainException.When(!string.IsNullOrEmpty(email), "Email is required!");

      this.Email = email;
    }

    public User(string name, string email, string password, bool? admin)
    {
      DomainException.When(!string.IsNullOrEmpty(name), "Name is required!");
      DomainException.When(!string.IsNullOrEmpty(email), "Email is required!");
      DomainException.When(!string.IsNullOrEmpty(password), "Password is required!");
      DomainException.When(!(password.Length < 6), "Password minimum 6 chars!");

      this.Name = name;
      this.Email = email;
      this.Password = password;
    }

    public User(string email, string password)
    {
      DomainException.When(!string.IsNullOrEmpty(email), "Email is required!");
      DomainException.When(!string.IsNullOrEmpty(password), "Password is required!");

      this.Email = email;
      this.Password = password;
    }

    public User(string id, string name, string email)
    {
      DomainException.When(!string.IsNullOrEmpty(id), "Id is required!");
      DomainException.When(!string.IsNullOrEmpty(name), "Name is required!");
      DomainException.When(!string.IsNullOrEmpty(email), "Email is required!");

      this.Id = Convert.ToInt32(id);
      this.Name = name;
      this.Email = email;
    }

    public User()
    {
      this.Success = true;
    }
  }
}