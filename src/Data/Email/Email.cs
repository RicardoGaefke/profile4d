using Microsoft.Extensions.Options;
using System.Collections.Generic;
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

    public int CreateEmail(string name, string email, int sentBy, EmailMessageModels.Content content)
    {
      int messageId;

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

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            messageId = MyDR.GetInt32(0);
          }
        }
      }

      return messageId;
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

    public void UpdateSendGridInfo(int id, string sgKey, int dequeue)
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
          Cmd.Parameters.AddWithValue("@DEQUEUE", dequeue);

          Con.Open();

          Cmd.ExecuteNonQuery();
        }
      }
    }

    public IEnumerable<EmailReport> List()
    {
      List<EmailReport> _return = new List<EmailReport>();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_EMAILS_PROFILE4D_LIST]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            while (MyDR.Read())
            {
              EmailReport er = new EmailReport(
                MyDR.GetInt32(0),
                MyDR.GetString(1),
                MyDR.GetInt32(2),
                MyDR.GetString(3),
                MyDR.GetDateTime(4)
              );

              _return.Add(er);
            }
          }
        }
      }

      return _return;
    }
  }
}