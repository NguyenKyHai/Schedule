using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Schedule.Extentions;
using Schedule.Jwt;
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

        public LoginController(JwtTokenGenerator jwtTokenGenerator, WebAppContext webAppContext)
        {
            _jwtTokenGenerator = jwtTokenGenerator;
            _webAppContext = webAppContext;
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginReqModel model)
        {
            var entity = await _webAppContext.Users.Where(x => x.LoginID.Equals(model.LoginId) && x.Password.Equals(model.Password.Encrypt()) && x.StatusFlag == 0).FirstOrDefaultAsync();
            if (entity == null)
            {
                var msg = "Login name or login password is not correct";

                ErrorModel error = new ErrorModel();
                //error.Errors = new List<ErrorDetail> { new ErrorDetail { Name = "loginId", Messages = new List<string> { string.Format(msg.Message3) } } };
                error.Errors = new List<ErrorDetail> { new ErrorDetail { Name = "loginId", Messages = new List<string> { string.Format(msg) } } };
                var res = new ResponseViewModel<object?>() { HasError = true, Error = error, Data = null };
                return Ok(new ResponseViewModel<string>() { HasError = true, Error = error });
            }
            string token = _jwtTokenGenerator.GenerateToken(entity.UserName1);

            return Ok(new { token = token });
        }
    }

}
