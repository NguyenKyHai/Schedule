using Microsoft.EntityFrameworkCore;
using WebApp.Core.DataAccess;

namespace Schedule.Services
{
    public class CommonHelper : ICommonHelper
    {
        private readonly WebAppContext _webAppContext;
        public CommonHelper(WebAppContext webAppContext) {  _webAppContext = webAppContext; }
        public string getRole(string userCd)
        {
            var query = from h in _webAppContext.GroupUser_Hs
                        join u in _webAppContext.Users on h.Id equals u.GroupID
                        where u.UserCD == userCd
                        select h.GroupName;
            return query.FirstOrDefault().ToString();
        }
    }
}
