using Microsoft.Extensions.Options;
using System.Data;
using System.Data.SqlClient;
using Profile4d.Domain;

namespace Profile4d.Data
{
  public class MyIdentity : IMyIdentity
  {
    private readonly IOptions<Secrets.ConnectionStrings> _connStr;

    public MyIdentity(IOptions<Secrets.ConnectionStrings> ConnectionStrings)
    {
      _connStr = ConnectionStrings;
    }

    public bool Login(string email, string password)
    {
      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_LOGIN]";

          Cmd.Parameters.AddWithValue("@EMAIL", email);
          Cmd.Parameters.AddWithValue("@PASSWORD", password);

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            if (MyDR.HasRows)
            {
              MyDR.Read();

              return MyDR.GetBoolean(0);
            }
            else
            {
              return false;
            }
          }
        }
      }
    }
  }
}