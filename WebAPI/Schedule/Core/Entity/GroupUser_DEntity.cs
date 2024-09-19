using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApp.Core.Entities
{
    [Table(name: "M_GroupUser_D")]
    public class GroupUser_DEntity
    {
        [Column(name: "GroupID")]
        public int GroupID { get; set; } = 0;

        public GroupUser_HEntity? GroupUser_H { get; set; }

        [Column(name: "FormID")]
        public int FormID { get; set; } = 0;

        [Column(name: "FormName")]
        public string FormName { get; set; } = string.Empty;

        [Column(name: "AuthorityFlag1")]
        public byte AuthorityFlag1 { get; set; } = 0;

        [Column(name: "AuthorityFlag2")]
        public byte AuthorityFlag2 { get; set; } = 0;

        [Column(name: "AuthorityFlag3")]
        public byte AuthorityFlag3 { get; set; } = 0;

        [Column(name: "AuthorityFlag4")]
        public byte AuthorityFlag4 { get; set; } = 0;

        [Column(name: "AuthorityFlag5")]
        public byte AuthorityFlag5 { get; set; } = 0;

        [Column(name: "AuthorityFlag6")]
        public byte AuthorityFlag6 { get; set; } = 0;

        [Column(name: "AuthorityFlag7")]
        public byte AuthorityFlag7 { get; set; } = 0;

        [Column(name: "AuthorityFlag8")]
        public byte AuthorityFlag8 { get; set; } = 0;

        [Column(name: "AuthorityFlag9")]
        public byte AuthorityFlag9 { get; set; } = 0;

        [Column(name: "AuthorityFlag10")]
        public byte AuthorityFlag10 { get; set; } = 0;

        [Column(name: "AuthorityFlag11")]
        public byte AuthorityFlag11 { get; set; } = 0;

        [Column(name: "AuthorityFlag12")]
        public byte AuthorityFlag12 { set; get; } = 0;

        [Column(name: "AuthorityFlag13")]
        public byte AuthorityFlag13 { set; get; } = 0;

        [Column(name: "AuthorityFlag14")]
        public byte AuthorityFlag14 { set; get; } = 0;

        [Column(name: "AuthorityFlag15")]
        public byte AuthorityFlag15 { set; get; } = 0;

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column(name: "InternalID")]
        public int InternalID { set; get; } = 0;


    }
}
