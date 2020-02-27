using Microsoft.Extensions.Options;
using System.Data;
using System.Data.SqlClient;
using Profile4d.Domain;

namespace Profile4d.Data
{
  public class Images : IImages
  {
    private readonly IOptions<Secrets.ConnectionStrings> _connStr;

    public Images(IOptions<Secrets.ConnectionStrings> ConnectionStrings)
    {
      _connStr = ConnectionStrings;
    }
    public Image Logo()
    {
      Image _return = new Image();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_IMAGE_LOGO_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.Id = MyDR.GetInt32(0);
            _return.CreatedBy = MyDR.GetString(1);
            _return.Created = MyDR.GetDateTime(2).ToLongDateString();
            _return.Alt_PT = MyDR.GetString(3);
            _return.Alt_ENG = MyDR.GetString(4);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn LogoEdit(Image data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_IMAGE_LOGO_EDIT]";

          Cmd.Parameters.AddWithValue("@MIME", data.Mime);
          Cmd.Parameters.AddWithValue("@USER", data.CreatedBy);
          Cmd.Parameters.AddWithValue("@ALT_PT", data.Alt_PT);
          Cmd.Parameters.AddWithValue("@ALT_ENG", data.Alt_ENG);

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.Code = MyDR.GetInt32(0).ToString();
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public Image TrinoBrain()
    {
      Image _return = new Image();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_IMAGE_TRINO_BRAIN_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.Id = MyDR.GetInt32(0);
            _return.CreatedBy = MyDR.GetString(1);
            _return.Created = MyDR.GetDateTime(2).ToLongDateString();
            _return.Alt_PT = MyDR.GetString(3);
            _return.Alt_ENG = MyDR.GetString(4);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn TrinoBrainEdit(Image data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_IMAGE_TRINO_BRAIN_EDIT]";

          Cmd.Parameters.AddWithValue("@MIME", data.Mime);
          Cmd.Parameters.AddWithValue("@USER", data.CreatedBy);
          Cmd.Parameters.AddWithValue("@ALT_PT", data.Alt_PT);
          Cmd.Parameters.AddWithValue("@ALT_ENG", data.Alt_ENG);

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.Code = MyDR.GetInt32(0).ToString();
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public Image FourIntelligenceCenters()
    {
      Image _return = new Image();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_IMAGE_FOUR_INTELLIGENCE_CENTERS_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.Id = MyDR.GetInt32(0);
            _return.CreatedBy = MyDR.GetString(1);
            _return.Created = MyDR.GetDateTime(2).ToLongDateString();
            _return.Alt_PT = MyDR.GetString(3);
            _return.Alt_ENG = MyDR.GetString(4);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn FourIntelligenceCentersEdit(Image data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_IMAGE_FOUR_INTELLIGENCE_CENTERS_EDIT]";

          Cmd.Parameters.AddWithValue("@MIME", data.Mime);
          Cmd.Parameters.AddWithValue("@USER", data.CreatedBy);
          Cmd.Parameters.AddWithValue("@ALT_PT", data.Alt_PT);
          Cmd.Parameters.AddWithValue("@ALT_ENG", data.Alt_ENG);

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.Code = MyDR.GetInt32(0).ToString();
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public Image ThreeDimension()
    {
      Image _return = new Image();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_IMAGE_THREE_DIMENSION_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.Id = MyDR.GetInt32(0);
            _return.CreatedBy = MyDR.GetString(1);
            _return.Created = MyDR.GetDateTime(2).ToLongDateString();
            _return.Alt_PT = MyDR.GetString(3);
            _return.Alt_ENG = MyDR.GetString(4);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn ThreeDimensionEdit(Image data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_IMAGE_THREE_DIMENSION_EDIT]";

          Cmd.Parameters.AddWithValue("@MIME", data.Mime);
          Cmd.Parameters.AddWithValue("@USER", data.CreatedBy);
          Cmd.Parameters.AddWithValue("@ALT_PT", data.Alt_PT);
          Cmd.Parameters.AddWithValue("@ALT_ENG", data.Alt_ENG);

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.Code = MyDR.GetInt32(0).ToString();
          }
        }
      }

      _return.Success = true;

      return _return;
    }
    public Image FourStages()
    {
      Image _return = new Image();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_IMAGE_FOUR_STAGES_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.Id = MyDR.GetInt32(0);
            _return.CreatedBy = MyDR.GetString(1);
            _return.Created = MyDR.GetDateTime(2).ToLongDateString();
            _return.Alt_PT = MyDR.GetString(3);
            _return.Alt_ENG = MyDR.GetString(4);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn FourStagesEdit(Image data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_IMAGE_FOUR_STAGES_EDIT]";

          Cmd.Parameters.AddWithValue("@MIME", data.Mime);
          Cmd.Parameters.AddWithValue("@USER", data.CreatedBy);
          Cmd.Parameters.AddWithValue("@ALT_PT", data.Alt_PT);
          Cmd.Parameters.AddWithValue("@ALT_ENG", data.Alt_ENG);

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.Code = MyDR.GetInt32(0).ToString();
          }
        }
      }

      _return.Success = true;

      return _return;
    }
  }
}