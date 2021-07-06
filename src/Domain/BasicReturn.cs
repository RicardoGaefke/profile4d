namespace Profile4d.Domain
{
  public class BasicReturn
  {
    public bool Success;
    public string Message;
    public string Details;
    public string Code;
    public string Url;

    public BasicReturn()
    {}

    public BasicReturn(bool success)
    {
      this.Success = success;
    }

    public BasicReturn(bool success, string message, string details)
    {
      this.Success = success;
      this.Message = message;
      this.Details = details;
    }
  }
}