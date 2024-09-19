using Schedule.Core.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApp.Core.Entities
{
    [Table(name: "M_Department")]
    public class DepartmentEntity : BaseEntity
    {
        [Column(name: "DepartmentCD")]
        public string DepartmentCD { set; get; } = string.Empty;

        [Column(name: "DepartmentName")]
        public string DepartmentName { set; get; } = string.Empty;

        [Column(name: "DepartmentName2")]
        public string DepartmentName2 { set; get; } = string.Empty;

        [Column(name: "DepartmentParentCD")]
        public string DepartmentParentCD { set; get; } = string.Empty;

        [Column(name: "DepartmentLv")]
        public int DepartmentLv { set; get; } = 0;

    }
}
