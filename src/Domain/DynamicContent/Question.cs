using System.Collections.Generic;

namespace Profile4d.Domain
{
  public class Question : BasicReturn
  {
    public int Id {get; set;}
    public string Guid {get; set;}
    public bool Active {get; set;}
    public string Active_Created { get; set; }
    public string Active_CreatedBy {get; set;}
    public int Category { get; set; }
    public string Title_PT { get; set; }
    public string Title_ENG { get; set; }
    public string Text_PT { get; set; }
    public string Text_ENG { get; set; }
    public string CreatedBy { get; set; }
    public string Created { get; set; }
    public int Answer { get; set; }
    public int Total { get; set; }
    public int Respondidas { get; set; }

    public Question()
    {}

    public Question(string createdBy, string title_PT, string text_PT, string title_ENG, string text_ENG)
    {
      DomainException.When(!string.IsNullOrEmpty(createdBy), "CreatedBy is required!");

      DomainException.When(!string.IsNullOrEmpty(title_PT), "Title_PT is required!");
      DomainException.When(!(title_PT.Length < 3), "Title_PT - 5 character minimum!");
      DomainException.When(!(title_PT.Length > 95), "Title_PT - 95 character maximum!");

      DomainException.When(!string.IsNullOrEmpty(text_PT), "Text_PT is required!");
      DomainException.When(!(text_PT.Length < 5), "Text_PT - 5 character minimum!");
      DomainException.When(!(text_PT.Length > 8000), "Text_PT - 8000 character maximum!");

      DomainException.When(!string.IsNullOrEmpty(title_ENG), "Title_ENG is required!");
      DomainException.When(!(title_ENG.Length < 3), "Title_ENG - 5 character minimum!");
      DomainException.When(!(title_ENG.Length > 95), "Title_ENG - 95 character maximum!");

      DomainException.When(!string.IsNullOrEmpty(text_ENG), "Text_ENG is required!");
      DomainException.When(!(text_ENG.Length < 5), "Text_ENG - 5 character minimum!");
      DomainException.When(!(text_ENG.Length > 8000), "Text_ENG - 8000 character maximum!");

      this.CreatedBy = createdBy;
      this.Active_CreatedBy = createdBy;
      this.Title_PT = title_PT;
      this.Text_PT = text_PT;
      this.Title_ENG = title_ENG;
      this.Text_ENG = text_ENG;
    }

    public Question(
      string guid,
      bool active,
      string active_created,
      string active_createdBy,
      string title_PT,
      string text_PT,
      string title_ENG,
      string text_ENG,
      string created,
      string createdBy
    )
    {
      DomainException.When(!string.IsNullOrEmpty(guid), "Guid is required!");

      DomainException.When(!string.IsNullOrEmpty(active_createdBy), "Active_CreatedBy is required!");
      DomainException.When(!string.IsNullOrEmpty(active_created), "Active_Created is required!");
      DomainException.When(!string.IsNullOrEmpty(createdBy), "CreatedBy is required!");
      DomainException.When(!string.IsNullOrEmpty(created), "Created is required!");

      DomainException.When(!string.IsNullOrEmpty(title_PT), "Title_PT is required!");
      DomainException.When(!(title_PT.Length < 3), "Title_PT - 5 character minimum!");
      DomainException.When(!(title_PT.Length > 95), "Title_PT - 95 character maximum!");

      DomainException.When(!string.IsNullOrEmpty(text_PT), "Text_PT is required!");
      DomainException.When(!(text_PT.Length < 5), "Text_PT - 5 character minimum!");
      DomainException.When(!(text_PT.Length > 8000), "Text_PT - 8000 character maximum!");

      DomainException.When(!string.IsNullOrEmpty(title_ENG), "Title_ENG is required!");
      DomainException.When(!(title_ENG.Length < 3), "Title_ENG - 5 character minimum!");
      DomainException.When(!(title_ENG.Length > 95), "Title_ENG - 95 character maximum!");

      DomainException.When(!string.IsNullOrEmpty(text_ENG), "Text_ENG is required!");
      DomainException.When(!(text_ENG.Length < 5), "Text_ENG - 5 character minimum!");
      DomainException.When(!(text_ENG.Length > 8000), "Text_ENG - 8000 character maximum!");

      this.Guid = guid;
      this.Active = active;
      this.Active_Created = active_created;
      this.Active_CreatedBy = active_createdBy;
      this.Active_CreatedBy = createdBy;
      this.Title_PT = title_PT;
      this.Text_PT = text_PT;
      this.Title_ENG = title_ENG;
      this.Text_ENG = text_ENG;
      this.Created = created;
      this.CreatedBy = createdBy;
    }

    public Question(
      string guid,
      bool active,
      string active_created,
      string active_createdBy,
      int category,
      string title_PT,
      string text_PT,
      string title_ENG,
      string text_ENG,
      string created,
      string createdBy
    )
    {
      DomainException.When(!string.IsNullOrEmpty(guid), "Guid is required!");

      DomainException.When(!string.IsNullOrEmpty(active_createdBy), "Active_CreatedBy is required!");
      DomainException.When(!string.IsNullOrEmpty(active_created), "Active_Created is required!");
      DomainException.When(!string.IsNullOrEmpty(createdBy), "CreatedBy is required!");
      DomainException.When(!string.IsNullOrEmpty(created), "Created is required!");

      DomainException.When(!string.IsNullOrEmpty(title_PT), "Title_PT is required!");
      DomainException.When(!(title_PT.Length < 3), "Title_PT - 5 character minimum!");
      DomainException.When(!(title_PT.Length > 95), "Title_PT - 95 character maximum!");

      DomainException.When(!string.IsNullOrEmpty(text_PT), "Text_PT is required!");
      DomainException.When(!(text_PT.Length < 5), "Text_PT - 5 character minimum!");
      DomainException.When(!(text_PT.Length > 8000), "Text_PT - 8000 character maximum!");

      DomainException.When(!string.IsNullOrEmpty(title_ENG), "Title_ENG is required!");
      DomainException.When(!(title_ENG.Length < 3), "Title_ENG - 5 character minimum!");
      DomainException.When(!(title_ENG.Length > 95), "Title_ENG - 95 character maximum!");

      DomainException.When(!string.IsNullOrEmpty(text_ENG), "Text_ENG is required!");
      DomainException.When(!(text_ENG.Length < 5), "Text_ENG - 5 character minimum!");
      DomainException.When(!(text_ENG.Length > 8000), "Text_ENG - 8000 character maximum!");

      this.Guid = guid;
      this.Active = active;
      this.Active_Created = active_created;
      this.Active_CreatedBy = active_createdBy;
      this.Active_CreatedBy = createdBy;
      this.Category = category;
      this.Title_PT = title_PT;
      this.Text_PT = text_PT;
      this.Title_ENG = title_ENG;
      this.Text_ENG = text_ENG;
      this.Created = created;
      this.CreatedBy = createdBy;
    }

    public Question(string guid, string active_createdBy, bool active)
    {
      DomainException.When(!string.IsNullOrEmpty(guid), "Guid is required!");
      DomainException.When(!string.IsNullOrEmpty(active_createdBy), "Active_CreatedBy is required!");

      this.Guid = guid;
      this.Active_CreatedBy = active_createdBy;
      this.Active = active;
    }

    public Question(string title_PT, string text_PT, string title_ENG, string text_ENG)
    {
      DomainException.When(!string.IsNullOrEmpty(title_PT), "Title_PT is required!");
      DomainException.When(!(title_PT.Length < 3), "Title_PT - 5 character minimum!");
      DomainException.When(!(title_PT.Length > 95), "Title_PT - 95 character maximum!");

      DomainException.When(!string.IsNullOrEmpty(text_PT), "Text_PT is required!");
      DomainException.When(!(text_PT.Length < 5), "Text_PT - 5 character minimum!");
      DomainException.When(!(text_PT.Length > 8000), "Text_PT - 8000 character maximum!");

      DomainException.When(!string.IsNullOrEmpty(title_ENG), "Title_ENG is required!");
      DomainException.When(!(title_ENG.Length < 3), "Title_ENG - 5 character minimum!");
      DomainException.When(!(title_ENG.Length > 95), "Title_ENG - 95 character maximum!");

      DomainException.When(!string.IsNullOrEmpty(text_ENG), "Text_ENG is required!");
      DomainException.When(!(text_ENG.Length < 5), "Text_ENG - 5 character minimum!");
      DomainException.When(!(text_ENG.Length > 8000), "Text_ENG - 8000 character maximum!");

      this.Title_PT = title_PT;
      this.Text_PT = text_PT;
      this.Title_ENG = title_ENG;
      this.Text_ENG = text_ENG;
    }

    public class List : BasicReturn
    {
      public List<Question> Questions;
    }
  }
}