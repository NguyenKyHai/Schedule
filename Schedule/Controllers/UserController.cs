using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Schedule.Core.Entities;
using System;
using WebApp.Core.DataAccess;

namespace Schedule.Controllers
{
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly WebAppContext _webAppContext;
        private readonly ILogger<UserController> _logger;

        public UserController(IConfiguration configuration, WebAppContext webAppContext, ILogger<UserController> logger)
        {
            _configuration = configuration;
            _webAppContext = webAppContext;
            _logger = logger;
        }

        [Route("api/[controller]/users")]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            List<UserEntity> users = await _webAppContext.Users.ToListAsync();

            return Ok(users);
        }
    }
}
