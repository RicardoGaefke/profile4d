using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using Profile4d.Domain;

namespace Profile4d.Data
{
  public class Questions : IQuestions
  {
    private readonly IOptions<Secrets.ConnectionStrings> _connStr;

    public Questions(IOptions<Secrets.ConnectionStrings> ConnectionStrings)
    {
      _connStr = ConnectionStrings;
    }

    public Question.List List()
    {
      Question.List _return = new Question.List();
      List<Question> _list = new List<Question>();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_QUESTIONS_LIST]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            while (MyDR.Read())
            {
              Question _question = new Question(
                MyDR.GetGuid(0).ToString(),
                MyDR.GetBoolean(1),
                MyDR.GetDateTime(2).ToString("yyyy-MM-dd HH:mm:ss.fff"),
                MyDR.GetString(3),
                MyDR.GetString(4),
                MyDR.GetString(5),
                MyDR.GetString(6),
                MyDR.GetString(7),
                MyDR.GetDateTime(8).ToString("yyyy-MM-dd HH:mm:ss.fff"),
                MyDR.GetString(9)
              );

              _list.Add(_question);
            }
          }
        }
      }

      _return.Questions = _list;
      _return.Success = true;

      return _return;
    }

    public BasicReturn Add(Question data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_QUESTIONS_ADD]";

          Cmd.Parameters.AddWithValue("@USER", data.CreatedBy);
          Cmd.Parameters.AddWithValue("@TITLE_PT", data.Title_PT);
          Cmd.Parameters.AddWithValue("@TEXT_PT", data.Text_PT);
          Cmd.Parameters.AddWithValue("@TITLE_ENG", data.Title_ENG);
          Cmd.Parameters.AddWithValue("@TEXT_ENG", data.Text_ENG);

          Con.Open();

          Cmd.ExecuteNonQuery();
        }
      }

      _return.Success = true;

      return _return;
    }
  }
}