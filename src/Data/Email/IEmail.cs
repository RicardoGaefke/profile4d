using Profile4d.Domain;

namespace Profile4d.Data
{
  public interface IEmail
  {
    void CreateEmail(string name, string email, int sentBy, EmailMessageModels.Content content);
  }
}