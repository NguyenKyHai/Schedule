using Microsoft.AspNetCore.Mvc;
using Schedule.Sercurity;
using System.Security.Claims;

namespace Schedule.Controllers
{
    [ServiceFilter(typeof(MyAuthorization))]
    public class ApiControllerBase : ControllerBase
    {
        protected string role
        {
            get
            {
                string _role = string.Empty;
                if (User != null && User.FindFirst(ClaimTypes.Role) != null)
                {
                    _role =  User.FindFirst(ClaimTypes.Role).Value;
                }
                 return _role;
            }
        }

        protected bool isAdminRole()
        {
            return role == "Admin";
        }
    }
}