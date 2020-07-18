using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace Profile4d.DI
{
  public class CustomBadRequest : ValidationProblemDetails
  {
    public CustomBadRequest(ActionContext context)
    {
      Title = "Invalid arguments to the API";
      Detail = "The inputs supplied to the API are invalid";
      Status = 400;
      ConstructErrorMessages(context);
      Type = context.HttpContext.TraceIdentifier;
    }

    private void ConstructErrorMessages(ActionContext context)
    {
      foreach (var keyModelStatePair in context.ModelState)
      {
        var key = keyModelStatePair.Key;
        var errors = keyModelStatePair.Value.Errors;
        if (errors != null && errors.Count > 0)
        {
          if (errors.Count == 1)
          {
            var errorMessage = GetErrorMessage(errors[0]);
            Errors.Add(key, new[] { errorMessage });
          }
          else
          {
            var errorMessages = new string[errors.Count];
            for (var i = 0; i < errors.Count; i++)
            {
              errorMessages[i] = GetErrorMessage(errors[i]);
            }
            Errors.Add(key, errorMessages);
          }
        }
      }
    }

    string GetErrorMessage(ModelError error)
    {
      return string.IsNullOrEmpty(error.ErrorMessage) ? "The input was not valid." : error.ErrorMessage;
    }
  }
}
