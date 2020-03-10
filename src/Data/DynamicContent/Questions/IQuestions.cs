using Profile4d.Domain;

namespace Profile4d.Data
{
  public interface IQuestions
  {
    public Question.List List();
    public BasicReturn Add(Question data);
  }
}