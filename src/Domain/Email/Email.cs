using System;
using System.Collections.Generic;

namespace Profile4d.Domain
{
  public class EmailMessage
  {
    public class Attachment
    {
      public int Id { get; set; }
      public int Email { get; set; }
      public string Container { get; set; }
      public string File { get; set; }
    }
    public class Message : BasicReturn
    {
      public int Id { get; set; }
      public string Guid { get; set; }
      public string Name { get; set; }
      public string Email { get; set; }
      public EmailMessageModels.Content Content { get; set; }
      public int SentBy { get; set; }
      public DateTime SentWhen { get; set; }
      public string SendGridKey { get; set; }
      public DateTime SendGridWhen { get; set; }
      public List<Attachment> Attachments { get; set; }

      public Message()
      {}
      
      /// <summary>
      /// Use this Constructor for a message without attachments
      /// </summary>
      public Message (string name, string email, EmailMessageModels.Content content, int sentBy)
      {
        DomainException.When(!string.IsNullOrEmpty(name), "Name is required!");
        DomainException.When(!string.IsNullOrEmpty(email), "Email is required!");
        DomainException.When(!(sentBy < 1), "SentBy is required!");

        this.Name = name;
        this.Email = email;
        this.SentBy = sentBy;
        this.Content = content;
      }
    }
  }
}