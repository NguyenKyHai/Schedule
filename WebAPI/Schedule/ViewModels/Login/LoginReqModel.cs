using System.ComponentModel.DataAnnotations;

namespace WebApp.ViewModels.Login
{
    public class LoginReqModel: IValidatableObject
    {
        public string LoginId { get; set; } = string.Empty;

        public string Password { get; set; } = string.Empty;

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            //var serviceMsg = validationContext.GetRequiredService<MessageService>();
            //var msg1050 = serviceMsg.GetLanguageById(BaseViewModel.REQUIRED_ID);

            //loginId
            if (string.IsNullOrEmpty(LoginId))
            {
                yield return new ValidationResult(string.Format("Please enter your login name", "Login Id"), new[] { $"loginId" });
            }

            //password
            if (string.IsNullOrEmpty(Password))
            {
                yield return new ValidationResult(string.Format("Please enter your login password", "Password"), new[] { $"password" });
            }
        }
    }
}
