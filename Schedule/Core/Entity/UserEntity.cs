using System.ComponentModel.DataAnnotations.Schema;

namespace Schedule.Core.Entities
{
    [Table(name: "M_User")]
    public class UserEntity : BaseEntity
    {
        [Column(name: "UserCD")]
        public string UserCD { set; get; } = string.Empty;

        [Column(name: "LoginID")]
        public string LoginID { set; get; } = string.Empty;

        [Column(name: "UserName1")]
        public string UserName1 { set; get; } = string.Empty;

        [Column(name: "UserName2")]
        public string UserName2 { set; get; } = string.Empty;

        [Column(name: "Position1")]
        public string Position1 { set; get; } = string.Empty;

        [Column(name: "Position2")]
        public string Position2 { set; get; } = string.Empty;

        [Column(name: "Password")]
        public string Password { set; get; } = string.Empty;

        [Column(name: "DepartmentID")]
        public int DepartmentID { set; get; } = 0;

        [Column(name: "GroupID")]
        public int GroupID { set; get; } = 0;

        [Column(name: "StatusFlag")]
        public byte StatusFlag { set; get; } = 0;

        [Column(name: "MailAddress")]
        public string MailAddress { set; get; } = string.Empty;

        [Column(name: "Remarks")]
        public string Remarks { set; get; } = string.Empty;

        [Column(name: "UserImage")]
        public string? UserImage { set; get; } = string.Empty;
    }
}
