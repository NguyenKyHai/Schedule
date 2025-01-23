using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Schedule.Jwt;

namespace WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly JwtTokenGenerator _jwtTokenGenerator;

        public AuthController(IConfiguration configuration, JwtTokenGenerator jwtTokenGenerator)
        {
            _configuration = configuration;
            _jwtTokenGenerator = jwtTokenGenerator;
        }

        [HttpGet("login-google")]
        public IActionResult LoginWithGoogle()
        {
            var properties = new AuthenticationProperties { RedirectUri = "/api/Auth/signin-google" };

            return Challenge(properties, GoogleDefaults.AuthenticationScheme);
        }

        [HttpGet("signin-google")]
        public async Task<IActionResult> GoogleResponse()
        {

            var info = await HttpContext.AuthenticateAsync(GoogleDefaults.AuthenticationScheme);
            if (info?.Principal == null)
            {
                return Unauthorized();
            }

            var id = info.Principal.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            //var email = info.Principal.FindFirst(ClaimTypes.Email)?.Value;
            //var name = info.Principal.FindFirst(ClaimTypes.Name)?.Value;

            string token = _jwtTokenGenerator.GenerateToken(id);

            return Ok(new { token = token });
        }
    }
}
