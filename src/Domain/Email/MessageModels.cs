using System.Text;

namespace Profile4d.Domain
{
  public class EmailMessageModels
  {
    public class Content
    {
      public string Subject { get; set; }
      public string Body { get; set; }

      public Content(string subject, string body)
      {
        DomainException.When(!string.IsNullOrEmpty(subject), "Subject is required!");
        DomainException.When(!string.IsNullOrEmpty(body), "Body is required!");

        this.Subject = subject;
        this.Body = body;
      }
    }

    public static Content SendKey(string guid, string domain)
    {
      StringBuilder subject = new StringBuilder("Profile4d - Nova chave/New key");

      StringBuilder body = new StringBuilder();
      body.Append("<p>Olá/Hello,</p>");
      body.AppendLine();
      body.Append("<p>Clique no link abaixo para completar o cadastro e ter acesso ao assessment.</p>");
      body.AppendLine();
      body.Append("<p>Click on the link below to complete the registration and access the assessment.</p>");
      body.AppendLine();
      body.Append($@"<p><a
                        href=""https://{domain}/confirmKey/{guid}""
                        title=""Nova chave / New Key""
                      >
                      https://{domain}/confirmKey/{guid}
                    </a></p>");

      return new Content(subject.ToString(), body.ToString());
    }

    public static Content TransferKeys(string guid, string domain, int keys)
    {
      StringBuilder subject = new StringBuilder("Profile4d - Nova chave/New key");

      StringBuilder body = new StringBuilder();
      body.Append("<p>Olá/Hello,</p>");
      body.AppendLine();
      body.Append($"<p>Você está recebendo {keys.ToString()} chave(s) do sistema Profile4d. Por favor clique no link abaixo para confirmar o cadastro.</p>");
      body.AppendLine();
      body.Append($"<p>You are receiving {keys.ToString()} key(s) from the Profile4d system. Please click on the link below to confirm your registration.</p>");
      body.AppendLine();
      body.Append($@"<p><a
                        href=""https://{domain}/receiveKeys/{guid}""
                        title=""Nova chave / New Key""
                      >
                      https://{domain}/receiveKeys/{guid}
                    </a></p>");

      return new Content(subject.ToString(), body.ToString());
    }
  }
}