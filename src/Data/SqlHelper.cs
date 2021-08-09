using System;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;

namespace Profile4d.Data
{
  public class SqlHelper
  {
    public static Int32 ExecuteNotQuery(string connectionString, string procedure, params SqlParameter[] parameters)
    {
      using (SqlConnection Conn = new SqlConnection(connectionString))
      {
        using (SqlCommand Cmd = new SqlCommand(procedure, Conn))
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Parameters.AddRange(parameters);
          Conn.Open();
          return Cmd.ExecuteNonQuery();
        }
      }
    }

    public static object ExecuteScalar(string connectionString, string procedure, params SqlParameter[] parameters)
    {
      using (SqlConnection Conn = new SqlConnection(connectionString))
      {
        using (SqlCommand Cmd = new SqlCommand(procedure, Conn))
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.CommandTimeout = 3000;
          Cmd.Parameters.AddRange(parameters);
          Conn.Open();
          return Cmd.ExecuteScalar();
        }
      }
    }

    public static async Task<object> ExecuteScalarAsync(string connectionString, string procedure, params SqlParameter[] parameters)
    {
      using (SqlConnection Conn = new SqlConnection(connectionString))
      {
        using (SqlCommand Cmd = new SqlCommand(procedure, Conn))
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.CommandTimeout = 3000;
          Cmd.Parameters.AddRange(parameters);
          Conn.Open();
          object value = await Cmd.ExecuteScalarAsync();
          await Conn.CloseAsync();
          return value;
        }
      }
    }

    public static SqlDataReader ExecuteReader(string connectionString, string procedure, params SqlParameter[] parameters)
    {
      SqlConnection Conn = new SqlConnection(connectionString);
      using (SqlCommand Cmd = new SqlCommand(procedure, Conn))
      {
        Cmd.CommandType = CommandType.StoredProcedure;
        Cmd.CommandTimeout = 3000;
        Cmd.Parameters.AddRange(parameters);
        Conn.Open();
        SqlDataReader reader = Cmd.ExecuteReader(CommandBehavior.CloseConnection);
        return reader;
      }
    }
  }
}
