using System;

namespace Profile4d.Domain
{
  public class EmailReport
  {
    public int Id { get; set; }
    public string Email { get; set; }
    public int Dequeue { get; set; }
    public string SendGridKey { get; set; }
    public string When { get; set; }

    public EmailReport()
    {}

    public EmailReport(int id, string email, int dequeue, string sendGridKey, DateTime when)
    {
      this.Id = id;
      this.Email = email;
      this.Dequeue = dequeue;
      this.SendGridKey = sendGridKey;
      this.When = when.ToString("yyyy-MM-dd HH:mm:ss.fff");
    }
  }
}