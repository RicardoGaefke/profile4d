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

    public EmailMessage.Message Info(int id)
    {
      EmailMessage.Message _return = new EmailMessage.Message();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_EMAIL_INFO]";

          Cmd.Parameters.AddWithValue("@ID", id);

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.Name = MyDR.GetString(0);
            _return.Email = MyDR.GetString(1);

            EmailMessageModels.Content content = new EmailMessageModels.Content(
              MyDR.GetString(2),
              MyDR.GetString(3)
            );

            _return.Content = content;
          }
        }
      }

      return _return;
    }

    public void UpdateSendGridInfo(int id, string sgKey)
    {
      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_EMAIL_INFO_UPDATE]";

          Cmd.Parameters.AddWithValue("@ID", id);
          Cmd.Parameters.AddWithValue("@SENDGRID_KEY", sgKey);

          Con.Open();

          Cmd.ExecuteNonQuery();
        }
      }
    }
  }
}