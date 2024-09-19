using Schedule.Core.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApp.Core.Entities
{
    [Table(name: "M_Config_H")]
    public class Config_HEntity : BaseEntity
    {       
        [Column(name: "ConfigCD")]
        public string ConfigCD { get; set; } = string.Empty;

        [Column(name: "ConfigName")]
        public string ConfigName { get; set; } = string.Empty;

        //[Column(name: "InitValue")]
        //public int InitValue { get; set; } = 0;

        public IList<Config_DEntity> Details { get; } = new List<Config_DEntity>();
    }
}
