using Microsoft.EntityFrameworkCore;
using Schedule.Core.Entities;
using WebApp.Core.DataAccess;

namespace Schedule.ViewModels
{
    public class BaseViewModel
    {
        protected async Task<UserEntity> GetUser(WebAppContext webAppContext, string userCD)
        {
            return await webAppContext.Users.Where(x => x.Id != 1 && x.UserCD.Equals(userCD)).FirstOrDefaultAsync();
        }
    }
}
