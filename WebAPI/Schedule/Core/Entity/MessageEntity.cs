using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApp.Core.Entities
{
    [Table(name: "M_Message")]
    public class MessageEntity
    {
        [Key]
        [Column(name: "MessageID")]
        public string MessageID { get; set; } = string.Empty;

        [Column(name: "Message1")]
        public string Message1 { get; set; } = string.Empty;

        [Column(name: "Message2")]
        public string Message2 { get; set; } = string.Empty;

        [Column(name: "Message3")]
        public string Message3 { get; set; } = string.Empty;

        [Column(name: "Type")]
        public string Type { get; set; } = string.Empty;
    }
}
