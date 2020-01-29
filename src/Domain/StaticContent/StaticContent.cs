namespace Profile4d.Domain
{
  public class StaticFirstPage : BasicReturn
  {
    public int Id { get; set; }
    public string Title_PT { get; set; }
    public string Title_ENG { get; set; }
    public string Text_PT { get; set; }
    public string Text_ENG { get; set; }
    public string CreatedBy { get; set; }
    public string Created { get; set; }

    public StaticFirstPage()
    {
    }
  }
}