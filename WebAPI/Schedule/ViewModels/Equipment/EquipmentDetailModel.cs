namespace Schedule.ViewModels.Equipment
{
    public class EquipmentDetailModel : BaseDetailViewModel
    {
        public int? id { get; set; }

        public string equipmentCD { get; set; } = string.Empty;

        public string equipmentName { get; set; } = string.Empty;

        public string groupName { get; set; } = string.Empty;

        public bool statusFlag { get; set; }

        public string remarks { get; set; } = string.Empty;

        public string locales { get; set; } = "ja";
    }
}
