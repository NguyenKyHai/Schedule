using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WebApp.Core.DataAccess;
using WebApp.Services;
using static Org.BouncyCastle.Math.EC.ECCurve;

namespace System.ComponentModel.DataAnnotations
{
    public class CustomValidationResult : ValidationResult
    {
        public int ErrorCode { get; set; }
        public string[] ErrorParameters { get; set; }

        public CustomValidationResult(string errorMessage, int errorCode, string[] errorParameters)
            : base(errorMessage)
        {
            ErrorCode = errorCode;
            ErrorParameters = errorParameters;
        }
    }
}
