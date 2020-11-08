using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

using Profile4d.Domain;

namespace Profile4d.Data
{
  public class DataReport : IDataReport
  {
    private readonly IOptions<Secrets.ConnectionStrings> _connStr;

    public DataReport(IOptions<Secrets.ConnectionStrings> ConnectionStrings)
    {
      _connStr = ConnectionStrings;
    }

    public Report GetReport(string guid)
    {
      Report _return = new Report();
      List<Profiles> profiles = new List<Profiles>();
      List<StaticFirstPage> statics = new List<StaticFirstPage>();
      List<Image> images = new List<Image>();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_REPORT]";

          Cmd.Parameters.AddWithValue("@Guid", guid);

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            while (MyDR.Read())
            {
              profiles.Add(
                new Profiles()
                {
                  Name = MyDR.GetString(0),
                  Total = MyDR.GetInt32(1),
                  Color = MyDR.GetString(2),
                  ExternalNumber = MyDR.GetInt32(3),
                  InternalNumber = MyDR.GetInt32(4)
                }
              );
            }

            MyDR.NextResult();

            while (MyDR.Read())
            {
              images.Add(
                new Image()
                {
                  Id = MyDR.GetInt32(0),
                  Src = MyDR.GetInt32(1).ToString(),
                  Alt_PT = MyDR.GetString(2),
                  Alt_ENG = MyDR.GetString(3)
                }
              );
            }

            MyDR.NextResult();

            while (MyDR.Read())
            {
              statics.Add(
                new StaticFirstPage()
                {
                  Id = MyDR.GetInt32(0),
                  Title_PT = MyDR.GetString(1),
                  Text_PT = MyDR.GetString(2),
                  Title_ENG = MyDR.GetString(3),
                  Text_ENG = MyDR.GetString(4)
                }
              );
            }
          }
        }
      }

      _return.Profiles = profiles;
      _return.Images = images;
      _return.StaticContent = statics;

      return _return;
    }
  }
}