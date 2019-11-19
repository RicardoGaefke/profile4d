using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;

namespace Profile4d.WebJob.Teste
{
  public class Functions
  {
    public static void ProcessQueueMessage([QueueTrigger("teste")] string message, ILogger logger)
    {
      logger.LogInformation(message);
    }
  }
}