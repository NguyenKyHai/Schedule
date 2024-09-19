using Schedule.Core.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApp.Core.Entities
{
    [Table(name: "M_GroupUser_H")]
    public class GroupUser_HEntity : BaseEntity
    {

        [Column(name: "GroupCD")]
        public string GroupCD { get; set; } = string.Empty;

        [Column(name: "GroupName")]
        public string GroupName { get; set; } = string.Empty;

        public IList<GroupUser_DEntity> Details { get; } = new List<GroupUser_DEntity>();
    }
}
