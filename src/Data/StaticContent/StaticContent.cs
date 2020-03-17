using Microsoft.Extensions.Options;
using System.Data;
using System.Data.SqlClient;
using Profile4d.Domain;

namespace Profile4d.Data
{
  public class StaticContent : IStaticContent
  {
    private readonly IOptions<Secrets.ConnectionStrings> _connStr;

    public StaticContent(IOptions<Secrets.ConnectionStrings> ConnectionStrings)
    {
      _connStr = ConnectionStrings;
    }

    public StaticFirstPage FirstPage()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_FIRST_PAGE_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn FirstPageEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_FIRST_PAGE_EDIT]";

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

    public StaticFirstPage CompetentMind()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_COMPETENT_MIND_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn CompetentMindEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_COMPETENT_MIND_EDIT]";

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

    public StaticFirstPage WhoIAm()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_WHO_I_AM_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn WhoIAmEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_WHO_I_AM_EDIT]";

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

    public StaticFirstPage DominantName()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_DOMINANT_NAME_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn DominantNameEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_DOMINANT_NAME_EDIT]";

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

    public StaticFirstPage DominantStructure()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_DOMINANT_STRUCTURE_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn DominantStructureEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_DOMINANT_STRUCTURE_EDIT]";

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

    public StaticFirstPage SabotageMode()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_SABOTAGE_MODE_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn SabotageModeEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_SABOTAGE_MODE_EDIT]";

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

    public StaticFirstPage SabotageWhoIAm()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_SABOTAGE_WHO_I_AM_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn SabotageWhoIAmEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_SABOTAGE_WHO_I_AM_EDIT]";

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

    public StaticFirstPage SabotageDominant()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_SABOTAGE_DOMINANT_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn SabotageDominantEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_SABOTAGE_DOMINANT_EDIT]";

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

    public StaticFirstPage SabotageName()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_SABOTAGE_NAME_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn SabotageNameEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_SABOTAGE_NAME_EDIT]";

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

    public StaticFirstPage CompetentXSabotage()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_COMPETENT_SABOTAGE_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn CompetentXSabotageEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_COMPETENT_SABOTAGE_EDIT]";

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

    public StaticFirstPage TrinityBehavioralCompetent()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_TRINITY_BEHAVIORAL_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn TrinityBehavioralCompetentEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_TRINITY_BEHAVIORAL_EDIT]";

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

    public StaticFirstPage InternalPartners()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_INTERNAL_PARTNERS_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn InternalPartnersEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_INTERNAL_PARTNERS_EDIT]";

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

    public StaticFirstPage IntNamePartnerOne()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_INTERNAL_PARTNER_ONE_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn IntNamePartnerOneEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_INTERNAL_PARTNER_ONE_EDIT]";

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

    public StaticFirstPage IntFourPowersOne()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_INTERNAL_FOUR_PARTNERS_ONE_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn IntFourPowersOneEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_INTERNAL_FOUR_PARTNERS_ONE_EDIT]";

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

    public StaticFirstPage IntNamePartnerTwo()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_INTERNAL_PARTNER_TWO_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn IntNamePartnerTwoEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_INTERNAL_PARTNER_TWO_EDIT]";

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

    public StaticFirstPage IntFourPowersTwo()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_INTERNAL_POWERS_TWO_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn IntFourPowersTwoEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_INTERNAL_POWERS_TWO_EDIT]";

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

    public StaticFirstPage TrinityBehaviourSabotage()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_TRINITY_BEHAVIOR_SABOTAGE_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn TrinityBehaviourSabotageEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_TRINITY_BEHAVIOR_SABOTAGE_EDIT]";

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

    public StaticFirstPage InternalEnemies()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_INTERNAL_ENEMIES_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn InternalEnemiesEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_INTERNAL_ENEMIES_EDIT]";

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

    public StaticFirstPage NameSaboteurOne()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_SABOTEUR_ONE_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn NameSaboteurOneEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_SABOTEUR_ONE_EDIT]";

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

    public StaticFirstPage SFourPowersOne()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_FOUR_POWERS_ONE_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn SFourPowersOneEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_FOUR_POWERS_ONE_EDIT]";

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

    public StaticFirstPage NameSaboteurTwo()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_NAME_SABOTEUR_TWO_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn NameSaboteurTwoEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_NAME_SABOTEUR_TWO_EDIT]";

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

    public StaticFirstPage SFourPowersTwo()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_FOUR_POWERS_TWO_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn SFourPowersTwoEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_FOUR_POWERS_TWO_EDIT]";

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

    public StaticFirstPage PDI()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_PDI_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn PDIEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_PDI_EDIT]";

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

    public StaticFirstPage Introduction()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_INTRODUCTION_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn IntroductionEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_INTRODUCTION_EDIT]";

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

    public StaticFirstPage PersonalAnalysis()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_PERSONAL_ANALYSIS_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn PersonalAnalysisEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_PERSONAL_ANALYSIS_EDIT]";

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

    public StaticFirstPage InferiorMind()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_INFERIOR_MIND_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn InferiorMindEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_INFERIOR_MIND_EDIT]";

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

    public StaticFirstPage TwoMindWays()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_TWO_MIND_WAYS_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn TwoMindWaysEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_TWO_MIND_WAYS_EDIT]";

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

    public StaticFirstPage DominantProfile()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_DOMINANT_PROFILE_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn DominantProfileEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_DOMINANT_PROFILE_EDIT]";

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

    public StaticFirstPage CompetentMode()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_COMPETENT_MODE_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn CompetentModeEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_COMPETENT_MODE_EDIT]";

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

    public StaticFirstPage DominantWhoIAm()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_WHO_I_AM_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn DominantWhoIAmEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_WHO_I_AM_EDIT]";

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

    public StaticFirstPage NameProfileOne()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_NAME_PROFILE_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn NameProfileOneEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_NAME_PROFILE_EDIT]";

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

    public StaticFirstPage DominantResources()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_DOMINANT_RESOURCES_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn DominantResourcesEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_DOMINANT_RESOURCES_EDIT]";

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

    public StaticFirstPage FourPersonalPowers()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_FOUR_PERSONAL_POWERS_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn FourPersonalPowersEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_FOUR_PERSONAL_POWERS_EDIT]";

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

    public StaticFirstPage YourMotivations()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_YOUR_MOTIVATIONS_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn YourMotivationsEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_YOUR_MOTIVATIONS_EDIT]";

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

    public StaticFirstPage AttentionFocus()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_ATTENTION_FOCUS_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn AttentionFocusEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_ATTENTION_FOCUS_EDIT]";

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

    public StaticFirstPage LeaderDifferential()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_LEADER_DIFFERENTIAL_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn LeaderDifferentialEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_LEADER_DIFFERENTIAL_EDIT]";

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

    public StaticFirstPage RelationedValuesDomProfile()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_RELATIONED_VALUES]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn RelationedValuesDomProfileEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_RELATIONED_VALUES_EDIT]";

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

    public StaticFirstPage CompetentEmotional()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_COMPETENT_EMOTIONAL]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn CompetentEmotionalEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_COMPETENT_EMOTIONAL_EDIT]";

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

    public StaticFirstPage CommunicatesMode()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_COMMUNICATES_MODE_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn CommunicatesModeEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_COMMUNICATES_MODE_EDIT]";

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

    public StaticFirstPage InteractsRelationships()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_INTERACTS_RELATIONSHIPS_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn InteractsRelationshipsEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_INTERACTS_RELATIONSHIPS_EDIT]";

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

    public StaticFirstPage NameProfileTwo()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_NAME_PROFILE_TWO_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn NameProfileTwoEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_NAME_PROFILE_TWO_EDIT]";

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

    public StaticFirstPage SynthesisSaboteur()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_SYSTHESIS_SABOTEUR_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn SynthesisSaboteurEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_SYSTHESIS_SABOTEUR_EDIT]";

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

    public StaticFirstPage LimitingMatrix()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_LIMITING_MATRIX_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn LimitingMatrixEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_LIMITING_MATRIX_EDIT]";

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

    public StaticFirstPage CommunicationDifficulty()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_COMMUNICATION_DIFFICULTIY_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn CommunicationDifficultyEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_COMMUNICATION_DIFFICULTIY_EDIT]";

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

    public StaticFirstPage DifficultyRelationships()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_DIFFICULTY_RELATIONSHIPS_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn DifficultyRelationshipsEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_DIFFICULTY_RELATIONSHIPS_EDIT]";

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

    public StaticFirstPage FourLimitationPowers()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_FOUR_LIMITATION_POWER_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn FourLimitationPowersEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_FOUR_LIMITATION_POWER_EDIT]";

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

    public StaticFirstPage LimitingAttitudes()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_LIMITING_ATTITUDES_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn LimitingAttitudesEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_LIMITING_ATTITUDES_EDIT]";

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

    public StaticFirstPage BehavioralAddiction()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_BEHAVIORAL_ADDICTION_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn BehavioralAddictionEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_BEHAVIORAL_ADDICTION_EDIT]";

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

    public StaticFirstPage EmotionalAddiction()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_EMOTIONAL_ADDICTION_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn EmotionalAddictionEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_EMOTIONAL_ADDICTION_EDIT]";

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

    public StaticFirstPage MentalAddiction()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_MENTAL_ADDICTION_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn MentalAddictionEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_MENTAL_ADDICTION_EDIT]";

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

    public StaticFirstPage DefenseMecanisms()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_DEFENSE_MECHANISMS_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn DefenseMecanismsEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_DEFENSE_MECHANISMS_EDIT]";

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

    public StaticFirstPage NeuroticCompulsion()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_NEUROTIC_COMPULSION_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn NeuroticCompulsionEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_NEUROTIC_COMPULSION_EDIT]";

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

    public StaticFirstPage CompetentModeOne()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_COMPETENT_MODE_ONE_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn CompetentModeOneEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_COMPETENT_MODE_ONE_EDIT]";

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

    public StaticFirstPage SaboteurModeOne()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_SABOTEUR_MODE_ONE_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn SaboteurModeOneEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_SABOTEUR_MODE_ONE_EDIT]";

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

    public StaticFirstPage DoYouSee()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_DO_YOU_SEE_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn DoYouSeeEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_DO_YOU_SEE_EDIT]";

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

    public StaticFirstPage DifficultyComunnication()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_DIFFICULT_COMUNNICATION_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn DifficultyComunnicationEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_DIFFICULT_COMUNNICATION_EDIT]";

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

    public StaticFirstPage NameProfileThree()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_NAME_PROFILE_THREE_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn NameProfileThreeEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_NAME_PROFILE_THREE_EDIT]";

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

    public StaticFirstPage FourPersonalityPowers()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_FOUR_PERSONALITY_POWERS_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn FourPersonalityPowersEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_FOUR_PERSONALITY_POWERS_EDIT]";

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

    public StaticFirstPage NameProfileFour()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_NAME_PROFILE_FOUR_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn NameProfileFourEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_NAME_PROFILE_FOUR_EDIT]";

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

    public StaticFirstPage FirstFourLimitateForces()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_FIRST_FOUR_FORCES_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn FirstFourLimitateForcesEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_FIRST_FOUR_FORCES_EDIT]";

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

    public StaticFirstPage InternalEnemyOne()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_INTERNAL_ENEMY_ONE_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn InternalEnemyOneEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_INTERNAL_ENEMY_ONE_EDIT]";

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

    public StaticFirstPage SaboteurNameOne()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_SABOTEUR_NAME_ONE_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn SaboteurNameOneEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_SABOTEUR_NAME_ONE_EDIT]";

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

    public StaticFirstPage SecondFourLimitateForces()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_SECOND_FOUR_LIMITATE_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn SecondFourLimitateForcesEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_SECOND_FOUR_LIMITATE_EDIT]";

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

    public StaticFirstPage InternalEnemyTwo()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_INTERNAL_ENEMY_TWO_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn InternalEnemyTwoEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_INTERNAL_ENEMY_TWO_EDIT]";

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

    public StaticFirstPage SaboteurNameTwo()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_SABOTEUR_NAME_TWO_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn SaboteurNameTwoEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_SABOTEUR_NAME_TWO_EDIT]";

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

    public StaticFirstPage LimitationFourPowers()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_LIMITATION_FOUR_POWERS_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn LimitationFourPowersEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_LIMITATION_FOUR_POWERS_EDIT]";

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

    public StaticFirstPage ThreeIntelligenceCenters()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_THREE_INTELLIGENCE_CENTERS_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn ThreeIntelligenceCentersEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_THREE_INTELLIGENCE_CENTERS_EDIT]";

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

    public StaticFirstPage ThreeCentersLegend()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_THREE_CENTERS_LEGEND_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn ThreeCentersLegendEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_THREE_CENTERS_LEGEND_EDIT]";

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

    public StaticFirstPage BehavioralRespectiveEnergies()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_BEHAVIORAL_ENERGIES_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn BehavioralRespectiveEnergiesEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_BEHAVIORAL_ENERGIES_EDIT]";

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

    public StaticFirstPage AttentionPoints()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_ATTENTION_POINTS_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn AttentionPointsEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_ATTENTION_POINTS_EDIT]";

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

    public StaticFirstPage IdentifiedConflicts()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_IDENTIFIED_CONFLICTS_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn IdentifiedConflictsEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_IDENTIFIED_CONFLICTS_EDIT]";

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

    public StaticFirstPage EnergySpikes()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_ENERGY_SPIKES_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn EnergySpikesEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_ENERGY_SPIKES_EDIT]";

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

    public StaticFirstPage NewWhoAmI()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_NEW_WHO_AM_I_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn NewWhoAmIEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_NEW_WHO_AM_I_EDIT]";

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

    public StaticFirstPage TriadBehavioralLegend()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_TRIAD_BEHAVIORAL_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn TriadBehavioralLegendEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_TRIAD_BEHAVIORAL_EDIT]";

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

    public StaticFirstPage HomogeneousHeterogeneous()
    {
      StaticFirstPage _return = new StaticFirstPage();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_HOMOGENEOUS_READ]";

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            _return.CreatedBy = MyDR.GetString(0);
            _return.Created = MyDR.GetDateTime(1).ToLongDateString();
            _return.Title_PT = MyDR.GetString(2);
            _return.Text_PT = MyDR.GetString(3);
            _return.Title_ENG = MyDR.GetString(4);
            _return.Text_ENG = MyDR.GetString(5);
          }
        }
      }

      _return.Success = true;

      return _return;
    }

    public BasicReturn HomogeneousHeterogeneousEdit(StaticFirstPage data)
    {
      BasicReturn _return = new BasicReturn();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_STATIC_HOMOGENEOUS_EDIT]";

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