using Microsoft.IdentityModel.Tokens;
using Schedule.Services;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Schedule.Jwt
{
    public class JwtTokenGenerator
    {
        private readonly IConfiguration _configuration;
        private readonly ICommonHelper _commonHelper;

        public JwtTokenGenerator(IConfiguration configuration, ICommonHelper commonHelper)
        {
            _configuration = configuration;
            _commonHelper = commonHelper;
        }

        public string GenerateToken(string userCd)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            string role = _commonHelper.getRole(userCd);

            List<Claim> claims = new List<Claim>
            {
                 new Claim(ClaimTypes.Name, userCd),
                 new Claim(ClaimTypes.Role, role)
             };

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddMinutes(60),
                SigningCredentials = credentials,
                Issuer = _configuration["Jwt:Issuer"],
                Audience = _configuration["Jwt:Audience"]
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}
