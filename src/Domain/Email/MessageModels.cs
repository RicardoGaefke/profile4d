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

    private static string ServerAddress(string domain)
    {
      StringBuilder address = new StringBuilder();

      if (domain.Contains("localhost"))
      {
        address.Append("localhost:5080");
      }
      else if (domain.Contains("staging"))
      {
        address.Append("client.staging.performance9x.com.br");
      }
      else
      {
        address.Append("client.performance9x.com.br");
      }

      return address.ToString();
    }

    public static Content SendKey(string guid, string domain)
    {
      StringBuilder subject = new StringBuilder("Performance 9x - Nova chave/New key");

      StringBuilder body = new StringBuilder();
      body.Append("<p>Olá/Hello,</p>");
      body.AppendLine();
      body.Append("<p>Clique no link abaixo para completar o cadastro e ter acesso ao assessment.</p>");
      body.AppendLine();
      body.Append("<p>Click on the link below to complete the registration and access the assessment.</p>");
      body.AppendLine();
      body.Append($@"<p><a
                        href=""https://{ServerAddress(domain)}/confirmKey/{guid}""
                        title=""Nova chave / New Key""
                      >
                      https://{ServerAddress(domain)}/confirmKey/{guid}
                    </a></p>");

      return new Content(subject.ToString(), body.ToString());
    }

    public static Content TransferKeys(string guid, string domain, int keys)
    {
      StringBuilder subject = new StringBuilder("Performance 9x - Nova chave/New key");

      StringBuilder body = new StringBuilder();
      body.Append("<p>Olá/Hello,</p>");
      body.AppendLine();
      body.Append($"<p>Você está recebendo {keys.ToString()} chave(s) do sistema Profile4d. Por favor clique no link abaixo para confirmar o cadastro.</p>");
      body.AppendLine();
      body.Append($"<p>You are receiving {keys.ToString()} key(s) from the Profile4d system. Please click on the link below to confirm your registration.</p>");
      body.AppendLine();
      body.Append($@"<p><a
                        href=""https://{ServerAddress(domain)}/receiveKeys/{guid}""
                        title=""Nova chave / New Key""
                      >
                      https://{ServerAddress(domain)}/receiveKeys/{guid}
                    </a></p>");

      return new Content(subject.ToString(), body.ToString());
    }

    public static Content ChangeName(string name)
    {
      StringBuilder subject = new StringBuilder("Performance 9x - Nome alterado / Name changed");

      StringBuilder body = new StringBuilder();
      body.Append($"<p>Olá/Hello, {name},</p>");
      body.AppendLine();
      body.Append($"<p>Você está recebendo esta mensagem porque teu nome foi alterado no sistema.</p>");
      body.AppendLine();
      body.Append($"<p>You are receiving this message because your name was changed in the system.</p>");
      body.AppendLine();

      return new Content(subject.ToString(), body.ToString());
    }

    public static Content ChangeEmail(string name)
    {
      StringBuilder subject = new StringBuilder("Performance 9x - Email alterado / Email changed");

      StringBuilder body = new StringBuilder();
      body.Append($"<p>Olá/Hello, {name},</p>");
      body.AppendLine();
      body.Append($"<p>Você está recebendo esta mensagem porque teu email foi alterado no sistema.</p>");
      body.AppendLine();
      body.Append($"<p>You are receiving this message because your email was changed in the system.</p>");
      body.AppendLine();

      return new Content(subject.ToString(), body.ToString());
    }

    public static Content ChangePassword(string name)
    {
      StringBuilder subject = new StringBuilder("Performance 9x - Senha alterada / Password changed");

      StringBuilder body = new StringBuilder();
      body.Append($"<p>Olá/Hello, {name},</p>");
      body.AppendLine();
      body.Append($"<p>Você está recebendo esta mensagem porque tua senha foi alterado no sistema.</p>");
      body.AppendLine();
      body.Append($"<p>You are receiving this message because your password was changed in the system.</p>");
      body.AppendLine();

      return new Content(subject.ToString(), body.ToString());
    }

    public static Content ForgotPassword(User data, string domain)
    {
      StringBuilder subject = new StringBuilder("Performance 9x - Recuperação de senha / Password recovery");

      StringBuilder body = new StringBuilder();
      body.Append($"<p>Olá/Hello, {data.Name},</p>");
      body.AppendLine();
      body.Append($"<p>Você está recebendo esta mensagem com uma nova senha. Clique no link abaixo para ativá-la e utilize a senha abaixo:</p>");
      body.AppendLine();
      body.Append($"<p>You are receiving this message with a new password. Click the link below to activate it and use the password bellow:</p>");
      body.AppendLine();
      body.Append($"<p>{data.Password}</p>");
      body.AppendLine();
      body.Append($@"<p>
                      <a
                        href=""https://identity.performance9x.com.br/remember/{data.Guid}/{data.Id}""
                        title='Profile4D'
                      >
                        https://identity.performance9x.com.br/remember/{data.Guid}/{data.Id}
                      </a>
                  </p>");

      return new Content(subject.ToString(), body.ToString());
    }

    public static Content CreateUser(string name, string domain)
    {
      StringBuilder subject = new StringBuilder("Performance 9x - Criação de usuário / User creation");

      StringBuilder body = new StringBuilder();
      body.Append($"<p>Olá/Hello, {name},</p>");
      body.AppendLine();
      body.Append($"<p>Você está recebendo esta mensagem porque criou um perfil em nossa plataforma. Clique no link abaixo para acessar:</p>");
      body.AppendLine();
      body.Append($"<p>You are receiving this message because you submitted a profile. Click the link below to access it:</p>");
      body.AppendLine();
      body.Append($@"<p>
                      <a
                        href=""https://{ServerAddress(domain)}""
                        title='Profile4D'
                      >
                        https://{ServerAddress(domain)}
                      </a>
                  </p>");

      return new Content(subject.ToString(), body.ToString());
    }

    public static Content RequestKeys(string phone, string name, string email)
    {
      StringBuilder subject = new StringBuilder("Performance 9x - Solicitação de chaves");

      StringBuilder body = new StringBuilder();
      body.Append($"<p>Olá, Carlos,</p>");
      body.AppendLine();
      body.Append($"<p>Você está recebendo esta mensagem porque o usuário abaixo solicitou chaves:</p>");
      body.AppendLine();
      body.Append($"<p><strong>Nome:</strong> {name}</p>");
      body.AppendLine();
      body.Append($"<p><strong>Email:</strong> {email}</p>");
      body.AppendLine();
      body.Append($"<p><strong>Telefone:</strong> {phone}</p>");
      body.AppendLine();

      return new Content(subject.ToString(), body.ToString());
    }
  }
}
