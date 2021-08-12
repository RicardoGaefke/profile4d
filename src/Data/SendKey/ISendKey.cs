using System.Collections.Generic;
using Profile4d.Domain;

namespace Profile4d.Data
{
  public interface ISendKey
  {
    string SendKey(Key data);
    string TransferKeys(Key data);
    List<Key> ActiveKeys(int user);
    List<Key> ActiveKeysByUserGuid(User user);
    List<Key> ActiveKeysByConsultantGuid(User user);
    Intro Intro();
    Question Question(string guid);
    void Answer(Question data);
    KeysPreview GetKeysByConsuntant(int consultant);
    void DesbloquearChave(string keyGuid);
    void CancelarChave(string keyGuid, int userId);
    string SendKeyConsultor(Key data);
  }
}