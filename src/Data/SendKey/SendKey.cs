using System;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
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

    public List<Key> ActiveKeys(int user)
    {
      List<Key> _return = new List<Key>();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_KEYS_LIST_ACTIVE]";

          Cmd.Parameters.AddWithValue("@USER", user);

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            while (MyDR.Read())
            {
              Key key = new Key(
                MyDR.GetInt32(0),
                MyDR.GetGuid(1).ToString(),
                (MyDR.IsDBNull(2)) ? DateTime.MinValue : MyDR.GetDateTime(2),
                (MyDR.IsDBNull(3)) ? DateTime.MinValue : MyDR.GetDateTime(3)
              );

              _return.Add(key);
            }
          }
        }
      }

      return _return;
    }

    public Intro Intro()
    {
      Intro _return = new Intro();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_INTRO]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            Image image = new Image(MyDR.GetInt32(0), MyDR.GetString(1), MyDR.GetString(2));

            _return.Image = image;

            MyDR.NextResult();

            MyDR.Read();

            StaticFirstPage texts = new StaticFirstPage(
              MyDR.GetString(0),
              MyDR.GetString(1),
              MyDR.GetString(2),
              MyDR.GetString(3)
            );

            _return.Success = true;

            _return.Texts = texts;
          }
        }
      }

      return _return;
    }

    public Question Question(string guid)
    {
      Question _return = new Question();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_ASSESSMENT]";

          Cmd.Parameters.AddWithValue("@GUID", guid);

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.Id = MyDR.GetInt32(0);
            _return.Text_PT = MyDR.GetString(1);
            _return.Text_ENG = MyDR.GetString(2);
          }
        }
      }

      return _return;
    }

    public void Answer(Question data)
    {
      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_ASSESSMENT_SAVE]";

          Cmd.Parameters.AddWithValue("@QUESTION", data.Id);
          Cmd.Parameters.AddWithValue("@ANSWER", data.Answer);

          Con.Open();

          Cmd.ExecuteNonQuery();
        }
      }
    }
  }
}