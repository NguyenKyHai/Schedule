using Microsoft.AspNetCore.Mvc;
using Schedule.Sercurity;

namespace Schedule.Controllers
{
    [ServiceFilter(typeof(MyAuthorization))]
    public class ApiControllerBase : ControllerBase
    {
       /* protected int UserId
        {
            get
            {
                if (User != null && User.Identity != null && !string.IsNullOrEmpty(User.Identity.Name))
                {
                    return int.Parse(User.Identity.Name);
                }
                throw new Exception("UserId not found.");
            }
        }*/
    }
}