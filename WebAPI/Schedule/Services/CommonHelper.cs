using Microsoft.EntityFrameworkCore;
using WebApp.Core.DataAccess;
using WebApp.Core.Entities;

namespace Schedule.Services
{
    public class CommonHelper : ICommonHelper
    {
        private readonly WebAppContext _webAppContext;
        public CommonHelper(WebAppContext webAppContext) {  _webAppContext = webAppContext; }
        public string getRole(string userCd)
        {
            /*var query = from h in _webAppContext.GroupUser_Hs
                        join u in _webAppContext.Users on h.Id equals u.GroupID
                        where u.UserCD == userCd
                        select h.GroupName;*/

            var res = _webAppContext.GroupUser_Hs
                                   .Join(_webAppContext.Users,
                                    group => group.Id,
                                    user => user.GroupID,
                                    (group, user) => new { GroupName = group.GroupName, UserCd = user.UserCD })
                                    .Where(user => user.UserCd == userCd).FirstOrDefault();
            if (res!= null)
            {
                return res.GroupName.ToString();
            }
            return string.Empty;
        }
    }
}
