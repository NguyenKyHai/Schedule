using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Principal;
using System.Text;
using WebApp.ViewModels;

namespace Schedule.Sercurity
{
    public class MyAuthorization : AuthorizeAttribute, IAuthorizationFilter
    {
        private readonly IConfiguration _configuration;

        public MyAuthorization(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        private TokenValidationParameters GetValidationParameters()
        {
            
            return new TokenValidationParameters()
            {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                ValidIssuer = _configuration["Jwt:Issuer"],
                ValidAudience = _configuration["Jwt:Audience"],
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"])),
                ClockSkew = TimeSpan.Zero
            };
        }

        private bool ValidateToken(string authToken)
        {
            try
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var validationParameters = GetValidationParameters();

                SecurityToken validatedToken;
                IPrincipal principal = tokenHandler.ValidateToken(authToken, validationParameters, out validatedToken);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public bool IsTokenExpired(string token)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var jwtToken = tokenHandler.ReadToken(token) as JwtSecurityToken;

            if (jwtToken == null)
                throw new ArgumentException("Invalid token");

            var expirationDate = jwtToken.ValidTo;
            return expirationDate < DateTime.UtcNow;
        }

        public void OnAuthorization(AuthorizationFilterContext filterContext)
        {
            if (!filterContext.HttpContext.Request.Headers.ContainsKey("jwt"))
            {
                var msg = "Header 'jwt' do not found";

                ErrorModel error = new ErrorModel();
                error.Errors = new List<ErrorDetail> { new ErrorDetail { Name = "401", Messages = new List<string> { string.Format(msg) } } };
                error.ErrorType = "Error";
                filterContext.Result = new ObjectResult(new ResponseViewModel<object?>() { HasError = true, Error = error, Data = null })
                {
                    StatusCode = 401
                };

            }
            else
            {
                string token = filterContext.HttpContext.Request.Headers["jwt"].ToString();
                if (IsTokenExpired(token))
                {
                    var msg = "Token is expired";

                    ErrorModel error = new ErrorModel();
                    error.Errors = new List<ErrorDetail> { new ErrorDetail { Name = "401", Messages = new List<string> { string.Format(msg) } } };
                    error.ErrorType = "Error";
                    filterContext.Result = new ObjectResult(new ResponseViewModel<object?>() { HasError = true, Error = error, Data = null })
                    {
                        StatusCode = 401
                    };
                }
                else if(!ValidateToken(filterContext.HttpContext.Request.Headers["jwt"].ToString()))
                {
                    filterContext.Result = new ForbidResult();
                }
            }
                    }
    }
}
