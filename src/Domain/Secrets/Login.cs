namespace Profile4d.Domain
{
  public class Secrets
  {
    public class Login
    {
      public string KeyVault { get; set; }
      public string ClientID { get; set; }
      public string ClientSecret { get; set; }
      public string Blob { get; set; }
    }
  }
}