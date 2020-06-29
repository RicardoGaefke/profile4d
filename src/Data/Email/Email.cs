using Microsoft.Extensions.Options;
using System.Data;
using System.Data.SqlClient;
using Profile4d.Domain;

namespace Profile4d.Data
{
  public class Email : IEmail
  {
    private readonly IOptions<Secrets.ConnectionStrings> _connStr;

    public Email(IOptions<Secrets.ConnectionStrings> ConnectionStrings)
    {
      _connStr = ConnectionStrings;
    }

    public void CreateEmail(string name, string email, int sentBy, EmailMessageModels.Content content)
    {
      EmailMessage.Message data = new EmailMessage.Message(name, email, content, sentBy);

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_EMAIL_INSERT]";

          Cmd.Parameters.AddWithValue("@NAME", data.Name);
          Cmd.Parameters.AddWithValue("@EMAIL", data.Email);
          Cmd.Parameters.AddWithValue("@SUBJECT", content.Subject);
          Cmd.Parameters.AddWithValue("@BODY", content.Body);
          Cmd.Parameters.AddWithValue("@SENT_BY", data.SentBy);

          Con.Open();

          Cmd.ExecuteNonQuery();
        }
      }
    }
  }
}