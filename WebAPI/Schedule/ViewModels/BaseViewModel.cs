using Microsoft.EntityFrameworkCore;
using Schedule.Core.Entities;
using WebApp.Core.DataAccess;

namespace Schedule.ViewModels
{
    public class BaseDetailViewModel
    {
        public string? UpdatedDateDisplay { get; set; } = string.Empty;
        public string? UpdatedUserDisplay { get; set; } = string.Empty;
        public string? InsertedDateDisplay { get; set; } = string.Empty;
        public string? InsertedUserDisplay { get; set; } = string.Empty;
        public string? IssuedDateDisplay { get; set; } = string.Empty;
        public string? IssuedUserDisplay { get; set; } = string.Empty;
    }
}
