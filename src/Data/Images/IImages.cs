using Profile4d.Domain;

namespace Profile4d.Data
{
  public interface IImages
  {
    public Image Logo();
    public BasicReturn LogoEdit(Image data);
  }
}