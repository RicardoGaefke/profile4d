using System.Collections.Generic;
using Profile4d.Domain;

namespace Profile4d.Data
{
  public interface ISendKey
  {
    string SendKey(Key data);
    string TransferKeys(Key data);
    List<Key> ActiveKeys(int user);
  }
}