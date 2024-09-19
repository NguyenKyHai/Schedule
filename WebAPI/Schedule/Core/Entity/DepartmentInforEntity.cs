using Schedule.Core.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApp.Core.Entities
{
    [Table(name: "M_Department_Infor")]
    public class DepartmentInforEntity : BaseEntity
    {
        [Column(name: "DepartmentCD")]
        public string DepartmentCD { get; set; } = string.Empty;

        [Column(name: "PostCD")]
        public string PostCD { get; set; } = string.Empty;

        [Column(name: "UserID")]
        public int UserID { get; set; } = 0;

        [Column(name: "IsMain")]
        public Int16 IsMain { get; set; } = 0;
        
    }
}
