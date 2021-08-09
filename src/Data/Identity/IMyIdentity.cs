using System.Collections.Generic;
using Profile4d.Domain;
namespace Profile4d.Data
{
  public interface IMyIdentity
  {
    User SignIn(string email, string password);
    BasicReturn ValidateLastChanged(string user, string lastChanged, string url);

    void SignOut(int UserID);

    void Record(int UserID, int Status, string Details);

    void ChangeName(int UserID, string Name, string Password, string Url);
    void ChangeEmail(int UserID, string Email, string Password, string Url);
    void ChangePassword(int UserID, string NewPassword, string Password, string Url);
    User ForgotPassword(string email);
    void ForgotActivate(User data);
    int CreateUser(User data);
    Pagination<IEnumerable<User>> GetUsersForAdminView(Pagination pagination);
  }
}