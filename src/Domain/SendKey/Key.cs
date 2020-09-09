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
    public int Keys { get; set; }
    public DateTime SentWhen { get; set; }
    public DateTime? Started { get; set; }
    public DateTime? Finished { get; set; }
    public bool Canceled { get; set; }
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

    /// <summary>
    /// Constructor for active keys list
    /// </summary>
    /// <param name="id"></param>
    /// <param name="guid"></param>
    /// <param name="started"></param>
    /// <param name="finished"></param>
    public Key(int id, string guid, DateTime? started, DateTime? finished)
    {
      DomainException.When(!(id < 1), "Id is required!");
      DomainException.When(!string.IsNullOrEmpty(guid), "Guid is required!");

      this.Id = id;
      this.Guid = guid;
      this.Started = started;
      this.Finished = finished;
    }

    public Key(string email, int sentBy, int keys, DateTime? when)
    {
      DomainException.When(!string.IsNullOrEmpty(email), "Email is required!");
      DomainException.When(!(sentBy < 1), "SentBy is required!");
      DomainException.When(!(keys < 1), "Keys is required!");

      this.Email = email;
      this.SentBy = sentBy;
      this.Keys = keys;
    }
  }
}
