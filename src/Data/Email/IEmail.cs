using Profile4d.Domain;

namespace Profile4d.Data
{
  public interface IEmail
  {
    int CreateEmail(string name, string email, int sentBy, EmailMessageModels.Content content);
    EmailMessage.Message Info(int id);
    void UpdateSendGridInfo(int id, string sgKey);
  }
}