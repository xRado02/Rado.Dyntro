using Microsoft.EntityFrameworkCore;
using Rado.Dyntro.Server.Data.Entities;

public class AppDbContext : DbContext
{
    public DbSet<Order> Orders { get; set; } = null!;
    public DbSet<User> Users { get; set; } = null!;

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
       
        modelBuilder.Entity<Order>().Property(o => o.Status).HasConversion<string>();
        modelBuilder.Entity<Order>().Property(o => o.Priority).HasConversion<string>();
        modelBuilder.Entity<Order>().Property(o => o.Category).HasConversion<string>();
        modelBuilder.Entity<User>().Property(u => u.Role).HasConversion<string>();


        modelBuilder.Entity<User>()
            .HasMany(u => u.Orders)
            .WithOne(o => o.User)
            .HasForeignKey(o => o.UserId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
