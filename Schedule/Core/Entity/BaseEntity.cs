using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Schedule.Core.Entities
{
    public class BaseEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column(name: "ID")]
        public int Id { set; get; } = 0;

        [Column(name: "CreateDate")]
        public DateTime CreateDate { set; get; } = DateTime.Now;

        [Column(name: "CreateUID")]
        public int CreateUID { set; get; } = 0;

        [Column(name: "UpdateDate")]
        public DateTime UpdateDate { set; get; } = DateTime.Now;

        [Column(name: "UpdateUID")]
        public int UpdateUID { set; get; } = 0;
    }
}