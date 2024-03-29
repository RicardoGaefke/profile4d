using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
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
          Cmd.Parameters.AddWithValue("@BLOCK_RESULT", data.BlockResult);

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
                (MyDR.IsDBNull(3)) ? DateTime.MinValue : MyDR.GetDateTime(3),
                MyDR.GetBoolean(4),
                MyDR.GetString(5),
                MyDR.GetString(6),
                (MyDR.IsDBNull(7)) ? DateTime.MinValue : MyDR.GetDateTime(7),
                MyDR.GetInt32(8)
              );

              _return.Add(key);
            }
          }
        }
      }

      return _return;
    }

    public List<Key> ActiveKeysByUserGuid(User user)
    {
      List<Key> _return = new List<Key>();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[spKeysListByUserGuid]";

          Cmd.Parameters.AddWithValue("@UserGuid", user.Guid);

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            while (MyDR.Read())
            {
              Key key = new Key(
                MyDR.GetInt32(0),
                MyDR.GetGuid(1).ToString(),
                (MyDR.IsDBNull(2)) ? DateTime.MinValue : MyDR.GetDateTime(2),
                (MyDR.IsDBNull(3)) ? DateTime.MinValue : MyDR.GetDateTime(3),
                MyDR.GetBoolean(4),
                MyDR.GetString(5),
                MyDR.GetString(6),
                (MyDR.IsDBNull(7)) ? DateTime.MinValue : MyDR.GetDateTime(7)
              );

              _return.Add(key);
            }
          }
        }
      }

      return _return;
    }

    public List<Key> ActiveKeysByConsultantGuid(User user)
    {
      List<Key> _return = new List<Key>();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[spKeysListByConsultantGuid]";

          Cmd.Parameters.AddWithValue("@UserGuid", user.Guid);

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            while (MyDR.Read())
            {
              Key key = new Key(
                MyDR.GetInt32(0),
                MyDR.GetGuid(1).ToString(),
                (MyDR.IsDBNull(2)) ? DateTime.MinValue : MyDR.GetDateTime(2),
                (MyDR.IsDBNull(3)) ? DateTime.MinValue : MyDR.GetDateTime(3),
                MyDR.GetBoolean(4),
                MyDR.GetString(5),
                MyDR.GetString(6),
                (MyDR.IsDBNull(7)) ? DateTime.MinValue : MyDR.GetDateTime(7)
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

            MyDR.NextResult();

            MyDR.Read();

            _return.Total = MyDR.GetInt32(0);
            _return.Respondidas = MyDR.GetInt32(1);
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

    public KeysPreview GetKeysByConsuntant(int consultant)
    {
      KeysPreview list = new KeysPreview();
      List<Key> keys = new List<Key>();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[spGetLicensesByConsultant]";

          Cmd.Parameters.AddWithValue("@ConsultantId", consultant);

          Con.Open();

          using (SqlDataReader reader = Cmd.ExecuteReader())
          {
            reader.Read();

            list.Total = reader.GetInt32(0);

            reader.NextResult();

            reader.Read();

            list.Available = reader.GetInt32(0);

            reader.NextResult();

            while (reader.Read())
            {
              Key key = new Key()
              {
                Guid = reader.GetGuid(0).ToString(),
                Email = reader.GetString(1),
                SentWhen = reader.GetDateTime(2),
                Started = reader.GetDateTime(3),
                Finished = reader.GetDateTime(4),
                BlockResult = reader.GetBoolean(5),
                Name = reader.GetString(6),
                Type = reader.GetInt32(7)
              };

              keys.Add(key);
            }
          }
        }
      }

      list.Keys = keys;

      return list;
    }

    public void DesbloquearChave(string keyGuid)
    {
      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[dbo].[spDesbloquearChave]";

          Cmd.Parameters.AddWithValue("@KeyGuid", keyGuid);

          Con.Open();

          Cmd.ExecuteNonQuery();
        }
      }
    }

    public void CancelarChave(string keyGuid, int userId)
    {
      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[dbo].[spCancelaChaveEnviada]";

          Cmd.Parameters.AddWithValue("@GuidDaChave", keyGuid);
          Cmd.Parameters.AddWithValue("@UserId", userId);

          Con.Open();

          Cmd.ExecuteNonQuery();
        }
      }
    }

    public string SendKeyConsultor(Key data)
    {
      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_SEND_KEY_INSERT_CONSULTOR]";

          Cmd.Parameters.AddWithValue("@EMAIL", data.Email);
          Cmd.Parameters.AddWithValue("@SENT_BY", data.SentBy);
          Cmd.Parameters.AddWithValue("@BLOCK_RESULT", data.BlockResult);
          Cmd.Parameters.AddWithValue("@Type", data.Type);

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            MyDR.Read();

            return MyDR.GetGuid(0).ToString();
          }
        }
      }
    }

    public void AlteraTipoDeChave(Key data)
    {
      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[dbo].[spAlteraTipoDeChave]";

          Cmd.Parameters.AddWithValue("@GuidDaChave", data.Guid);
          Cmd.Parameters.AddWithValue("@TipoDaChave", data.Type);

          Con.Open();

          Cmd.ExecuteNonQuery();
        }
      }
    }

    public List<Key> ChavesNaoRecebidasPorConsultor(User user)
    {
      List<Key> _return = new List<Key>();

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[dbo].[spGetChavesNaoRecebidas]";

          Cmd.Parameters.AddWithValue("@Consultor", user.Id);

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            while (MyDR.Read())
            {
              Key key = new Key()
              {
                Guid = MyDR.GetGuid(0).ToString(),
                Email = MyDR.GetString(1),
                Type = MyDR.GetInt32(2),
                SentWhen = MyDR.GetDateTime(3),
              };

              _return.Add(key);
            }
          }
        }
      }

      return _return;
    }

    public async Task<int> TransfereChaveAsync(Key data)
    {
      SqlParameter[] sqlParameters = new SqlParameter[]{
        /* 00 */ new SqlParameter("@Email", data.Email),
        /* 01 */ new SqlParameter("@EnviadoPor", data.SentBy),
        /* 02 */ new SqlParameter("@BloquearResultado", data.BlockResult),
        /* 03 */ new SqlParameter("@Tipo", data.Type),
      };

      object chave;

      using (SqlConnection Conn = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand("[dbo].[spTransfereChaveERetornaId]", Conn))
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Parameters.AddRange(sqlParameters);
          await Conn.OpenAsync();
          chave = await Cmd.ExecuteScalarAsync();
          await Conn.CloseAsync();
        }
      }

      return Convert.ToInt32(chave);
    }

    public async Task<Key> EnvioDeChaveInfoParaEmailAsync(int chaveId)
    {
      SqlParameter[] sqlParameters = new SqlParameter[]{
        /* 00 */ new SqlParameter("@ChaveId", chaveId),
      };

      Key chave;

      using (SqlConnection Conn = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand("[dbo].[spEnvioDeChaveInfoParaEmail]", Conn))
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Parameters.AddRange(sqlParameters);
          await Conn.OpenAsync();
          using (SqlDataReader reader = await Cmd.ExecuteReaderAsync())
          {
            await reader.ReadAsync();

            chave = new Key()
            {
              Guid = reader.GetGuid(0).ToString(),
              Email = reader.GetString(1),
            };
            
            await reader.CloseAsync();
          }
          await Conn.CloseAsync();
        }
      }

      return chave;
    }
  }
}