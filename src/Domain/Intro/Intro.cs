namespace Profile4d.Domain
{
  public class Intro : BasicReturn
  {
    public Image Image { get; set; }
    public StaticFirstPage Texts { get; set; }

    public Intro()
    {}

    /// <summary>
    /// Constructor for first page of assessment
    /// </summary>
    /// <param name="image"></param>
    /// <param name="texts"></param>
    public Intro (Image image, StaticFirstPage texts)
    {
      this.Image = image;
      this.Texts = texts;
    }
  }
}