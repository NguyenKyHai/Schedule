using Schedule.Core.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace Schedule.Core.Entity
{
    [Table(name: "M_Equipment")]
    public class EquipmentEntity : BaseEntity
    {
        [Column(name: "EquipmentCD")]
        public string EquipmentCD { set; get; } = string.Empty;

        [Column(name: "EquipmentName")]
        public string EquipmentName { set; get; } = string.Empty;

        [Column(name: "GroupName")]
        public string GroupName { set; get; } = string.Empty;

        [Column(name: "StatusFlag")]
        public byte StatusFlag { set; get; } = 0;

        [Column(name: "Remarks")]
        public string Remarks { set; get; } = string.Empty;
        public IList<ScheduleRegisterEntity>? Schedules { get; set; }
    }
}
