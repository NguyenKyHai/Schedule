using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Schedule.Extentions;
using Schedule.Jwt;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using WebApp.Core.DataAccess;
using WebApp.ViewModels;
using WebApp.ViewModels.Login;

namespace Schedule.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly JwtTokenGenerator _jwtTokenGenerator;
        private readonly WebAppContext _webAppContext;
        private readonly IConfiguration _configuration;

        public LoginController(IConfiguration configuration, WebAppContext webAppContext, JwtTokenGenerator jwtTokenGenerator)
        {
            _configuration = configuration;
            _webAppContext = webAppContext;
            _jwtTokenGenerator = jwtTokenGenerator;
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginReqModel model)
        {
            var entity = await _webAppContext.Users.Where(x => x.LoginID.Equals(model.LoginId) && x.Password.Equals(model.Password.Encrypt()) && x.StatusFlag == 0).FirstOrDefaultAsync();
            if (entity == null)
            {
                var msg = "Login id or login password is not correct";

                ErrorModel error = new ErrorModel();
                error.Errors = new List<ErrorDetail> { new ErrorDetail { Name = "loginId", Messages = new List<string> { string.Format(msg) } } };
                var res = new ResponseViewModel<object?>() { HasError = true, Error = error, Data = null };
                return Ok(res);
            }

            string token = _jwtTokenGenerator.GenerateToken(entity.UserCD);
            LoginResModel? resModel = new LoginResModel() { userName = entity.UserName1, token = token };
            return Ok(new ResponseViewModel<LoginResModel>() { HasError = false, Data = resModel, Error = null });
        }
    }
}
