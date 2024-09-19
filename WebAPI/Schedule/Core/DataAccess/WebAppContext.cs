using Microsoft.EntityFrameworkCore;
using Schedule.Core.Entities;
using Schedule.Core.Entity;
using WebApp.CommonModel;
using WebApp.Core.Entities;

namespace WebApp.Core.DataAccess
{
    public class WebAppContext : DbContext
    {
        public WebAppContext(DbContextOptions<WebAppContext> options)
            : base(options)
        {
        }
 
        public DbSet<ActionTypeEntity> ActionTypes { get; set; }
        public DbSet<Config_DEntity> Config_Ds { get; set; }
        public DbSet<Config_HEntity> Config_Hs { get; set; }
        public DbSet<DepartmentEntity> DepartmentEntitys { get; set; }
        public DbSet<DepartmentInforEntity> DepartmentInforEntitys { get; set; }
        public DbSet<EquipmentEntity> Equipments { get; set; }
        public DbSet<GroupUser_DEntity> GroupUser_Ds { get; set; }
        public DbSet<GroupUser_HEntity> GroupUser_Hs { get; set; }
        public DbSet<MessageEntity> Messages { get; set; }
        public DbSet<ParticipantEntity> Participants { get; set; }
        public DbSet<ScheduleRegisterEntity> Schedules { get; set; }
        public DbSet<UserEntity> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Config_DEntity>()
                    .HasKey(p => new { p.No, p.Config_HId });

            modelBuilder.Entity<UserEntity>()
             .Property(p => p.UpdateDate)
             .IsConcurrencyToken();

            modelBuilder.Entity<Config_HEntity>()
             .Property(p => p.UpdateDate)
             .IsConcurrencyToken();

            // GroupUser
            modelBuilder.Entity<GroupUser_HEntity>()
             .Property(p => p.UpdateDate)
             .IsConcurrencyToken();

            modelBuilder.Entity<ScheduleRegisterEntity>()
             .HasOne(p => p.Equipment)
             .WithMany(b => b.Schedules)
             .HasForeignKey(p => p.EquipmentID);

            modelBuilder.Entity<ScheduleRegisterEntity>()
              .Property(p => p.UpdateDate)
              .IsConcurrencyToken();

            modelBuilder.Entity<DepartmentInfor>().ToView("DepartmentPathTreeView");
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.LogTo(Console.WriteLine);
            optionsBuilder.EnableSensitiveDataLogging();
        }
    }
}
