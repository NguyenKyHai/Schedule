using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Schedule.Core.Entities;
using WebApp.Core.DataAccess;

namespace Schedule.Controllers
{
    [Authorize]
    [ApiController]
    public class UserController : ApiControllerBase
    {
        private readonly WebAppContext _webAppContext;

        public UserController(WebAppContext webAppContext)
        {
            _webAppContext = webAppContext;
        }

        [Route("api/[controller]/users")]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            List<UserEntity> users = await _webAppContext.Users.ToListAsync();
            return Ok(users);
        }

        [Route("api/[controller]/{id}")]
        [HttpGet]
        public async Task<IActionResult> GetUserById(int id)
        {
            return Ok(await _webAppContext.Users.FindAsync(id));
        }

    }
}
