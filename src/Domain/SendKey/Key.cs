using System;

namespace Profile4d.Domain
{
  public class Key : BasicReturn
  {
    public int Id { get; set; }
    public string Guid { get; set; }
    public string Email { get; set; }
    public int SentBy { get; set; }
    public int Consultant { get; set; }
    public int SentWhen { get; set; }
    public DateTime Started { get; set; }
    public DateTime Finished { get; set; }
    public DateTime Canceled { get; set; }
    public int CanceledBy { get; set; }
    public DateTime CanceledWhen { get; set; }

    public Key()
    {}

    public Key(string email, int sentBy, int consultant)
    {
      DomainException.When(!string.IsNullOrEmpty(email), "Email is required!");
      DomainException.When(!(sentBy < 1), "SentBy is required!");
      DomainException.When(!(consultant < 1), "Consultant is required!");

      this.Email = email;
      this.SentBy = sentBy;
      this.Consultant = consultant;
    }
  }
}
