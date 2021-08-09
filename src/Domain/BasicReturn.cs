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

  public class BasicReturn<T>
  {
    public bool Success;
    public string Message;
    public string Details;
    public string Code;
    public string Url;
    public T Object;

    /// <summary>
    /// Basic constructor
    /// </summary>
    public BasicReturn()
    {
      this.Success = true;
    }

    /// <summary>
    /// Constructor with Success flag
    /// </summary>
    /// <param name="success"></param>
    public BasicReturn(bool success)
    {
      this.Success = success;
    }

    /// <summary>
    /// Constructor with Success and Object
    /// </summary>
    /// <param name="success"></param>
    /// <param name="Object"></param>
    public BasicReturn(bool success, T Object)
    {
      this.Success = success;
      this.Object = Object;
    }

    /// <summary>
    /// Constructor with details
    /// </summary>
    /// <param name="success"></param>
    /// <param name="message"></param>
    /// <param name="code"></param>
    public BasicReturn(bool success, string message, string code = "")
    {
      this.Success = success;
      this.Message = message;
      this.Code = code;
    }
  }
}