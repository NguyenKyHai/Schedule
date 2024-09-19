using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApp.Core.Entities
{
    [Table(name: "M_Config_D")]
    public class Config_DEntity
    {
        [Column(name: "HID")]
        public int Config_HId { get; set; }
        public Config_HEntity? Config_H { get; set; }

        [Column(name: "No")]
        public int No { get; set; } = 0;

        [Column(name: "Value1")]
        public int Value1 { get; set; } = 0;

        [Column(name: "Value2")]
        public string Value2 { get; set; } = string.Empty;

        [Column(name: "Value3")]
        public string Value3 { get; set; } = string.Empty;

        [Column(name: "Value4")]
        public string Value4 { get; set; } = string.Empty;

        [Column(name: "LanguageVN")]
        public string LanguageVN { get; set; } = string.Empty;

        [Column(name: "LanguageEN")]
        public string LanguageEN { get; set; } = string.Empty;

        //[Column(name: "Value5")]
        //public string Value5 { get; set; } = string.Empty;

        //[Column(name: "Value6")]
        //public string Value6 { get; set; } = string.Empty;

        //[Column(name: "Value7")]
        //public string Value7 { get; set; } = string.Empty;

        //[Column(name: "CreateDate")]
        //public DateTime CreateDate { set; get; } = DateTime.Now;

        //[Column(name: "CreateUID")]
        //public int CreateUID { set; get; } = 0;

        //[Column(name: "UpdateDate")]
        //public DateTime UpdateDate { set; get; } = DateTime.Now;

        //[Column(name: "UpdateUID")]
        //public int UpdateUID { set; get; } = 0;

        //[Key]
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        //[Column(name: "InternalID")]
        //public int InternalID { set; get; } = 0;
    }
}
