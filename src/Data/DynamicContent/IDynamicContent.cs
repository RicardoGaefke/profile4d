using Profile4d.Domain;

namespace Profile4d.Data
{
  public interface IDynamicContent
  {
    public Question.List List();
    public BasicReturn Add(Question data);
    public BasicReturn ChangeActive(Question data);

    public Question Question(string guid);

    public BasicReturn Edit(Question data);
  }
}