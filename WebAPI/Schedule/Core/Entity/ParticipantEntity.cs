using Schedule.Core.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace Schedule.Core.Entity
{
    [Table(name: "T_Participant")]
    public class ParticipantEntity : BaseEntity
    {
        [Column(name: "ScheduleID")]
        public int ScheduleID { set; get; } = 0;

        [Column(name: "UserID")]
        public int UserID { set; get; } = 0;

        [Column(name: "Attandance")]
        public byte Attandance { set; get; } = 0;

        [Column(name: "Comment")]
        public string? Comment { set; get; } = string.Empty;
        [NotMapped]
        public bool Checked { get; set; }
    }
}
