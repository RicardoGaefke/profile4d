using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Profile4d.Domain
{
  public class KeysPreview : BasicReturn
  {
    public int Consultant { get; set; }
    public int Total { get; set; }
    public int Available { get; set; }
    public List<Key> Keys { get; set; }

    public KeysPreview(){}
  }
}
