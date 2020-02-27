using Profile4d.Domain;

namespace Profile4d.Data
{
  public interface IImages
  {
    public Image Logo();
    public BasicReturn LogoEdit(Image data);
    public Image TrinoBrain();
    public BasicReturn TrinoBrainEdit(Image data);

    public Image FourIntelligenceCenters();
    public BasicReturn FourIntelligenceCentersEdit(Image data);

    public Image ThreeDimension();
    public BasicReturn ThreeDimensionEdit(Image data);
  }
}