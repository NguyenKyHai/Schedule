using Schedule.Core.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApp.Core.Entities
{
    [Table(name: "M_ActionType")]
    public class ActionTypeEntity : BaseEntity
    {
        [Column(name: "ActionTypeID")]
        public string ActionTypeId { get; set; } = string.Empty;
        [Column(name: "ActionTypeName")]
        public string ActionTypeName { get; set; } = string.Empty;
        [Column(name: "ActionTypeNameVN")]
        public string? ActionTypeNameVN { get; set; } = string.Empty;
        [Column(name: "ActionTypeNameEN")]
        public string? ActionTypeNameEN { get; set; } = string.Empty;
        //Can be enum
        [Column(name: "ActionTypeClass")]
        public byte ActionTypeClass { get; set; } = 0;
        [Column(name: "ActionTypeColor")]
        public string ActionTypeColor { get; set; } = string.Empty;
        //Can be enum
        [Column(name: "ActionTypeStatus")]
        public byte ActionTypeStatus { get; set; } = 0;
        [Column(name: "ActionTypeNote")]
        public string ActionTypeNote { get; set; } = string.Empty;
    }
}
