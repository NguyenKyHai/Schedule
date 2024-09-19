using Schedule.Core.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace Schedule.Core.Entity
{
    [Table(name: "T_Schedule")]
    public class ScheduleRegisterEntity : BaseEntity
    {
        [Column(name: "SpecifyDateType")]
        public byte SpecifyDateType { get; set; } = 0;
        [Column(name: "StartDate")]
        public DateTime? StartDate { get; set; } = null;
        [Column(name: "EndDate")]
        public DateTime? EndDate { get; set; } = null;
        [Column(name: "StartDateTime")]
        public DateTime? StartDateTime { get; set; } = DateTime.Now;
        [Column(name: "EndDateTime")]
        public DateTime? EndDateTime { get; set; } = DateTime.Now;
        [Column(name: "MultipleDayType")]
        public byte MultipleDayType { get; set; } = 0;
        [Column(name: "Sunday")]
        public byte? Sunday { get; set; } = null;
        [Column(name: "Monday")]
        public byte? Monday { get; set; } = null;
        [Column(name: "Tuesday")]
        public byte? Tuesday { get; set; } = null;
        [Column(name: "Wednesday")]
        public byte? Wednesday { get; set; } = null;
        [Column(name: "Thursday")]
        public byte? Thursday { get; set; } = null;
        [Column(name: "Friday")]
        public byte? Friday { get; set; } = null;
        [Column(name: "Saturday")]
        public byte? Saturday { get; set; } = null;
        [Column(name: "DayOfMonth")]
        public byte? DayOfMonth { get; set; } = null;
        [Column(name: "WeekNum")]
        public byte? WeekNum { get; set; } = null;
        [Column(name: "DayOfWeek")]
        public byte? DayOfWeek { get; set; } = null;
        [Column(name: "ActionTypeID")]
        public int ActionTypeID { get; set; } = 0;
        [Column(name: "Destination")]
        public string Destination { get; set; } = string.Empty;
        [Column(name: "Subject")]
        public string Subject { get; set; } = string.Empty;
        [Column(name: "Content")]
        public string Content { get; set; } = string.Empty;
        [Column(name: "EquipmentID")]
        public int? EquipmentID { get; set; } = null;
        [Column(name: "DateFrom")]
        public DateTime? DateFrom { get; set; } = null;
        [Column(name: "DateTo")]
        public DateTime? DateTo { get; set; } = null;
        [Column(name: "ReferenceCD")]
        public int ReferenceCD { get; set; } = 0;
        [Column(name: "DeleteFlg")]
        public byte DeleteFlg { get; set; } = 0;
        [Column(name: "UserID")]
        public int UserID { get; set; } = 0;
        public EquipmentEntity? Equipment { get; set; }
        public ScheduleRegisterEntity Clone()
        {
            return (ScheduleRegisterEntity)this.MemberwiseClone();
        }
        [NotMapped]
        public UserEntity? User { get; set; }
    }
}
