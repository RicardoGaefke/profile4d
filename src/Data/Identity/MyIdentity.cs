using System.Runtime.InteropServices.ComTypes;
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

              DateTime dt = MyDR.GetDateTime(3);

              _myUser.LastChanged = string.Format("{0}", dt.ToString("yyyy-MM-dd HH:mm:ss.fff"));

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

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_VALIDATE_LAST_CHANGED]";

          Cmd.Parameters.AddWithValue("@USER", user);
          Cmd.Parameters.AddWithValue("@LAST_CHANGED", Convert.ToDateTime(lastChanged));
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

    public void Record(int UserID, int Status, string Details)
    {
      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_LOGIN_RECORD]";

          Cmd.Parameters.AddWithValue("@USER", UserID);
          Cmd.Parameters.AddWithValue("@STATUS", Status);
          Cmd.Parameters.AddWithValue("@DETAILS", Details);

          Con.Open();

          Cmd.ExecuteNonQuery();
        }
      }
    }

    public void ChangeName(int UserID, string Name, string Password, string Url)
    {
      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_CHANGE_NAME]";

          Cmd.Parameters.AddWithValue("@USER", UserID);
          Cmd.Parameters.AddWithValue("@PASSWORD", Password);
          Cmd.Parameters.AddWithValue("@NAME", Name);
          Cmd.Parameters.AddWithValue("@URL", Url);

          Con.Open();

          Cmd.ExecuteNonQuery();
        }
      }
    }

    public void ChangeEmail(int UserID, string Email, string Password, string Url)
    {
      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_CHANGE_EMAIL]";

          Cmd.Parameters.AddWithValue("@USER", UserID);
          Cmd.Parameters.AddWithValue("@PASSWORD", Password);
          Cmd.Parameters.AddWithValue("@EMAIL", Email);
          Cmd.Parameters.AddWithValue("@URL", Url);

          Con.Open();

          Cmd.ExecuteNonQuery();
        }
      }
    }

    public void ChangePassword(int UserID, string NewPassword, string Password, string Url)
    {
      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_CHANGE_PASSWORD]";

          Cmd.Parameters.AddWithValue("@USER", UserID);
          Cmd.Parameters.AddWithValue("@PASSWORD", Password);
          Cmd.Parameters.AddWithValue("@NEW_PASSWORD", NewPassword);
          Cmd.Parameters.AddWithValue("@URL", Url);

          Con.Open();

          Cmd.ExecuteNonQuery();
        }
      }
    }

    public User ForgotPassword(string email)
    {
      User _return = new User();
      string pwd = User.CreatePassword();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_FORGOT_PASSWORD]";

          Cmd.Parameters.AddWithValue("@EMAIL", email);
          Cmd.Parameters.AddWithValue("@PASSWORD", pwd);

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.Id = MyDR.GetInt32(0);
            _return.Guid = MyDR.GetGuid(1).ToString();
            _return.Name = MyDR.GetString(2);
            _return.Password = pwd;
          }
        }
      }

      return _return;
    }

    public void ForgotActivate(User data)
    {
      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_FORGOT_ACTIVATE]";

          Cmd.Parameters.AddWithValue("@GUID", data.Guid);
          Cmd.Parameters.AddWithValue("@ID", data.Id);

          Con.Open();

          Cmd.ExecuteNonQuery();
        }
      }
    }

    public int CreateUser(User data)
    {
      User user = new User(data.Name, data.Email, data.Password, false);
      
      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_CREATE_USER]";

          Cmd.Parameters.AddWithValue("@NAME", user.Name);
          Cmd.Parameters.AddWithValue("@EMAIL", user.Email);
          Cmd.Parameters.AddWithValue("@PASSWORD", user.Password);

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            return MyDR.GetInt32(0);
          }
        }
      }
    }
  }
}