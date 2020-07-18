using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using Profile4d.Domain;

namespace Profile4d.Data
{
  public class EmailMI4D : IEmailMI4D
  {
    private readonly IOptions<Secrets.ConnectionStrings> _connStr;

    public EmailMI4D(IOptions<Secrets.ConnectionStrings> ConnectionStrings)
    {
      _connStr = ConnectionStrings;
    }

    public void SaveEmailData(string id, string to, int dequeue)
    {
      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_EMAILS_MI4D_INSERT]";

          Cmd.Parameters.AddWithValue("@SGKEY", id);
          Cmd.Parameters.AddWithValue("@TO", to);
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
          Cmd.CommandText = "[sp_EMAILS_MI4D_LIST]";

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