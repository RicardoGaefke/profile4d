using Microsoft.Extensions.Options;
using System.Data;
using System.Data.SqlClient;
using Profile4d.Domain;

namespace Profile4d.Data
{
  public class Keys : ISendKey
  {
    private readonly IOptions<Secrets.ConnectionStrings> _connStr;

    public Keys(IOptions<Secrets.ConnectionStrings> ConnectionStrings)
    {
      _connStr = ConnectionStrings;
    }
    public string SendKey(Key data)
    {
      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_SEND_KEY_INSERT]";

          Cmd.Parameters.AddWithValue("@EMAIL", data.Email);
          Cmd.Parameters.AddWithValue("@SENT_BY", data.SentBy);
          Cmd.Parameters.AddWithValue("@CONSULTANT", data.Consultant);

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            return MyDR.GetGuid(0).ToString();
          }
        }
      }
    }

    public string TransferKeys(Key data)
    {
      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_TRANSFER_KEYS_INSERT]";

          Cmd.Parameters.AddWithValue("@EMAIL", data.Email);
          Cmd.Parameters.AddWithValue("@SENT_BY", data.SentBy);
          Cmd.Parameters.AddWithValue("@KEYS", data.Keys);

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            return MyDR.GetGuid(0).ToString();
          }
        }
      }
    }
  }
}