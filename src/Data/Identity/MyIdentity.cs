using System;
using System.Collections.Generic;
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

    public User SignIn(string email, string password)
    {
      User _myUser = new User();
      
      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_SIGNIN]";

          Cmd.Parameters.AddWithValue("@EMAIL", email);
          Cmd.Parameters.AddWithValue("@PASSWORD", password);

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            if (MyDR.HasRows)
            {
              List<string> _roles = new List<string>();
              
              MyDR.Read();

              _myUser.Id = MyDR.GetInt32(0);
              _myUser.Name = MyDR.GetString(1);
              _myUser.Email = MyDR.GetString(2);
              _myUser.LastChanged = MyDR.GetDateTime(3).ToString();

              MyDR.NextResult();

              while (MyDR.Read())
              {
                _roles.Add(MyDR.GetString(0));
              }

              _myUser.Roles = _roles;
              _myUser.Success = true;

              return _myUser;
            }
            else
            {
              _myUser.Success = false;

              return _myUser;
            }
          }
        }
      }
    }

    public BasicReturn ValidateLastChanged(string user, string lastChanged, string url)
    {
      BasicReturn _return = new BasicReturn();

      int _user = Convert.ToInt32(user);
      DateTime _lastChanged = new DateTime(Convert.ToInt32(lastChanged));

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_VALIDATE_LAST_CHANGED]";

          Cmd.Parameters.AddWithValue("@USER", user);
          Cmd.Parameters.AddWithValue("@LAST_CHANGED", lastChanged);
          Cmd.Parameters.AddWithValue("@URL", url);

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            if (MyDR.HasRows)
            {
              MyDR.Read();

              _return.Success = MyDR.GetBoolean(0);
            }
            else
            {
              _return.Success = false;
            }
          }
        }
      }

      return _return;
    }

    public void SignOut(int UserID)
    {
      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_SIGNOUT]";

          Cmd.Parameters.AddWithValue("@USER", UserID);

          Con.Open();

          Cmd.ExecuteNonQuery();
        }
      }
    }
  }
}